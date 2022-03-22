import { model } from 'mongoose';
import { PurchaseSchema } from '../schemas/purchase.schemas';
import { IPurchase } from '../types/purchase.types';

export const PurchaseModel = model<IPurchase>('Purchase', PurchaseSchema);