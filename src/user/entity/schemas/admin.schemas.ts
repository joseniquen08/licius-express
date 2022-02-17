import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const adminSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
  profile: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    picture_url: {
      type: String,
    },
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});
