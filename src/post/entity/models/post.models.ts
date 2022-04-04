import { Model, model, Types } from 'mongoose';
import { PostSchema } from '../schemas/post.schemas';
import { IPost } from '../types/post.types';

export interface IPostTwo extends Model<{post_id: string | Types.ObjectId}> {
  findAndPopulateById(post_id: string | Types.ObjectId): any;
}

export const PostModel = model<IPost, IPostTwo>('Post', PostSchema);
