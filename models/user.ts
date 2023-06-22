import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: [true, "Username already exists"],
  },
  role: {
    type: String,
    default: "staff",
  },
});

const User = models.User || model("User", UserSchema);

export default User;
