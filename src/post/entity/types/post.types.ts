import { Types } from 'mongoose';

export interface IPost {
    user_id: Types.ObjectId;
    id: PostIdType;
    title: string;
    content: string;
    attachment_urls: Types.Array<string>;
    created_at: Date;
    modified_at: Date;
}

export type PostIdType = {
    _id: Types.ObjectId;
}

export type CreatePost = Omit<IPost, 'id' | 'created_at' | 'modified_at'>

export type EditPost = Omit<IPost, 'id' | 'created_at' | 'modified_at'>
