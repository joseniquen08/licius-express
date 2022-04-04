import { Model, Schema } from 'mongoose';
import { IPaymentSuccessTwo } from '../models/mercadoPago.models';
import { IMercadoPago, IPaymentSuccess } from '../types/mercadoPago.types';

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

export const PaymentSuccessSchema = new Schema<IPaymentSuccess, Model<IPaymentSuccess, {}, IPaymentSuccessTwo>>({
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
  // expire_at: {
  //   type: Date,
  //   default: new Date(),
  // },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updatet_at',
  }
});

// PaymentSuccessSchema.methods.assingExpireAt = function (seconds: number) {
//   this.schema.index({ expire_at: 1 }, { expire: seconds });
// }
