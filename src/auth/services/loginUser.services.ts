import { SignInUser } from "../../user/entity/types/user.types";
import { getClientByUserId } from '../../user/services/getClientByUserId.services';
import { getRestaurantById } from '../../user/services/getRestaurantById.services';
import { TokenResponse } from '../entity/types/token.types';
import { createTokenService } from "./createToken.services";
import { validateUserService } from "./validateUser.services";

export const loginUserService = async (userRequest: SignInUser): Promise<TokenResponse> => {
  try {
    const user = await validateUserService(userRequest);
    if (user.role === 2) {
      const client = await getClientByUserId(user._id);
      return await createTokenService(user._id, user.role, client);
    } else {
      const restaurant = await getRestaurantById(user._id);
      return await createTokenService(user._id, user.role, restaurant);
    }
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}