import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const userValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email && !req.body.password) {
    next(new ApplicationError(400, 'email and password are required', 'validation'));
  }
  if (!req.body.email) {
    next(new ApplicationError(400, 'email is required', 'validation'));
  }
  if (!req.body.password) {
    next(new ApplicationError(400, 'password is required', 'validation'));
  }
  next();
}