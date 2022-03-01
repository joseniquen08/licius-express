import { logger } from '../../logger/appLogger';
import { CommentModel } from '../entity/models/comment.models';
import { IComment } from '../entity/types/comment.types';

export const getCommentsAllService = async (): Promise<IComment[]> => {
    try {
        const comments: IComment[] = await CommentModel.find({})
        return comments
    } catch (err) {
        logger.error(err)
        throw err
    }
}