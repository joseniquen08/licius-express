import CryptoJS from 'crypto-js';
import { NextFunction, Request, Response } from "express";
import tokenConfig from '../../config/token.config';
import { createClientService } from "../services/createClient.services";
import { createUserService } from '../services/createUser.services';
import { userRequest } from "../types/user.types";

const { sign, verify } = require('jsonwebtoken');

const { secret, expires } = tokenConfig;

const authToken = (payload: any, expiresIn = expires) => sign(payload, secret, { algorithm: 'HS256', expiresIn });

export const createUser = async (req: Request<{},{},userRequest>, res: Response, next: NextFunction) => {
  try {
    const user = await createUserService({
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, 'L1C1uS').toString(),
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
      const token = authToken({ id: client._id });
      res.status(200).json({
        success: true,
        token
      });
    }
  } catch (error) {
    next(error);
  }
}