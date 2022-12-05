import express from "express";
import { blogService } from "../service/index.js";

const createBlog = async (req, res) => {
  const imageLocation = req.file.location;
  const { userId, title, content } = req.body;

  try {
    const createdBlog = await blogService.createBlog(userId, title, imageLocation, content);
    if (!createdBlog) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "글 생성 성공",
        data: createdBlog,
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

const getAllBlog = async (req, res) => {};

/**
 * @route PUT /blog/:blogId
 * @desc update post
 */
const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  const { title, image, content } = req.body;
  try {
    const updateBlog = await blogService.updateBlog(blogId, title, image, content);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "글 수정 성공",
      data: updateBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "서버 내부 오류",
    });
  }
};

/**
 * @route DELETE /blog/:blogId
 * @desc delete post
 */
const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const deleteBlog = await blogService.deleteBlog(blogId);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "글 삭제 성공",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "서버 내부 오류",
    });
  }
};

/**
 * @route GET /blog/:userId
 * @desc get post by userId
 */
const getBlogByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const getBlogByUser = await blogService.getBlogByUser(userId);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "유저별 글 조회 성공",
      data: getBlogByUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "서버 내부 오류",
    });
  }
};

const getBlogByBlogId = async (req, res) => {};

const blogController = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  getBlogByUser,
  getBlogByBlogId,
};

export default blogController;
