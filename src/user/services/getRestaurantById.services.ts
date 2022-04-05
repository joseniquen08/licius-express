import { RestaurantModel } from '../entity/models/restaurant.models';
import { IRestaurant } from '../entity/types/restaurant.types';
import { UserIdType } from '../entity/types/user.types';

export const getRestaurantById = async (user_id: UserIdType|string): Promise<IRestaurant | null> => {
  try {
    const restaurant: IRestaurant | null = await RestaurantModel.findOne({ user_id });
    return restaurant;
  } catch (error: any) {
    throw new Error(error.message);
  }
}