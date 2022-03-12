import { logger } from "../../shared/logger/appLogger";
import { PostModel } from "../entity/models/post.models";

export const getPostByIdService = async (post_id: string) => {
  try {
    if (!post_id) throw new Error('invalid post id');
    return await PostModel.findAndPopulateById(post_id);
  } catch (error: any) {
    logger.error(error)
    throw new Error(`Error getting post: ${error.message}`);
  }
}