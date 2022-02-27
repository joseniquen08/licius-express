import { Post } from './../types/postInterface';
import { Schema } from 'mongoose';


export const PostSchema = new Schema<Post>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  title: {
    type: String,
    // required: true
  },
  content: {
    type: String,
    required: true
  },
  attachment_urls: {
    type: [String]
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  modified_at: {
    type: Date
  }
});