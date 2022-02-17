import { NextFunction, Request, Response } from "express";
import { signInUser } from "../entity/types/user.types";
import { loginUserService } from "../services/loginUser.services";

export const loginUser = async (req: Request<{}, {}, signInUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = await loginUserService(req.body);
    res.status(200).header('Authorization', 'Bearer ' + token).json({ success: true });
  } catch (error) {
    next(error);
  }
}