import { Types } from "mongoose";

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
    modified_at?: Date;
  },
  locations?: Types.DocumentArray<ILocationRestaurant>
}

export interface ISchedule {
  day: string;
  isOpen: boolean;
  open_at: Date;
  close_at: Date;
  created_at: Date;
  modified_at: Date;
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
  modified_at: Date
}

export interface IRestaurant {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  category_id: Number;
  profile: {
    nombre_comercial: String;
    razon_social: String;
    ruc: String;
    address: String;
    city: String;
    country: String;
    description: String;
    logo_url: String;
    created_at: Date;
    modified_at: Date;
  }
  locations: Types.DocumentArray<ILocationRestaurant>;
}
