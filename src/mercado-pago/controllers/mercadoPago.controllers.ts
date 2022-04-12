import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import { sendMailService } from '../../mailing/services/mailService';
import { IPost } from '../../post/entity/types/post.types';
import { createPostService } from '../../post/services/createPost.services';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getRestaurantById } from '../../user/services/getRestaurantById.services';
import { getUserById } from '../../user/services/getUserById.services';
import { CreatePaymentWithoutPostId, CreatePreference } from '../entity/types/mercadoPago.types';
import { createPaymentService, createPreferencePostService } from '../services/mercadoPago.services';

export const createPreferencePost = async(req: Request<{}, {}, CreatePreference>, res: Response, next: NextFunction) => {
  try {
    const preference_id = await createPreferencePostService(req.body);
    res.status(201).json({ response: preference_id, id: preference_id.body.id });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}

export const savePaymentPost = async(req: Request<{}, {}, CreatePaymentWithoutPostId>, res: Response, next: NextFunction) => {
  try {
    const user_id= req.body.user_id
    const userData = await getUserById(user_id)
    const restaurantData = await getRestaurantById(user_id)
    const recipientFirstName = restaurantData?.profile.nombre_comercial;
    const recipientEmail = userData?.email;

    const {
      title,content,attachment_urls,
      payment_id,payment_type,merchant_order_id,
      begin_date,end_date,unit_price, quantity,
      total_amount,
    } = req.body

    const post: IPost = await createPostService({
      title,
      content,
      attachment_urls,
      user_id,
      is_promoted: true
    });

    await createPaymentService({
      post_id: post.id,
      payment_id,
      payment_type,
      merchant_order_id,
      begin_date,
      end_date,
      unit_price,
      quantity,
      total_amount,
    });

    await sendMailService({
        recipientFirstName,
        recipientEmail,
        orderNumber: payment_id,
        billingAmount: unit_price * quantity,
        beginDate: moment(begin_date).format('ll'),
        endDate: moment(end_date).format('ll'),
      },{
        text  : "Tu compra ha sido procesada satisfactoriamente"
      },"",);
    res.status(201).json({ status: 'success' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}
