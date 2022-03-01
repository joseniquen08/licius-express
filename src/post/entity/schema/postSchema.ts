import { Post } from './../types/postInterface';
import { Schema } from 'mongoose';
import { CommentModel } from '../../../comment/entity/models/commentModel';


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

PostSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post_id'
} )

PostSchema.pre('deleteOne', async function (next) {
  const post = this.getFilter();
  await CommentModel.deleteMany({post_id: post._id});
  next();
})

PostSchema.set('toJSON',{ virtuals: true });
PostSchema.set('toObject', { virtuals: true });