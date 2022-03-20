import mongoose from 'mongoose';
import { PostModel } from '../../../post/entity/models/post.models';
import { IUser } from "../types/user.types";

const Schema = mongoose.Schema;

export const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

UserSchema.methods.toJSON = function() {
  const { email, role } = this.toObject();
  return { email, role };
}

UserSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user_id'
})


//middlewares
UserSchema.pre('deleteOne', async function (next) {
  const user = this.getFilter();
  await PostModel.deleteMany({user_id: user.id});
  next();
});

UserSchema.set('toJSON',{ virtuals: true });
UserSchema.set('toObject', { virtuals: true });