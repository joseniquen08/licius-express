import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: number;
  created_at: Date;
  updated_at: Date;
}

export interface ISignClient {
  email: string;
  password: string;
  role: number;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface ISignRestaurant {
  email: string;
  password: string;
  role: number;
  category_id: number;
  razon_social: string;
  ruc: number;
  nombre_comercial: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export type UserIdType = {
  _id: Types.ObjectId;
}

export type CreateUser = Omit<IUser, '_id' | 'created_at' | 'updated_at'>;
export type SignUpClient = Omit<ISignClient, 'created_at' | 'updated_at'>;
export type SignUpRestaurant = Omit<ISignRestaurant, 'created_at' | 'updated_at'>;

export type SignInUser = {
  email: string;
  password: string;
  role: number;
}
