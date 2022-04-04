import { Model as ModelType } from "mongoose";

export const findOneAnyByField = <T>(Model: ModelType<T>) => async <T>(field: T): Promise<any> => {
  return await Model.findOne({ ...field });
}