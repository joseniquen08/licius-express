import { logger } from "../../logger/appLogger";
import { PostModel } from "../entity/models/postModel";
import { CreatePost } from "../entity/types/postInterface";


export const createPostService = async( newPostData: CreatePost ) => {
    try {
        const post = new PostModel( newPostData )
        return await post.save()
    } catch (error) {
        logger.error(error)
    }
}