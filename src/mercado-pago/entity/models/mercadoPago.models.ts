import { model, Model } from 'mongoose';
import { MercadoPagoSchema, PaymentSuccessSchema } from '../schemas/mercadoPago.schemas';
import { IMercadoPago, IPaymentSuccess } from '../types/mercadoPago.types';

export interface IPaymentSuccessTwo extends IPaymentSuccess, Document {
  assingExpireAt: (seconds: number) => void;
}

export const MercadoPagoModel = model<IMercadoPago>('MercadoPago', MercadoPagoSchema);
export const PaymentSuccessModel = model<IPaymentSuccess, Model<IPaymentSuccess, {}, IPaymentSuccessTwo>>('PaymentSuccess', PaymentSuccessSchema);
