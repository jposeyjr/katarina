import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PersonSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    hasShower: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: 'host',
    },
    resetPasswordLink: {
      data: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const PersonDB = mongoose.model('Person', PersonSchema);
