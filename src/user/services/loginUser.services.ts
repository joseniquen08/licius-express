import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { SignInUser } from "../entity/types/user.types";
import { validatePassword } from "../utils/decrypt.utils";
import { createToken } from "../utils/token.utils";
import { getUserByEmail } from "./getUserByEmail.services";

export const loginUserService = async (userRequest: SignInUser): Promise<string> => {
  try {
    const user = await getUserByEmail(userRequest.email);

    if (user) {
      const auth = validatePassword(userRequest.password, user.password);
      if (auth) {
        return createToken({ id: user._id });
      } else {
        throw new ApplicationError(401, 'user email or password is incorrect');
      }
    } else {
      throw new ApplicationError(401, "user email doesn't exists ");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}