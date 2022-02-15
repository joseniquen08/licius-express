import mongoose from 'mongoose';
import { RestaurantSchema } from '../schemas/restaurant.schemas';
import { IRestaurant } from '../types/restaurant.types';

export const RestaurantModel = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
