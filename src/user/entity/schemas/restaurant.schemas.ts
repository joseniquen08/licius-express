import mongoose from 'mongoose';
import { ILocationRestaurant, IRestaurant, ISchedule } from '../types/restaurant.types';

const Schema = mongoose.Schema;

export const ScheduleSchema = new Schema<ISchedule>({
  day: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
  open_at: {
    type: Date
  },
  close_at: {
    type: Date
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  modified_at: {
    type: Date
  }
});

export const LocationRestaurantSchema = new Schema<ILocationRestaurant>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  img_url: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone_number: {
    type: String
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  schedule: {
    type: [ScheduleSchema]
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  modified_at: {
    type: Date
  }
});

export const RestaurantSchema = new Schema<IRestaurant>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  category_id: {
    type: Number,
    ref: 'Category',
    required: true
  },
  profile: {
    nombre_comercial: {
      type: String,
      required: true
    },
    razon_social: {
      type: String,
      required: true
    },
    ruc: {
      type: String,
      required: true
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
      type: String,
      required: true
    },
    logo_url: {
      type: String
    },
    created_at: {
      type: Date,
      default: new Date()
    },
    modified_at: {
      type: Date
    }
  },
  locations: {
    type: [LocationRestaurantSchema]
  }
});
