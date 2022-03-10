import { Schema } from 'mongoose';
import { CommentModel } from '../../../comment/entity/models/comment.models';
import { IComment } from '../../../comment/entity/types/comment.types';
import { IPost } from '../types/post.types';

export const PostSchema = new Schema<IPost>({
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

PostSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post_id',
  getters: true,
}).get(async function (this: any) {
  const comments: any[] = await Promise.all(this.$$populatedVirtuals.comments.map(async (comment: IComment) => {
    // let name: string = '';
    // UserModel.findById(comment.user_id, function(error: any, user: IUser) {
    //   if (user.role === 2) {
    //     ClientModel.findOne({ user_id: user._id }, function (error: any, client: IClient) {
    //       const { first_name, last_name } = client.profile;
    //       name = `${first_name} ${last_name}`;
    //       console.log(name);
    //     });
    //   } else if (user.role === 3) {
    //     RestaurantModel.findOne({ user_id: user._id }, function (error: any, restaurant: IRestaurant) {
    //       const { nombre_comercial } = restaurant.profile;
    //       name = nombre_comercial;
    //     });
    //   }
    // });
    console.log(comment.description)
    return await { description: comment.description }
  }));
  return comments;
});

PostSchema.pre('deleteOne', async function (next) {
  const post = this.getFilter();
  await CommentModel.deleteMany({post_id: post._id});
  next();
});

PostSchema.set('toJSON',{ virtuals: true });
PostSchema.set('toObject', { virtuals: true });