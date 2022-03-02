import { Request, Response } from 'express';
import { logger } from '../../shared/logger/appLogger';
import { CreatePost, EditPost } from '../entity/types/post.types';
import { createPostService } from '../services/createPost.services';
import { deletePostService } from '../services/deletePost.services';
import { editPostService } from '../services/editPost.services';
import { getPostService } from '../services/getPost.services';
import { getPostsAllService } from '../services/getPostsAll.services';

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
  res: Response) => {
  try {
    const post = await getPostService(req.params.post_id)
    res.status(200).json({ post });
  } catch (error) {
    logger.error(error)
  }
}

export const createPost = async (
  req: Request<{}, {}, CreatePost>,
  res: Response
): Promise<void> => {
  try {
    const post = await createPostService(req.body)
    res.status(201).json({ data: post })
  } catch (error) {
    logger.error(error)
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