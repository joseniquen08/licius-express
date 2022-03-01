import { Types } from 'mongoose'
import { PostIdType } from '../../../post/entity/types/postInterface'

export interface Comment {
    id: CommentIdType;
    description: string;
    createdAt: Date;
    editedAt: Date;
    post_id: string | PostIdType;
}

export type CommentIdType = {
    _id: Types.ObjectId;
}

export type CreateComment = Omit<Comment, 'id' | 'createdAt' | 'editedAt'>

export type EditComment = Omit<Comment, 'id' | 'createdAt' | 'editedAt'>