import { Types } from "mongoose";

export interface IClient {
  _id: Types.ObjectId;
  user_id: string | Types.ObjectId;
  profile: {
    first_name: string;
    last_name: string;
    phone_number: string;
    address: string;
    city: string;
    country: string;
    description: string;
    image_url: string;
    created_at: Date;
    updated_at: Date;
  };
}

export type CreateClient = Omit<IClient, '_id' | 'profile'> & {
  profile: Omit<IClient['profile'], 'phone_number' | 'address' | 'city' | 'country' | 'description' | 'image_url' | 'created_at' | 'updated_at' >
}
