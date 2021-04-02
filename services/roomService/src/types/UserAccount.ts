import { Document, model, Schema } from "mongoose"

export interface UserAccount extends Document {
  userName: string
  password: string
}

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
  }
)

export default model<UserAccount>("UserAccountItem", userAccountSchema)