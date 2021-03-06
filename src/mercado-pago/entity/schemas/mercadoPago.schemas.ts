import { Schema } from 'mongoose';
import { IPaymentSuccess } from '../types/mercadoPago.types';

export const PaymentSuccessSchema = new Schema<IPaymentSuccess>({
  post_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  payment_id: {
    type: Number,
    required: true,
  },
  payment_type: {
    type: String,
    required: true,
  },
  merchant_order_id: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  begin_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  unit_price: {
    type:Number,
    required: true,
  },
  quantity: {
    type:Number,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updatet_at',
  },
});
