import { Schema } from "mongoose";
import { IMercadoPago } from '../types/mercadoPago.types';

export const MercadoPagoSchema = new Schema<IMercadoPago>({
  title: {
    type: String,
    required: true,
  },
  unit_price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updatet_at',
  },
});