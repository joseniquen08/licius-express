import { Types } from "mongoose";
import { CreatePost } from '../../../post/entity/types/post.types';

export interface IMercadoPago {
  title: string;
  unit_price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

export interface IPaymentSuccess {
  post_id: Types.ObjectId;
  payment_id: number;
  payment_type: string;
  merchant_order_id: number;
  status: boolean;
  expire_at: Date;
  created_at: Date;
  updated_at: Date;
}

export type CreatePreference = Omit<IMercadoPago, 'created_at' | 'updated_at'>;
export type CreatePaymentWithoutPostId = Omit<IPaymentSuccess, 'post_id' | 'status' | 'expire_at' | 'created_at' | 'updated_at'> & CreatePost;
export type CreatePayment = Omit<IPaymentSuccess, 'status' | 'expire_at' | 'created_at' | 'updated_at'>;
