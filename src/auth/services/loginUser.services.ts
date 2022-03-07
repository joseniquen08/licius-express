import { SignInUser } from "../../user/entity/types/user.types";
import { TokenResponse } from '../entity/types/token.types';
import { createTokenService } from "./createToken.services";
import { validateUserService } from "./validateUser.services";

export const loginUserService = async (userRequest: SignInUser): Promise<TokenResponse> => {
  try {
    const user = await validateUserService(userRequest);
    return await createTokenService(user._id);
  } catch (error: any) {
    throw new Error(`Error login user: ${error.message}`);
  }
}