import mongoose, { Document, Schema } from "mongoose";

// 1. Define an interface for the document
export interface IUser extends Document {
  userID: string;
  name: string;
  address: string;
}

// 2. Create the schema
const UserSchema: Schema<IUser> = new Schema<IUser>({
  userID: { type: String, required: true,},
  name: { type: String, required: true },
  address: { type: String, required: true },
});

// 3. Create the model
const UserModal = mongoose.model<IUser>("User", UserSchema);

export default UserModal;
