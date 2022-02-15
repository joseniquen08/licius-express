import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from '../../shared/factory/createAny';
import { ClientModel } from "../entity/models/client.models";
import { clientRequest, IClient } from '../entity/types/client.types';

export const createClientService = async (clientRequest: clientRequest): Promise<IClient> => {
  try {
    const client = await createAny(ClientModel)(clientRequest);
    return client as IClient;
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}