import { Schema } from 'mongoose';
import { CommentModel } from '../../../comment/entity/models/comment.models';
import { IComment } from '../../../comment/entity/types/comment.types';
import { PostModelTwo } from '../models/post.models';
import { IPost } from '../types/post.types';

export const PostSchema = new Schema<IPost, PostModelTwo>({
  user_id: {
    type: Schema.Types.ObjectId,
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
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

PostSchema.methods.toJSON = function() {
  const { title, content, attachment_urls, comments } = this.toObject();
  return { title, content, attachment_urls, comments };
}

PostSchema.statics.findAndPopulateById = function(post_id) {
  return this.findById(post_id).populate('user_id').populate('comments');
}

PostSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post_id',
  getters: true,
}).get(function (this: any) {
  const comments: [] = this.$$populatedVirtuals.comments.map((comment: IComment) => {
    return {
      user_id: comment.user_id,
      description: comment.description
    };
  });
  return comments;
});

PostSchema.pre('deleteOne', async function (next) {
  const post = this.getFilter();
  await CommentModel.deleteMany({post_id: post._id});
  next();
});

PostSchema.set('toJSON',{ virtuals: true });
PostSchema.set('toObject', { virtuals: true });