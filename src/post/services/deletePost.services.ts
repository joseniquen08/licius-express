import { logger } from "../../shared/logger/appLogger"
import { PostModel } from "../entity/models/post.models"

export const deletePostService = async (
    id: string
) => {
    const query = {_id: id}
    try {
        return await PostModel.deleteOne(query)
    } catch (error) {
        logger.error(error)
        throw error
    }
}