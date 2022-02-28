import { Types } from 'mongoose'

export interface Comment {
    id: CommentIdType;
    description: string;
    createdAt: Date;
    editedAt: Date;
}

export type CommentIdType = {
    _id: Types.ObjectId;
}

export type CreateComment = Omit<Comment, 'id' | 'createdAt' | 'editedAt'>

export type EditComment = Omit<Comment, 'id' | 'createdAt' | 'editedAt'>