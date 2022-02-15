import mongoose from 'mongoose';
import { IClient } from '../types/client.types';

const Schema = mongoose.Schema;

export const ClientSchema = new Schema<IClient>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  profile: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    phone_number: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    },
    description: {
      type: String
    },
    created_at: {
      type: Date,
      default: Date.now()
    },
    modified_at: {
      type: Date
    }
  }
});