import { Schema } from "mongoose";
import { IPurchase } from '../types/purchase.types';

export const PurchaseSchema = new Schema<IPurchase>({
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  begining_date: {
    type: Date,
    required: true,
  },
  ending_date: {
    type: Date,
    required: true,
  },
  is_promoted: {
    type: Boolean,
    default: true,
  },
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updatet_at',
  },
});
