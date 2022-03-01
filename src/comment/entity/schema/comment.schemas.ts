import { Schema } from "mongoose";
import { IComment } from '../types/comment.types';

export const CommentSchema = new Schema<IComment>({
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  editedAt: {
    type: Date
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'post_id is required'],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user_id is required'],
  },
});