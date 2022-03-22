import { IUser, SignInUser } from "../../user/entity/types/user.types";
import { getUserByEmail } from "../../user/services/getUserByEmail.services";
import { validatePassword } from "../utils/decrypt.utils";

export const validateUserService = async (userRequest: SignInUser): Promise<IUser> => {
  try {
    const user = await getUserByEmail(userRequest.email, userRequest.role);
    if (!user) throw new Error('email not found');
    const auth = validatePassword(userRequest.password, user.password);
    if (!auth) throw new Error('password is incorrect');
    return user;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}