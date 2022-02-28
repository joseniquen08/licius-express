import { createPostService } from '../services/createPostService';
import { Request, Response } from 'express';
import { CreatePost, EditPost } from '../entity/types/postInterface';
import { getPostsAllService } from '../services/getPostsAllService';
import { logger } from './../../logger/appLogger';
import { editPostService } from '../services/editPostService';
import { deletePostService } from '../services/deletePostService';


export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await getPostsAllService();
        res.status(200).json(posts);
    } catch (error) {
        logger.error(error)
    }
}

export const createPost = async (
    req: Request<{}, {}, CreatePost>, 
    res: Response
) => {
    try {
        const newPost: CreatePost = req.body
        const post = await createPostService(newPost)
        res.status(201).json({data: post})
    } catch (error) {
        logger.error(error)
    }
}

export const editPost = async (
    req: Request<{ post_id: string }, {}, EditPost>,
    res: Response
) => {
    try {
        const updateEdit = await editPostService(req.params.post_id, req.body)
        res.status(200).json({data: updateEdit})
    } catch (error) {
        logger.error(error)
    }
}

export const deletePost =  async (
    req: Request<{ post_id: string }>,
    res: Response
) => {
    try {
        const deletePostById = await deletePostService(req.params.post_id)
        res.status(204).json(deletePostById)
    } catch (error) {
        logger.error(error)
    }
}