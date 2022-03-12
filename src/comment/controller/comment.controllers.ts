import { NextFunction, Request, Response } from 'express';
import { tokenService } from '../../auth/utils/token.utils';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { logger } from "../../shared/logger/appLogger";
import { CreateComment, EditComment } from '../entity/types/comment.types';
import { createCommentService } from '../services/createComment.services';
import { deleteCommentService } from '../services/deleteComment.services';
import { editCommentService } from '../services/editComment.services';
import { getCommentByIdService } from '../services/getCommentById.services';
import { getCommentsAllService } from '../services/getCommentsAll.services';

const { validateToken, validateRefreshToken } = tokenService;

export const getComments = async (
  req: Request,
  res: Response
) => {
  try {
    const comments = await getCommentsAllService()
    res.status(200).json(comments)
  } catch (err) {
    logger.error(err)
  }
}

export const getCommentById = async (
  req: Request<{ comment_id: string }>,
  res: Response) => {
  try {
    const comment = await getCommentByIdService(req.params.comment_id);
    res.status(200).json({ comment });
  } catch (error) {
    logger.error(error);
  }
}

export const createComment = async (
  req: Request<{}, {}, CreateComment>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { authorization } = req.headers;
    if (!authorization) next(new ApplicationError(401, 'No token provided'));
    validateToken(authorization!);
    const comment = await createCommentService(req.body);
    res.status(201).json({ data: comment });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
    logger.error(error);
  }
}

export const editComment = async (
  req: Request<{ comment_id: string }, {}, EditComment>,
  res: Response
) => {
  try {
    const updateComment = await editCommentService(req.params.comment_id, req.body);
    res.status(200).json({ data: updateComment });
  } catch (err) {
    logger.error(err);
  }
}

export const deleteComment = async (
  req: Request<{ comment_id: string }>,
  res: Response
) => {
  try {
    await deleteCommentService(req.params.comment_id);
    res.status(204);
  } catch (err) {
    logger.error(err);
  }
}
