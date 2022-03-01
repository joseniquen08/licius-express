import { logger } from "../../logger/appLogger"
import { PostModel } from "../entity/models/postModel"
import { Post, EditPost } from "../entity/types/postInterface"


export const editPostService = async (
    id: string,
    data: EditPost
): Promise<Post | null> => {
    // const query = { _id: id}
    try {
        return await PostModel.findByIdAndUpdate(id, data, {returnDocument: 'after'})
    } catch (error) {
        logger.error(error)
        throw error
    }
}