import { logger } from "../../logger/appLogger";
import { PostModel } from "../entity/models/post.models";

export const getPostService = async (id: string) => {
  try {
    return await PostModel.findById(id).populate('user_id').populate('comments')
  } catch (e) {
    logger.error(e)
  }
}