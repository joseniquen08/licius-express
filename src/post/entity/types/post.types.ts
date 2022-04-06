import { Types } from 'mongoose';

export interface IPost {
  id: PostIdType;
  title: string;
  content: string;
  attachment_urls: Types.Array<string>;
  is_promoted: boolean;
  created_at: Date;
  updated_at: Date;
  user_id: string | Types.ObjectId;
}

export interface IGetPost {
  id: PostIdType;
  title: string;
  content: string;
  attachment_urls: Types.Array<string>;
  is_promoted: boolean;
  created_at: Date;
  updated_at: Date;
  user_id: {
    email: string,
    role: number,
    id: string,
  };
  user_data: {
    fullname: string | null,
    nombre_comercial: string | null,
    description: string | null,
  };
}

export type PostIdType = {
  _id: Types.ObjectId;
}

export type IClientData = {
  first_name: string;
  last_name: string;
}

export type CreatePost = Omit<IPost, 'id' | 'is_promoted' | 'created_at' | 'updated_at'>;
export type CreatePromotedPost = Omit<IPost, 'id' | 'created_at' | 'updated_at'>;

export type EditPost = Omit<IPost, 'id' | 'created_at' | 'updated_at'>;
