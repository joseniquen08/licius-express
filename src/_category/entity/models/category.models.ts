import mongoose from 'mongoose';
import { CategorySchema } from '../schemas/category.schemas';
import { ICategory } from '../types/category.types';

export const CategoryModel = mongoose.model<ICategory>('Category', CategorySchema);
