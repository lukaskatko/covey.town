import { model, Schema } from 'mongoose';
import { IUserAccount } from '../types/UserAccount';

const userAccountSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: 'john',
    },
  },
  { timestamps: true },
);

export default model<IUserAccount>('UserAccountItem', userAccountSchema);
