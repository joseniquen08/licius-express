import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IClient {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  profile: {
    first_name: string;
    last_name: string;
    phone_number: string;
    address: string;
    city: string;
    country: string;
    description: string;
    created_at: Date;
    modified_at: Date;
  };
}

const ClientSchema = new Schema<IClient>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

export const ClientModel = mongoose.model<IClient>('Client', ClientSchema);
