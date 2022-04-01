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

export type PostIdType = {
  _id: Types.ObjectId;
}

export type CreatePost = Omit<IPost, 'id' | 'is_promoted' | 'created_at' | 'updated_at'>;

export type EditPost = Omit<IPost, 'id' | 'created_at' | 'updated_at'>;
