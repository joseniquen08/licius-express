import { CreateClient, IClient } from '../../user/entity/types/client.types';
import { CreateRestaurant, IRestaurant } from '../../user/entity/types/restaurant.types';
import { UserIdType } from '../../user/entity/types/user.types';
import { tokenService } from "../utils/token.utils";
import { createRefreshTokenService } from './createRefreshToken.services';

const { createToken } = tokenService;

export const createTokenService = async (userId: string | UserIdType, role: number, user: IClient | IRestaurant | CreateClient | CreateRestaurant | null): Promise<{ authToken: string, refreshToken: string }> => {
  try {
    return {
      authToken: createToken({ id: userId, role, user }),
      refreshToken: await createRefreshTokenService(userId)
    }
  } catch (error: any) {
    throw new Error(`Error creating tokens auth token ${error.message}`);
  }
}
