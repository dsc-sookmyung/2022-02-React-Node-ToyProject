import Blog from "../models/Blog.js";
import mongoose from 'mongoose';


const updateBlog = async (blogId, title, image, content) => {
    try{
        blogId = mongoose.Types.ObjectId(blogId);
        const updateData = {
            title: title,
            image: image, //이미지 업데이트 기능 추가
            content: content,
        };
        const data = await Blog.findByIdAndUpdate(blogId, updateData, { new: true });
        return data;
    }catch(error){
        console.log(error);
        throw error;
    }

};

const blogController={
    updateBlog,
};

export default blogController;