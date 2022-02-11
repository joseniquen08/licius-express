import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: number;
  created_at: Date;
  modified_at: Date;
}

const UserSchema = new Schema<IUser>({
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
  created_at: {
    type: Date,
    default: new Date()
  },
  modified_at: {
    type:Date
  }
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
