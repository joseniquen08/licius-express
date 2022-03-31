import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreatePreference } from '../entity/types/mercadoPago.types';
import { createPreferencePostService } from '../services/mercadoPago.services';

export const createPreferencePost = async(req: Request<{}, {}, CreatePreference>, res: Response, next: NextFunction) => {
  try {
    const preference_id = await createPreferencePostService(req.body);
    res.status(201).json({ id: preference_id.body.id });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}
