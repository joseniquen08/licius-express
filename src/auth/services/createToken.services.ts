import { Types } from "mongoose";
import { tokenService } from "../utils/token.utils";
import { createRefreshTokenService } from './createRefreshToken.services';

const { createToken } = tokenService;

export const createTokenService = async (userId: string | Types.ObjectId, role: number ): Promise<{ authToken: string, refreshToken: string }> => {
  try {
    return {
      authToken: createToken({ id: userId, role }),
      refreshToken: await createRefreshTokenService(userId)
    }
  } catch (error: any) {
    throw new Error(`Error creating tokens auth token ${error.message}`);
  }
}