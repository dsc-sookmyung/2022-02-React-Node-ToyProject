import express from "express";
import { userService } from "../service/index.js";

//회원가입
const register = async (req, res) => {
  const { password, nickname } = req.body;
  try {
    const registeredUser = await userService.signupUser(nickname, password);

    if (!registeredUser) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다. ",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "회원가입 성공",
        data: registeredUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "서버 내부 오류",
    });
  }
};

//로그인
const loginUser = async (req, res) => {
  const { password, nickname } = req.body;

  try {
    const data = await userService.loginUser(nickname, password);

    if (!data) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다. ",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "로그인 성공",
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "서버 내부 오류",
    });
  }
};

//유저업데이트

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nickname, password } = req.body;

  try {
    const updatedUser = await userService.updateUser(id, nickname, password);

    if (!updatedUser) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다. ",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "유저 업데이트 성공",
        data: updatedUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "서버 내부 오류",
    });
  }
};

const userController = {
  register,
  loginUser,
  updateUser,
};

export default userController;
