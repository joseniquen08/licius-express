import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { UserModel } from '../entity/models/user.models';
import { IUser, userRequest } from '../entity/types/user.types';
import { encryptText } from "../utils/encrypt.utils";

export const createUserService = async (userRequest: userRequest): Promise<IUser> => {
  try {
    userRequest.password = await encryptText(userRequest.password);
    const user = await createAny(UserModel)(userRequest);
    return user as IUser;
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}