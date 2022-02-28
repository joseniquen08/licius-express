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
    }
})