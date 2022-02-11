import mongoose from 'mongoose';

export const mongooseConnection = ( url: string ) => {
  mongoose.connect(url)
  mongoose.connection.on('error', () => {
    throw new Error('Error on db connection');
  });
  mongoose.connection.once('connected', () => console.log('Db connected'));
}