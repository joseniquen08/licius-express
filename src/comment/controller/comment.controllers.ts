import { Request, Response } from 'express';
import { logger } from "../../logger/appLogger";
import { CreateComment, EditComment } from '../entity/types/comment.types';
import { createCommentService } from '../services/createComment.services';
import { deleteCommentService } from '../services/deleteComment.services';
import { editCommentService } from '../services/editComment.services';
import { getCommentService } from '../services/getComment.services';
import { getCommentsAllService } from '../services/getCommentsAll.services';

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
    const post = await getCommentService(req.params.comment_id);
    res.status(200).json({ post });
  } catch (error) {
    logger.error(error);
  }
}

export const createComment = async (
  req: Request<{}, {}, CreateComment>,
  res: Response
): Promise<void> => {
  try {
    const comment = await createCommentService(req.body);
    res.status(201).json({ data: comment });
  } catch (err) {
    logger.error(err);
  }
}

export const editComment = async (
  req: Request<{ comment_id: string }, {}, EditComment>,
  res: Response
) => {
  try {
    const updateComment = await editCommentService(req.params.comment_id, req.body)
    res.status(200).json({ data: updateComment })
  } catch (err) {
    logger.error(err)
  }
}

export const deleteComment = async (
  req: Request<{ comment_id: string }>,
  res: Response
) => {
  try {
    const comment = await deleteCommentService(req.params.comment_id)
    res.status(204).json({ data: comment })
  } catch (err) {
    logger.error(err)
  }
}
