import { CategoryModel } from './../entity/models/category.models';
import { CreateCategory } from './../entity/types/category.types';
import { logger } from "../../shared/logger/appLogger";


export const createCategoryService = async (newCategoryData: CreateCategory) => {
    try {
        const category = new CategoryModel(newCategoryData);
        return await category.save();
    } catch (err) {
        logger.error(err);
    }
}