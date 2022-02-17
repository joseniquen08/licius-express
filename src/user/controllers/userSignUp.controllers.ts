import { NextFunction, Request, Response } from 'express';
import { signUpClient, signUpRestaurant } from '../entity/types/user.types';
import { createClientService } from '../services/createClient.services';
import { createRestaurantService } from '../services/createRestaurant.services';
import { createUserService } from '../services/createUser.services';
import { createToken } from '../utils/token.utils';

export const createClient = async (req: Request<{}, {}, signUpClient>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService(req.body);
    const client = await createClientService({
      user_id: user._id,
      profile: {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      },
      ...req.body
    });
    const token = createToken({ id: client._id,});
    res.status(200).header('Authorization', 'Bearer ' + token).json({ success: true });
  } catch (error) {
    next(error);
  }
}

export const createRestaurant = async (req: Request<{}, {}, signUpRestaurant>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService(req.body);
    const client = await createRestaurantService({
      user_id: user._id,
      profile: {
        razon_social: req.body.razon_social,
        ruc: req.body.ruc,
        nombre_comercial: req.body.nombre_comercial,
        description: req.body.description
      },
      ...req.body
    });
    const token = createToken({ id: client._id,});
    res.status(200).header('Authorization', 'Bearer ' + token).json({ success: true });
  } catch (error) {
    next(error);
  }
}
