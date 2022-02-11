import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IPost {
  user_id: Types.ObjectId;
  title: string;
  content: string;
  attachment_urls: Types.Array<string>;
  created_at: Date;
  modified_at: Date;
}

const PostSchema = new Schema<IPost>({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
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

export const PostModel = mongoose.model<IPost>('Post', PostSchema);
