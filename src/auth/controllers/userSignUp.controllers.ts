import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { SignUpClient, SignUpRestaurant } from '../../user/entity/types/user.types';
import { createClientService } from '../services/createClient.services';
import { createRestaurantService } from '../services/createRestaurant.services';
import { createUserService } from '../services/createUser.services';
import { tokenService } from '../utils/token.utils';

const { createToken } = tokenService;

export const createClient = async (req: Request<{}, {}, SignUpClient>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService(req.body);
    const token = await createClientService({
      user_id: user._id,
      profile: {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      },
      ...req.body
    });
    res.status(201).json({ success: true, token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}

export const createRestaurant = async (req: Request<{}, {}, SignUpRestaurant>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService(req.body);
    const token = await createRestaurantService({
      user_id: user._id,
      profile: {
        razon_social: req.body.razon_social,
        ruc: req.body.ruc,
        nombre_comercial: req.body.nombre_comercial,
        description: req.body.description
      },
      ...req.body
    });
    res.status(201).json({ success: true, token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}
