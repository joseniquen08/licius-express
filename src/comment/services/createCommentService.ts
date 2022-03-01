import { logger } from '../../logger/appLogger';
import { CommentModel } from '../entity/models/commentModel';
import { CreateComment } from './../entity/types/commentInterface';

export const createCommentService = async (newComment: CreateComment) => {
    try {
        const comment = new CommentModel(newComment);
        return await comment.save();
    } catch (err) {
        logger.error(err)
    }
}