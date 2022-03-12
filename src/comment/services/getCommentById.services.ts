import { logger } from "../../shared/logger/appLogger";
import { CommentModel } from "../entity/models/comment.models";

export const getCommentByIdService = async (id: string) => {
  try {
    return await CommentModel.findById(id).populate('user_id');
  } catch (e) {
    logger.error(e);
  }
}