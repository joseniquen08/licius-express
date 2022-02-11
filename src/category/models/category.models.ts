import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ICategory {
  title: string;
  description: string;
  created_at: Date;
  modified_at: Date;
}

const CategorySchema = new Schema<ICategory>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  modified_at: {
    type: Date
  }
});

export const CategoryModel = mongoose.model<ICategory>('Category', CategorySchema);
