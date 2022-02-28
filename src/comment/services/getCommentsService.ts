import { Comment } from './../entity/types/commentInterface';
import { CommentModel } from '../entity/models/commentModel';
import { logger } from './../../logger/appLogger';


export const getCommentsService = async (): Promise<Comment[]> => {
    try {
        const comments: Comment[] = await CommentModel.find({})
        return comments
    } catch (err) {
        logger.error(err)
        throw err
    }
}