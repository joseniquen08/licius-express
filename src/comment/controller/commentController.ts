import { editCommentService } from './../services/editCommentService';
import { createCommentService } from './../services/createCommentService';
import { getCommentsService } from './../services/getCommentsService';
import { Request, Response } from 'express';
import { logger } from "../../logger/appLogger"
import { CreateComment, EditComment } from '../entity/types/commentInterface';
import { deleteCommentService } from '../services/deleteCommentService';

export const getComments = async (
    req: Request, 
    res: Response
) => {
    try {
        const comments = await getCommentsService()
        res.status(200).json(comments)
    } catch (err) {
        logger.error(err)
    }
}

export const createComment = async (
    req: Request<{}, {}, CreateComment>, 
    res: Response
) => {
    try {
        const newComment: CreateComment = req.body
        const comment = await createCommentService(newComment)
        res.status(201).json({data: comment})
    } catch (err) {
        logger.error(err)
    }
}

export const editComment = async (
    req: Request<{ comment_id: string }, {}, EditComment>,
    res: Response
) => {
    try {
        const updateComment = await editCommentService(req.params.comment_id, req.body)
        res.status(200).json({data: updateComment})
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
        res.status(204).json({data: comment})
    } catch (err) {
        logger.error(err)
    }
}