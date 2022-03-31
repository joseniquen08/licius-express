import { model } from 'mongoose';
import { MercadoPagoSchema } from '../schemas/mercadoPago.schemas';
import { IMercadoPago } from '../types/mercadoPago.types';

export const MercadoPagoModel = model<IMercadoPago>('MercadoPago', MercadoPagoSchema);