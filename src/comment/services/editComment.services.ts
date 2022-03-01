import { logger } from "../../shared/logger/appLogger";
import { CommentModel } from "../entity/models/comment.models";
import { EditComment, IComment } from "../entity/types/comment.types";

export const editCommentService = async (
    id: string,
    data: EditComment
): Promise<IComment | null> => {
    // const query = { _id: id }
    try {
        return await CommentModel.findByIdAndUpdate(id, data, {returnDocument: 'after'});
    } catch (err) {
        logger.error(err)
        throw err
    }
}