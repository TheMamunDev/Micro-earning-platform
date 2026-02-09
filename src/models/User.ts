import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ['worker', 'buyer', 'admin'],
      default: 'worker',
    },
    coins: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
const User = models.User || model('User', UserSchema);
export default User;
