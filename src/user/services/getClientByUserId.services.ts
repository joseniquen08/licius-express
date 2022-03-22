import { ClientModel } from '../entity/models/client.models';
import { IClient } from '../entity/types/client.types';
import { UserIdType } from '../entity/types/user.types';

export const getClientByUserId = async (user_id: UserIdType): Promise<IClient | null> => {
  try {
    const client: IClient | null = await ClientModel.findOne({ user_id });
    return client;
  } catch (error: any) {
    throw new Error(error.message);
  }
}