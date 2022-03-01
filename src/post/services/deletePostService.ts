import { logger } from "../../logger/appLogger"
import { PostModel } from "../entity/models/postModel"

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