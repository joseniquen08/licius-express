import { Types } from "mongoose";

export interface IPurchase {
  post_id: string | Types.ObjectId;
  begining_date: Date;
  ending_date: Date;
  is_promoted: boolean;
  created_at: Date;
  updated_at: Date;
}