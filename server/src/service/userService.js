import User from "../Models/User.js";
import mongoose from "mongoose";

const signupUser = async (nickname, password) => {
  try {
    const data = await new User({
      _id: new mongoose.Types.ObjectId(),
      nickname: nickname,
      password: password,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const loginUser = async (nickname, password) => {
  try {
    console.log(nickname);
    console.log(password);

    const data = await User.findOne({
      nickname: nickname,
      password: password,
    });

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (id, nickname, password) => {
  try {
    console.log(id);

    const userid = mongoose.Types.ObjectId(id);

    console.log(userid);

    const data = await User.findByIdAndUpdate(userid, {
      nickname: nickname,
      password: password,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const userService = {
  signupUser,
  loginUser,
  updateUser,
};

export default userService;
