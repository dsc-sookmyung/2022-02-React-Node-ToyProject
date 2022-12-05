import Blog from "../Models/Blog.js";
import mongoose from "mongoose";

const createBlog = async (userId, title, image, content) => {
  try {
    const data = await new Blog({
      _id: new mongoose.Types.ObjectId(),
      user_id: mongoose.Types.ObjectId(userId),
      title: title,
      image: image,
      content: content,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateBlog = async (blogId, userId, title, image, content) => {
  try {
    blogId = mongoose.Types.ObjectId(blogId);
    userId = mongoose.Types.ObjectId(userId);
    const updateData = {
      title: title,
      user_id: userId,
      image: image, //이미지 업데이트 기능 추가
      content: content,
    };
    const data = await Blog.findByIdAndUpdate(blogId, updateData, { new: true });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteBlog = async (blogId) => {
  try {
    blogId = mongoose.Types.ObjectId(blogId);
    const image = await Blog.findById(blogId, { _id: 0, image: 1 });
    console.log(image);
    //s3에 저장된 이미지 삭제
    await Blog.findByIdAndDelete(blogId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getBlogByUser = async (userId) => {
  try {
    const data = await Blog.find({ user_id: userId }).sort({ created_at: -1 });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const blogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogByUser,
};

export default blogController;
