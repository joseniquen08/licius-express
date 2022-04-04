import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { RestaurantModel } from '../../user/entity/models/restaurant.models';
import { CreateRestaurant } from '../../user/entity/types/restaurant.types';
import { TokenResponse } from '../entity/types/token.types';
import { createTokenService } from './createToken.services';

export const createRestaurantService = async (restaurantRequest: CreateRestaurant): Promise<TokenResponse> => {
  try {
    const restaurant = await createAny(RestaurantModel)(restaurantRequest);
    return await createTokenService(restaurant.user_id, 3, restaurant);
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}