import { model } from 'mongoose';
import { PaymentSuccessSchema } from '../schemas/mercadoPago.schemas';
import { IPaymentSuccess } from '../types/mercadoPago.types';

export const PaymentSuccessModel = model<IPaymentSuccess>('PaymentSuccess', PaymentSuccessSchema);
