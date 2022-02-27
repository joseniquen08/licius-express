import { logger } from "../../logger/appLogger";
import { PostModel } from "../entity/models/postModel";
import { Post } from "../entity/types/postInterface";


export const getPostsAllService = async (): Promise<Post[] | undefined> => {
    try {
        const posts: Post[] = await PostModel.find({})
        return posts
    } catch (error) {
        logger.error(error);
    }
}