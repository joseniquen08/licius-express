import { Schema } from "mongoose";
import { IToken } from "../types/token.types";

export const TokenSchema = new Schema<IToken>({
  token: {
    type: String,
    required: [true, 'token is required'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a project'],
  },
  expire_at: {
    type: Date,
    default: new Date(),
    index: { expires: 60 * 60 * 24 },
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
})