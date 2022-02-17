import { Types } from "mongoose";

export interface ISchedule {
  day: string;
  isOpen: boolean;
  open_at: Date;
  close_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface ILocationRestaurant {
  title: string,
  description: string,
  img_url: string,
  address: string,
  city: string,
  country: string,
  phone_number: string,
  latitude: string,
  longitude: string,
  tags: Types.Array<string>,
  schedule: Types.DocumentArray<ISchedule>,
  created_at: Date,
  updated_at: Date
}

export interface IRestaurant {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  category_id: Number;
  profile: {
    nombre_comercial: string;
    razon_social: string;
    ruc: string;
    address: string;
    city: string;
    country: string;
    description: string;
    logo_url: string;
    created_at: Date;
    updated_at: Date;
  }
  locations: Types.DocumentArray<ILocationRestaurant>;
}

export type restaurantRequest = {
  _id?: Types.ObjectId;
  user_id: Types.ObjectId;
  category_id: number | undefined;
  profile : {
    razon_social: string | undefined;
    ruc: string | undefined;
    nombre_comercial: string | undefined;
    description: string | undefined;
    address?: string;
    city?: string;
    country?: string;
    logo_url?: string;
    created_at?: Date;
    updated_at?: Date;
  },
  locations?: Types.DocumentArray<ILocationRestaurant>
}
