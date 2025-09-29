import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
        type: String,
    },
  },
  { timestamps: true }
);

const AuthSchema = mongoose.model("User", authSchema);

export default AuthSchema;

