import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { RestaurantModel } from '../entity/models/restaurant.models';
import { IRestaurant, restaurantRequest } from '../entity/types/restaurant.types';

export const createRestaurantService = async (restaurantRequest: restaurantRequest): Promise<IRestaurant> => {
  try {
    const restaurant = await createAny(RestaurantModel)(restaurantRequest);
    return restaurant as IRestaurant;
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}