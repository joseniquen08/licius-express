import { createAny } from '../../shared/factory/createAny';
import { ClientModel } from "../../user/entity/models/client.models";
import { CreateClient, IClient } from '../../user/entity/types/client.types';

export const createClientService = async (clientRequest: CreateClient): Promise<IClient> => {
  try {
    const client = await createAny(ClientModel)(clientRequest);
    return client as IClient;
  } catch (error: any) {
    throw new Error(`Error getting client: ${error.message}`);
  }
}
