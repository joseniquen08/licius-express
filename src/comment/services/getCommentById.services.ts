import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { logger } from "../../shared/logger/appLogger";
import { CommentModel } from "../entity/models/comment.models";

export const getCommentByIdService = async (comment_id: string) => {
  try {
    if (!comment_id) throw new Error("invalid comment id");
    return await CommentModel.findByIdAndPopulate(comment_id)
  } catch (e: any) {
    logger.error(e);
    // throw new ApplicationError(403,e.message,e.code === 11000 ? "Error getting Comment by Id: " : "");
    throw new Error(`Error getting comment: ${e.message}`);
  }
}