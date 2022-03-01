import { model } from 'mongoose';
import { CommentSchema } from '../schema/comment.schemas';
import { IComment } from '../types/comment.types';

export const CommentModel = model<IComment>('Comment', CommentSchema);