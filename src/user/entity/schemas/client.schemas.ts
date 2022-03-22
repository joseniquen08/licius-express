import mongoose from 'mongoose';
import { IClient } from '../types/client.types';

const Schema = mongoose.Schema;

export const ClientSchema = new Schema<IClient>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, 'is required']
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
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

ClientSchema.methods.toJSON = function() {
  const { profile } = this.toObject();
  return { profile };
}

ClientSchema.set('toJSON',{ virtuals: true });
ClientSchema.set('toObject', { virtuals: true });