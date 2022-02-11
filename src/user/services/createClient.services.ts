import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { ClientModel, IClient } from "../models/client.models";
import { clientRequest } from "../types/client.types";

export const createClientService = async (clientRequest: clientRequest): Promise<IClient> => {
  try {
    const client = new ClientModel(clientRequest);
    return await client.save();
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}