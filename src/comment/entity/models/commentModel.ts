import { Comment } from './../types/commentInterface';
import { CommentSchema } from './../schema/commentSchema';
import { model } from 'mongoose';

export const CommentModel = model<Comment>('Comment', CommentSchema)