import { NextFunction, Request, Response } from "express";
import * as yup from 'yup';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const createCommentSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required('user_id is required'),
    post_id: yup.string().required('post_id is required'),
    description: yup.string().required('description is required')
  })
});

export const commentRequestValidator = (schema: any) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body
    });
    next();
  } catch (error: any) {
    next(new ApplicationError(403, error, 'validation'));
  }
}
