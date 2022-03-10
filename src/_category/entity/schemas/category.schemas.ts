import { Schema } from "mongoose";
import { ICategory } from "../types/category.types";

export const CategorySchema = new Schema<ICategory>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});