"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSchema = exports.LocationRestaurantSchema = exports.ScheduleSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.ScheduleSchema = new Schema({
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
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});
exports.LocationRestaurantSchema = new Schema({
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
        type: [exports.ScheduleSchema]
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});
exports.RestaurantSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    category_id: {
        type: Number,
        ref: 'Category',
        required: true,
    },
    profile: {
        nombre_comercial: {
            type: String,
            required: true,
        },
        razon_social: {
            type: String,
            required: true,
        },
        ruc: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        logo_url: {
            type: String,
        },
    },
    locations: {
        type: [exports.LocationRestaurantSchema],
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});
