import { Types } from "mongoose";

export interface ICategory {
  id: CategoryIdType;
  title: string;
  description: string;
  created_at: Date;
  modified_at: Date;
}

export type CategoryIdType = {
  _id: Types.ObjectId;
}
