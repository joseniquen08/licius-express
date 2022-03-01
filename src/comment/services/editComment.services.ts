import { logger } from "../../logger/appLogger";
import { CommentModel } from "../entity/models/comment.models";
import { EditComment } from "../entity/types/comment.types";

export const editCommentService = async (
    id: string,
    data: EditComment
): Promise<Comment | null> => {
    const query = { _id: id }
    try {
        return await CommentModel.findByIdAndUpdate(query, data);
    } catch (err) {
        logger.error(err)
        throw err
    }
}