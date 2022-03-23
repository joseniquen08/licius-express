import { createAny } from '../../shared/factory/createAny';
import { ClientModel } from "../../user/entity/models/client.models";
import { CreateClient } from '../../user/entity/types/client.types';
import { TokenResponse } from '../entity/types/token.types';
import { createTokenService } from './createToken.services';

export const createClientService = async (clientRequest: CreateClient): Promise<TokenResponse> => {
  try {
    const client = await createAny(ClientModel)(clientRequest);
    return await createTokenService(client.user_id, 2, client);
  } catch (error: any) {
    throw new Error(`Error getting client: ${error.message}`);
  }
}
