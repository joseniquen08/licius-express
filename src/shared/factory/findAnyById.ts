import { Model as ModelType, Types } from "mongoose";

export const findAnyById = <T>(Model: ModelType<T>) => async (id: string | Types.ObjectId, populate?: object[]): Promise<T[]> => {
  return await Model.find({ _id: typeof id === 'string' ? new Types.ObjectId(id) : id }).populate(populate);
}