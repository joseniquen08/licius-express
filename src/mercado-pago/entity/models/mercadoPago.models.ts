import { model, Model } from 'mongoose';
import { PaymentSuccessSchema } from '../schemas/mercadoPago.schemas';
import { IPaymentSuccess } from '../types/mercadoPago.types';

export interface IPaymentSuccessTwo extends IPaymentSuccess, Document {
  assingExpireAt: (seconds: number) => void;
}

export const PaymentSuccessModel = model<IPaymentSuccess, Model<IPaymentSuccess, {}, IPaymentSuccessTwo>>('PaymentSuccess', PaymentSuccessSchema);
