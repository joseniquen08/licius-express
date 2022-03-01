import { NextFunction, Request, Response } from "express";
import { SignInUser } from "../entity/types/user.types";
import { loginUserService } from "../services/loginUser.services";

export const loginUser = async (
  req: Request<{}, {}, SignInUser>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = await loginUserService(req.body);
    res.status(200).json({ success: true, token });
  } catch (error) {
    next(error);
  }
}
