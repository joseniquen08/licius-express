import { model } from 'mongoose';
import { TokenSchema } from '../schemas/token.schemas';
import { IToken } from '../types/token.types';

export const TokenModel = model<IToken>('Token', TokenSchema);
