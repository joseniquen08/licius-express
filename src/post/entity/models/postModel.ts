import { Post } from './../types/postInterface';
import { model } from 'mongoose';
import { PostSchema } from '../schema/postSchema';


export const PostModel = model<Post>('Post', PostSchema);
