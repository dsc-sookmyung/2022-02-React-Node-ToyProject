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

    await data.save();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateBlog = async (blogId, title, image, content) => {
  try {
    blogId = mongoose.Types.ObjectId(blogId);
    const updateData = {
      title: title,
      image: image, //이미지 업데이트 기능 추가
      content: content,
    };
    const data = await Blog.findByIdAndUpdate(
      {
        _id: blogId,
      },
      updateData,
      { new: true }
    );
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
    const user_id = mongoose.Types.ObjectId(userId);
    const data = await Blog.find({ user_id: user_id }).sort({ created_at: -1 });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllBlog = async () => {
  try {
    const data = await Blog.find();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getBlogByBlogId = async (blogId) => {
  try {
    const blog_id = mongoose.Types.ObjectId(blogId);
    const data = await Blog.findById(blog_id);
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
  getAllBlog,
  getBlogByBlogId,
};

export default blogController;
