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

const deleteBlog = async (blogId) => {
    try{
        blogId = mongoose.Types.ObjectId(blogId);
        const  image = await Blog.findById(blogId).select("image");
        //s3에 저장된 이미지 삭제
        await Blog.findByIdAndDelete(blogId);
    }catch(error){
        console.log(error);
        throw error;
    }
};

const testBlog = async () =>{
    await Blog.insertMany( [
        { "user_id": "a", "title": "11111111", "image": "A", "content": "111111111111111111" },
        { "user_id": "j", "title": "222222", "image": "A", "content": "22222222222222" },
        { "user_id": "k", "title": "333333", "image": "A", "content": "33333333333333" },
    ]);
}

const blogController={
    testBlog,
    updateBlog,
    deleteBlog,
};

export default blogController;