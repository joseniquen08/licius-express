import { logger } from "../../shared/logger/appLogger";
import { PostModel } from "../entity/models/post.models";
import { IPost } from "../entity/types/post.types";


export const getPostsAllService = async (): Promise<IPost[] | undefined> => {
    try {
        const posts: IPost[] = await PostModel.find({}).populate('user_id')
        return posts
    } catch (error) {
        logger.error(error);
    }
}