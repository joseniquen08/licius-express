import { NextFunction, Request, Response } from "express";
import { createClientService } from "../services/createClient.services";
import { createUserService } from '../services/createUser.services';
import { userRequest } from "../types/user.types";

export const createUser = async (req: Request<{},{},userRequest>, res: Response, next: NextFunction) => {
  try {
    const user = await createUserService({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    });
    if (user.role === 2) {
      const client = await createClientService({
        user_id: user._id.toString(),
        profile: {
          first_name: req.body.first_name,
          last_name: req.body.last_name
        }
      });
      res.status(200).json({
        role: 2,
        response: {
          user: user,
          profile: client
        }
      });
    }
  } catch (error) {
    next(error);
  }
}