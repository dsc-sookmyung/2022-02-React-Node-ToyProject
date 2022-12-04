import express from "express";
//import { Request, Response } from "express";
import { blogService } from "../service/index.js";


const createBlog = async (req, res)=>{

};

const getAllBlog = async (req, res)=>{

};

const testBlog = async (req, res)=>{
    try{
        const testBlog = await blogService.testBlog();
        return res.status(200).json({
            status: 200,
            success: true,
            message: '글 추가 성공',
            data: testBlog,
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

/**
 * @route DELETE /blog/
 * @desc delete post
 */
const deleteBlog = async (req, res)=>{
    const { blogId } = req.params;
    try{
        const deleteBlog = await blogService.deleteBlog(blogId);
        return res.status(200).json({
            status: 200,
            success: true,
            message: '글 삭제 성공',
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

const getBlogByUser = async (req, res)=>{

};
const getBlogByBlogId = async (req, res)=>{

};


const blogController={
    testBlog,
    createBlog,
    getAllBlog,
    updateBlog,
    deleteBlog,
    getBlogByUser,
    getBlogByBlogId

};

export default blogController;