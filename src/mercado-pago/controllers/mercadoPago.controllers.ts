import { NextFunction, Request, Response } from 'express';
import { createPostService } from '../../post/services/createPost.services';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreatePaymentWithoutPostId, CreatePreference } from '../entity/types/mercadoPago.types';
import { createPreferencePostService } from '../services/mercadoPago.services';

export const createPreferencePost = async(req: Request<{}, {}, CreatePreference>, res: Response, next: NextFunction) => {
  try {
    const preference_id = await createPreferencePostService(req.body);
    res.status(201).json({ id: preference_id.body.id });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}

export const savePaymentPost = async(req: Request<{}, {}, CreatePaymentWithoutPostId>, res: Response, next: NextFunction) => {
  try {
    const post_id = await createPostService({
      title: req.body.title,
      content: req.body.content,
      attachment_urls: req.body.attachment_urls,
      user_id: req.body.user_id
    });
    // const response = await createPaymentService(req.body);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}
