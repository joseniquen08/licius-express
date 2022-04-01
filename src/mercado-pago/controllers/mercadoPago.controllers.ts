import { NextFunction, Request, Response } from 'express';
import { IPost } from '../../post/entity/types/post.types';
import { createPostService } from '../../post/services/createPost.services';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreatePaymentWithoutPostId, CreatePreference } from '../entity/types/mercadoPago.types';
import { createPaymentService, createPreferencePostService } from '../services/mercadoPago.services';

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
    const post: IPost = await createPostService({
      title: req.body.title,
      content: req.body.content,
      attachment_urls: req.body.attachment_urls,
      user_id: req.body.user_id
    });
    await createPaymentService({
      post_id: post.id,
      payment_id: req.body.payment_id,
      payment_type: req.body.payment_type,
      merchant_order_id: req.body.merchant_order_id
    });
    res.status(201).json({ status: 'success' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}
