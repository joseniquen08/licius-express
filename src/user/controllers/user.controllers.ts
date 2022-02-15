import { NextFunction, Request, Response } from 'express';
import tokenConfig from '../../config/token.config';
import { userRequest } from '../entity/types/user.types';
import { createClientService } from '../services/createClient.services';
import { createRestaurantService } from '../services/createRestaurant.services';
import { createUserService } from '../services/createUser.services';

const { sign, verify } = require('jsonwebtoken');

const { secret, expires } = tokenConfig;

const authToken = (payload: any, expiresIn = expires) => sign(payload, secret, { algorithm: 'HS256', expiresIn });

export const createUser = async (req: Request<{},{},userRequest>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    });
    if (user.role === 2) {
      const client = await createClientService({
        user_id: user._id,
        profile: {
          first_name: req.body.first_name,
          last_name: req.body.last_name
        }
      });
      const token = authToken({ id: client._id });
      res.status(200).json({
        success: true,
        token
      });
    } else if (user.role === 3) {
      const restaurant = await createRestaurantService({
        user_id: user._id,
        category_id: req.body.category_id,
        profile: {
          razon_social: req.body.razon_social,
          ruc: req.body.ruc,
          nombre_comercial: req.body.nombre_comercial,
          description: req.body.description
        }
      });
      const token = authToken({ id: restaurant._id });
      res.status(200).json({
        success: true,
        token
      })
    }
  } catch (error) {
    next(error);
  }
}