import { NextFunction, Request, Response } from "express";
import * as yup from 'yup';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const createPostSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required('user_id is required'),
    title: yup.string().required('title is required'),
    content: yup.string().required('content is required'),
    attachment_urls: yup.array().of(yup.string()).required('attachment_urls is required')
  })
});

export const postRequestValidator = (schema: any) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body
    });
    next();
  } catch (error: any) {
    next(new ApplicationError(403, error, 'validation'));
  }
}
