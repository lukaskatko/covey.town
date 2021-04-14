import { Document } from 'mongoose';

export interface IUserAccount extends Document {
  _id?: string;
  username: string;
  password: string;
  avatar: string;
}
