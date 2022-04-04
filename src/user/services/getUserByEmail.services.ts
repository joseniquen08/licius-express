import { UserModel } from "../entity/models/user.models";
import { IUser } from "../entity/types/user.types";

export const getUserByEmail = async (email: string, role: number): Promise<IUser | null> => {
  try {
    const user: IUser | null = await UserModel.findOne({ email, role });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
