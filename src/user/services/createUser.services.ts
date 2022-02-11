import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { IUser, UserModel } from "../models/user.models";
import { userRequest } from "../types/user.types";

export const createUserService = async (userRequest: userRequest): Promise<IUser> => {
  try {
    const user = new UserModel(userRequest);
    return await user.save();
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}