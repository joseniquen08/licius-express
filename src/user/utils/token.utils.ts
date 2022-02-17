import jwt from 'jsonwebtoken';
import tokenConfig from '../../config/token.config';

export const createToken = (payload: {}): string => {
  return jwt.sign(payload, tokenConfig.secret, {
    algorithm: 'HS256',
    expiresIn: tokenConfig.expires
  });
}

export const validateToken = (token: string) => {
  return jwt.verify(token, tokenConfig.secret);
}
