import { encryptText } from "../../auth/utils/encrypt.utils";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { UserModel } from '../../user/entity/models/user.models';
import { CreateUser, IUser } from '../../user/entity/types/user.types';

export const createUserService = async (userRequest: CreateUser): Promise<IUser> => {
  try {
    userRequest.password = await encryptText(userRequest.password);
    const user = await createAny(UserModel)(userRequest);
    return user as IUser;
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}