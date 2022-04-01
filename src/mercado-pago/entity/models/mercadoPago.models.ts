import { Model, model } from 'mongoose';
import { MercadoPagoSchema, PaymentSuccessSchema } from '../schemas/mercadoPago.schemas';
import { IMercadoPago, IPaymentSuccess } from '../types/mercadoPago.types';

export interface IPaymentSuccessTwo extends Model<{seconds: number}> {
  findAndPopulateById(seconds: number): void;
}

export const MercadoPagoModel = model<IMercadoPago>('MercadoPago', MercadoPagoSchema);
export const PaymentSuccessModel = model<IPaymentSuccess, IPaymentSuccessTwo>('PaymentSuccess', PaymentSuccessSchema);
