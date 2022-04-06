import { PostModel } from "../entity/models/post.models";
import { IPost, IGetPost, IClientData } from "../entity/types/post.types";
import { UserModel } from "user/entity/models/user.models";
import { IUser } from "user/entity/types/user.types";
import { logger } from "../../shared/logger/appLogger";
import { ClientModel } from "../../user/entity/models/client.models";
import { RestaurantModel } from "../../user/entity/models/restaurant.models";
import { IClient } from "../../user/entity/types/client.types";

export const getAllPostsService = async (): Promise<IGetPost[] | undefined> => {
  try {
      const postList: IGetPost[] = await PostModel.find({}).populate('user_id', 'email role -_id');
      // postList.map((e) => {
      //   const id = e.user_id.id;
      //   const role = e.user_id.role;
      //   const userData = {
      //     fullname: '',
      //     nombre_comercial: '',
      //     description: '',
      //   }
      //   if (role === 2) {
      //     const clientData: IClient[] = ClientModel.find({id}, 'first_name last_name');
      //     userData.fullname =`${clientData.first_name} ${clientData.last_name}`
      //   }
      //   if (role === 3) {
      //     const userData = RestaurantModel.find({id}, 'profile');
      //   }
      //   e.push(user_data);
      // })
      return postList;
  } catch (error) {
      logger.error(error);
  }
}