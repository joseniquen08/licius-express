import { logger } from "../../shared/logger/appLogger"
import { CommentModel } from "../entity/models/comment.models"

export const deleteCommentService = async (
    id: string
) => {
    const query = { _id: id }
    try {
        return await CommentModel.deleteOne(query)
    } catch (err) {
        logger.error(err)
        throw err
    }
}