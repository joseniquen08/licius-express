import { logger } from "../../logger/appLogger"
import { CommentModel } from "../entity/models/commentModel"


export const deleteCommentService = async (
    id: string
) => {
    const query = { _id: id }
    try {
        return await CommentModel.deleteOne(query)
    } catch (err) {
        logger.error(err)
    }
}