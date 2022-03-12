import { Model, model, Types } from 'mongoose';
import { PostSchema } from '../schemas/post.schemas';
import { IPost } from '../types/post.types';

export interface PostModelTwo extends Model<{post_id: string | Types.ObjectId}> {
  findAndPopulateById(post_id: string): any;
}

export const PostModel = model<IPost, PostModelTwo>('Post', PostSchema);
