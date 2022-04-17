import { ICategory } from './../entity/types/category.types';
import { CategoryModel } from './../entity/models/category.models';
import { logger } from "../../shared/logger/appLogger";

export const getCategoriesAllService = async () => {
    try {
        const categories: ICategory[] = await CategoryModel.find({});
        return categories
    } catch ( err: any) {
        logger.error(err);
    }
}