import { logger } from "../../shared/logger/appLogger"
import { PostModel } from "../entity/models/post.models"
import { EditPost, IPost } from "../entity/types/post.types"


export const editPostService = async (
    id: string,
    data: EditPost
): Promise<IPost | null> => {
    // const query = { _id: id}
    try {
        return await PostModel.findByIdAndUpdate(id, data, {returnDocument: 'after'})
    } catch (error) {
        logger.error(error)
        throw error
    }
}