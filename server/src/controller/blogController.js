import express from "express";
import { blogService } from "../service/index.js";

/**
 * @route POST /blog
 * @desc create post
 */
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

/**
 * @route GET /blog
 * @desc get all post
 */
const getAllBlog = async (req, res) => {
  try {
    const allBlog = await blogService.getAllBlog();
    if (!allBlog) {
      return res.status(204).json({
        status: 204,
        success: true,
        message: "글이 없습니다.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "글 목록 조회 성공",
        data: allBlog,
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

/**
 * @route PUT /blog/:blogId
 * @desc update post
 */
const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  const imageLocation = req.file.location;
  const { title, content } = req.body;

  try {
    const updatedBlog = await blogService.updateBlog(blogId, title, imageLocation, content);
    if (!updatedBlog) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "글 수정 성공",
        data: updatedBlog,
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

/**
 * @route DELETE /blog/:blogId
 * @desc delete post
 */
const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const deleteBlog = await blogService.deleteBlog(blogId);
    if (!deleteBlog) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "글 삭제 성공",
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

/**
 * @route GET /blog/:userId
 * @desc get post by userId
 */
const getBlogByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const getBlogByUser = await blogService.getBlogByUser(userId);
    if (!getBlogByUser) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "잘못된 요청입니다",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "유저별 글 조회 성공",
        data: getBlogByUser,
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

/**
 * @route GET /blog/:blogId/detail
 * @desc get post by blogId
 */
const getBlogByBlogId = async (req, res) => {
  const { blogId } = req.params;
  try {
    const detailBlog = await blogService.getBlogByBlogId(blogId);
    if (!detailBlog) {
      return res.status(400).json({
        status: 400,
        success: true,
        message: "잘못된 요청입니다.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "글 세부 조회 성공",
        data: detailBlog,
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

const blogController = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  getBlogByUser,
  getBlogByBlogId,
};

export default blogController;
