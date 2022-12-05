import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // default
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
