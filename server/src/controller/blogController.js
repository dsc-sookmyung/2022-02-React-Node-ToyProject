import express from "express";
//import { Request, Response } from "express";
import { blogService } from "../service/index.js";


const createBlog = async (req, res)=>{

};

const getAllBlog = async (req, res)=>{

};

/**
 * @route PUT /blog/:blogId
 * @desc update post
 */
const updateBlog = async (req, res)=>{
    const { blogId } = req.params;
    const { title, image, content } = req.body;
    try{
        const updateBlog = await blogService.updateBlog(blogId, title, image, content);
        return res.status(200).json({
            status: 200,
            success: true,
            message: '글 수정 성공',
            data: updateBlog,
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: '서버 내부 오류',
        });
    }
};

const deleteBlog = async (req, res)=>{

};
const getBlogByUser = async (req, res)=>{

};
const getBlogByBlogId = async (req, res)=>{

};


const blogController={
    createBlog,
    getAllBlog,
    updateBlog,
    deleteBlog,
    getBlogByUser,
    getBlogByBlogId

};

export default blogController;