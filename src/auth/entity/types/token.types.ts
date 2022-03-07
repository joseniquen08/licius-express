import { Types } from "mongoose";

export interface IToken {
  token: string;
  owner: Types.ObjectId;
  expire_at: Date;
  created_at: Date;
}

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
}
