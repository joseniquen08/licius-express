import { createPostService } from '../services/createPostService';
import { Request, Response } from 'express';
import { CreatePost } from '../entity/types/postInterface';
import { getPostsAllService } from '../services/getPostsAllService';
import { logger } from './../../logger/appLogger';


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