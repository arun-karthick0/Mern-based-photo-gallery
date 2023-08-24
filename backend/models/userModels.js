import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    photos: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = new model("user", userSchema);

export default User;
