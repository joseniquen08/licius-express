import { logger } from "../../shared/logger/appLogger";
import { PostModel } from "../entity/models/post.models";
import { IPost } from "../entity/types/post.types";


export const getPostsAllService = async (): Promise<IPost[] | undefined> => {
    try {
        const posts: IPost[] = await PostModel.find({}).sort({ _id: -1 }).populate('user').populate('comments').populate('client').populate('restaurant');
        return posts
    } catch (error: any) {
        logger.error(error);
        throw new Error(`Error get posts: ${error.message}`);
    }
}