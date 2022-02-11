import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface ISchedule {
  day: string;
  isOpen: boolean;
  open_at: Date;
  close_at: Date;
  created_at: Date;
  modified_at: Date;
}

const ScheduleSchema = new Schema<ISchedule>({
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

export interface ILocationRestaurant {
  title: string,
  description: string,
  img_url: string,
  address: string,
  city: string,
  country: string,
  phone_number: string,
  latitude: string,
  longitude: string,
  tags: Types.Array<string>,
  schedule: Types.DocumentArray<ISchedule>,
  created_at: Date,
  modified_at: Date
}

const LocationRestaurantSchema = new Schema<ILocationRestaurant>({
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

export interface IRestaurant {
  user_id: Types.ObjectId;
  category_id: Types.ObjectId;
  profile: {
    nombre_comercial: String;
    razon_social: String;
    ruc: String;
    email: String;
    address: String;
    city: String;
    country: String;
    description: String;
    logo_url: String;
    created_at: Date;
    modified_at: Date;
  }
  locations: Types.DocumentArray<ILocationRestaurant>;
}

const RestaurantSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category_id: {
    type: Schema.Types.ObjectId,
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
    email: {
      type: String,
      required: true,
      unique: true
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

export const RestaurantModel = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
