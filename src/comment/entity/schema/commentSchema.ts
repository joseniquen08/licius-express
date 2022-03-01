import { Comment } from './../types/commentInterface';
import { Schema } from "mongoose";


export const CommentSchema = new Schema<Comment>({
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
    }
})