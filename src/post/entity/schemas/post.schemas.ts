import { Schema } from 'mongoose';
import { CommentModel } from '../../../comment/entity/models/comment.models';
import { IComment } from '../../../comment/entity/types/comment.types';
import { IClient } from '../../../user/entity/types/client.types';
import { IRestaurant } from '../../../user/entity/types/restaurant.types';
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
  const { id, title, content, attachment_urls, is_promoted, comments, user, client, restaurant } = this.toObject();
  return { id, title, content, attachment_urls, is_promoted, comments, user, client, restaurant };
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
  if (this.$$populatedVirtuals.commments){
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
  return {
    email: user.email,
    role: user.role,
  };
});

PostSchema.virtual('client', {
  ref: 'Client',
  localField: 'user_id',
  foreignField: 'user_id',
  getters: true,
}).get(function (this: any) {
  if (this.$$populatedVirtuals.client.length !== 0){
    const client: IClient = this.$$populatedVirtuals.client[0];
    return {
      full_name: `${client.profile.first_name} ${client.profile.last_name}`,
      image_url: client.profile.image_url,
    }
  }
  return {};
});

PostSchema.virtual('restaurant', {
  ref: 'Restaurant',
  localField: 'user_id',
  foreignField: 'user_id',
  getters: true,
}).get(function (this: any) {
  if (this.$$populatedVirtuals.restaurant.length !== 0){
    const restaurant: IRestaurant = this.$$populatedVirtuals.restaurant[0];
    return {
      nombre_comercial: restaurant.profile.nombre_comercial,
      description: restaurant.profile.description,
      image_url: restaurant.profile.image_url,
    }
  }
  return {};
});

PostSchema.pre('deleteOne', async function (next) {
  const post = this.getFilter();
  await CommentModel.deleteMany({post_id: post._id});
  next();
});

PostSchema.set('toJSON',{ virtuals: true });
PostSchema.set('toObject', { virtuals: true });