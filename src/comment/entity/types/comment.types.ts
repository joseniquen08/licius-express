import { Types } from 'mongoose';
import { PostIdType } from '../../../post/entity/types/post.types';
import { UserIdType } from '../../../user/entity/types/user.types';

export interface IComment {
  id: CommentIdType;
  description: string;
  created_at: Date;
  updated_at: Date;
  post_id: string | PostIdType;
  user_id: string | UserIdType;
}

export type CommentIdType = {
  _id: Types.ObjectId;
}

export type CreateComment = Omit<IComment, 'id' | 'created_at' | 'updated_at'>

export type EditComment = Omit<IComment, 'id' | 'created_at' | 'updated_at'>