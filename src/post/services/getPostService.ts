import { logger } from "../../logger/appLogger"
import { PostModel } from "../entity/models/postModel"


export const getPostService = async ( id: string) =>{
    try {
        return await PostModel.findById(id).populate('user_id').populate('comments')
    } catch (e) {
        logger.error(e)
    }
}