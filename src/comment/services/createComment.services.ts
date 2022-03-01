import { logger } from '../../logger/appLogger';
import { createAny } from '../../shared/factory/createAny';
import { CommentModel } from '../entity/models/comment.models';
import { CreateComment, IComment } from '../entity/types/comment.types';

export const createCommentService = async (commentRequest: CreateComment) => {
  try {
    const comment = await createAny(CommentModel)(commentRequest);
    return comment as IComment;
  } catch (err) {
    logger.error(err);
  }
}
