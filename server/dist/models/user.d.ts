import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
    userID: string;
    name: string;
    address: string;
}
declare const UserModal: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default UserModal;
//# sourceMappingURL=user.d.ts.map