import { NextFunction, Request, Response } from 'express';
import { tokenService } from '../../auth/utils/token.utils';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { logger } from '../../shared/logger/appLogger';
import { CreatePost, EditPost } from '../entity/types/post.types';
import { createPostService } from '../services/createPost.services';
import { deletePostService } from '../services/deletePost.services';
import { editPostService } from '../services/editPost.services';
import { getPostByIdService } from '../services/getPostById.services';
import { getPostsAllService } from '../services/getPostsAll.services';

const { validateToken, validateRefreshToken } = tokenService;

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsAllService()
    res.status(200).json(posts);
  } catch (error) {
    logger.error(error)
  }
}

export const getPostById = async (
  req: Request<{ post_id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await getPostByIdService(req.params.post_id)
    res.status(200).json({ post });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
    logger.error(error)
  }
}

export const createPost = async (
  req: Request<{}, {}, CreatePost>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { authorization } = req.headers;
    if (!authorization) next(new ApplicationError(401, 'No token provided'));
    validateToken(authorization!);
    const post = await createPostService(req.body);
    res.status(201).json({ data: post });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
    logger.error(error);
  }
}

export const editPost = async (
  req: Request<{ post_id: string }, {}, EditPost>,
  res: Response
) => {
  try {
    const updatePost = await editPostService(req.params.post_id, req.body)
    res.status(200).json({ data: updatePost })
  } catch (error) {
    logger.error(error)
  }
}

export const deletePost = async (
  req: Request<{ post_id: string }>,
  res: Response
) => {
  try {
    await deletePostService(req.params.post_id);
    res.status(204).json({ success: true });
  } catch (error) {
    logger.error(error)
  }
}