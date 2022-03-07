import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { RestaurantModel } from '../../user/entity/models/restaurant.models';
import { CreateRestaurant, IRestaurant } from '../../user/entity/types/restaurant.types';

export const createRestaurantService = async (restaurantRequest: CreateRestaurant): Promise<IRestaurant> => {
  try {
    const restaurant = await createAny(RestaurantModel)(restaurantRequest);
    return restaurant as IRestaurant;
  } catch (error: any) {
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}