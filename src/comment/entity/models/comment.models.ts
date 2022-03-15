import { Model, model, Types } from 'mongoose';
import { CommentSchema } from '../schema/comment.schemas';
import { IComment } from '../types/comment.types';
type CommentStaticPopulateType = {
  comment_id: string | Types.ObjectId,
} 

export interface ICommentStaticPopulate extends Model<CommentStaticPopulateType> {
  findByIdAndPopulate(comment_id: string | Types.ObjectId) : any; 
}

export const CommentModel = model<IComment, ICommentStaticPopulate>('Comment', CommentSchema);