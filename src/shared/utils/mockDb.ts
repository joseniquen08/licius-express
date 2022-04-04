import { MongoMemoryServer } from 'mongodb-memory-server-core';
import mongoose from 'mongoose';

export const mockDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();

  return {
    connect: async () => {
      try {
        await mongoose.connect(mongoServer.getUri());
      } catch (error) {
        console.log(error);
      }
    },
    closeDatabase: async () => {
      try {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        mongoServer.stop();
      } catch (error) {
        console.log(error);
      }
    },
    clearDatabse: async () => {
      const collections = mongoose.connection.collections;

      for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
      }
    }
  }
}