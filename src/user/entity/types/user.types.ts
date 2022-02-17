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
  ruc: string;
  nombre_comercial: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export type createUser = Omit<IUser, '_id' | 'created_at' | 'updated_at'>;
export type signUpClient = Omit<ISignClient, 'created_at' | 'updated_at'>;
export type signUpRestaurant = Omit<ISignRestaurant, 'created_at' | 'updated_at'>;

export type signInUser = {
  email: string;
  password: string;
  role: number;
}
