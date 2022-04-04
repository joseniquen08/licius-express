import { NextFunction, Request, Response } from "express";
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { validateRefreshTokenService } from '../services/validateRefreshToken.services';

export const refreshToken = async (
  req: Request<{}, {}, { user_id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { authorization } = req.headers;
    const { user_id } = req.body;
    const token = await validateRefreshTokenService(user_id, authorization!);
    res.status(200).json({ success: true, token });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}