import { model } from 'mongoose';
import { PostSchema } from '../schemas/post.schemas';
import { IPost } from '../types/post.types';


export const PostModel = model<IPost>('Post', PostSchema);
