import { UserModel } from "../entity/models/user.models";
import { IUser, UserIdType } from "../entity/types/user.types";

export const getUserById = async (user_id: UserIdType | string): Promise<IUser | null> => {
  try {
    const user: IUser | null = await UserModel.findById(user_id);
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
