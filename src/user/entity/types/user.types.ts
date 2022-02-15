import { Types } from "mongoose";

export type userRequest = {
  email: string;
  password: string;
  role: number;
  created_at?: Date;
  modified_at?: Date;

  first_name?: string;
  last_name?: string;

  category_id?: number;
  razon_social?: string;
  ruc?: string;
  nombre_comercial?: string;
  description?: string;
}

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: number;
  created_at: Date;
  modified_at: Date;
}
