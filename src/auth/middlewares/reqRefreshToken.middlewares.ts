import { NextFunction, Request, Response } from "express";
import * as yup from 'yup';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const refreshTokenSchema = yup.object({
  body: yup.object({
    refresh_token: yup.string().uuid().required('Refresh token is required')
  })
});

export const refreshTokenRequestValidator = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body
    });
    next();
  } catch (error: any) {
    next(new ApplicationError(400, error, 'validation'));
  }
}