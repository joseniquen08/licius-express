import { CategoryModel } from './../entity/models/category.models';
import { logger } from "../../shared/logger/appLogger";

export const deleteCategoryService = async (id: string) => {
    const query = { _id: id}
    try {
        return await CategoryModel.deleteOne(query)
    } catch (err) {
        logger.error(err)
    }
}