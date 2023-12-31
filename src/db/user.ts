import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  authentication: {
    password: { type: String, select: false, required: true },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});
