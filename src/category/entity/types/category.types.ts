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

export type CreateCategory = Omit<ICategory, 'id'| 'created_at'| 'modified_at'>

export type EditCategory = Omit<ICategory, 'id'| 'created_at'| 'modified_at'>