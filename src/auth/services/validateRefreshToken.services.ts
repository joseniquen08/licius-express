import { findAnyById } from '../../shared/factory/findAnyById';
import { findOneAnyByField } from '../../shared/factory/findOneAnyByField';
import { logger } from '../../shared/logger/appLogger';
import { UserModel } from '../../user/entity/models/user.models';
import { TokenModel } from '../entity/models/token.models';
import { tokenService } from '../utils/token.utils';

const { createToken } = tokenService;

export const validateRefreshTokenService = async (user_id: string, refreshToken: string): Promise<any> => {
  const user = await findAnyById(UserModel)(user_id);

  if (!user) throw new Error ('invalid user id');

  const currentToken = await findOneAnyByField(TokenModel)({ token: refreshToken });

  if (!currentToken) throw new Error('invalid token');

  try {
    return { authToken: createToken({ id: user_id }) }
  } catch (error: any) {
    logger.error('Error renewing auth token', {
      instance: 'services',
      fn: 'authRefreshTokenService',
      trace: error.message,
    });
    throw new Error(error);
  }
}