import User from "../Models/User.js";
import mongoose from "mongoose";

const signupUser = async () => {
  try {
    const data = new User();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const loginUser = async () => {};

const updateUser = async () => {};

const userService = {
  signupUser,
  loginUser,
  updateUser,
};
