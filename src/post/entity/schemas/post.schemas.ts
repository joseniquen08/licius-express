import { Schema } from 'mongoose';
import { CommentModel } from '../../../comment/entity/models/comment.models';
import { IComment } from '../../../comment/entity/types/comment.types';
import { ClientModel } from '../../../user/entity/models/client.models';
import { IClient } from '../../../user/entity/types/client.types';
import { IUser } from '../../../user/entity/types/user.types';
import { IPostTwo } from '../models/post.models';
import { IPost } from '../types/post.types';

export const PostSchema = new Schema<IPost, IPostTwo>({
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
  is_promoted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

PostSchema.methods.toJSON = function() {
  const { id, title, content, attachment_urls, is_promoted, comments, user } = this.toObject();
  return { id, title, content, attachment_urls, is_promoted, comments, user };
}

PostSchema.statics.findAndPopulateById = function(post_id) {
  return this.findById(post_id).populate('user').populate('comments');
}

PostSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post_id',
  getters: true,
}).get(function (this: any) {
  if (this.$$populatedVirtuals){
    const comments: [] = this.$$populatedVirtuals.comments.map((comment: IComment) => {
      return {
        user_id: comment.user_id,
        description: comment.description
      };
    });
    return comments;
  }
  return [];
});

PostSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  getters: true,
}).get(function (this: any) {
  const user: IUser = this.$$populatedVirtuals.user[0];
  if (user.role === 2) {
    let response = {};
    ClientModel.findOne({ user_id: user._id }, function (err: any, client: IClient) {
      if (err) {
        console.log(err);
      } else {
        return {
          email: user.email,
          role: user.role,
          first_name: client.profile.first_name,
        };
      }
    });
  }
});

PostSchema.pre('deleteOne', async function (next) {
  const post = this.getFilter();
  await CommentModel.deleteMany({post_id: post._id});
  next();
});

PostSchema.set('toJSON',{ virtuals: true });
PostSchema.set('toObject', { virtuals: true });