import { createAny } from "../../shared/factory/createAny";
import { logger } from "../../shared/logger/appLogger";
import { PostModel } from "../entity/models/post.models";
import { CreatePost, IPost } from "../entity/types/post.types";

export const createPostService = async (postRequest: CreatePost) => {
  try {
    const post = await createAny(PostModel)(postRequest);
    return post as IPost;
  } catch (error) {
    logger.error(error);
  }
}
