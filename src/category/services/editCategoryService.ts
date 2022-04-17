import { CategoryModel } from './../entity/models/category.models';
import { EditCategory } from './../entity/types/category.types';
import { logger } from "../../shared/logger/appLogger";

export const editCategoryService = async (
    id: string,
    data: EditCategory
) => {
    const query = { _id: id };
    try {
        return await CategoryModel.findByIdAndUpdate(query, data);
    } catch (err) {
        logger.error(err)
    }
}