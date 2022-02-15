import mongoose from 'mongoose';
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
  created_at: {
    type: Date,
    default: new Date()
  },
  modified_at: {
    type:Date
  }
});