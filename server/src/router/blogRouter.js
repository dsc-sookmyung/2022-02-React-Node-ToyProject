import { Router } from "express";
import { blogController } from "../controller/index.js";
import upload from "../Loaders/upload.js";
const blogRouter = Router();

//여기서 upload.single("image") "image"는 client에서 formdata에 append하는 키이름
blogRouter.post("/", upload.single("image"), blogController.createBlog);
blogRouter.get("/", blogController.getAllBlog);

blogRouter.get("/:blogId/detail", blogController.getBlogByBlogId);

blogRouter.put("/:blogId", upload.single("image"), blogController.updateBlog);
blogRouter.delete("/:blogId", blogController.deleteBlog);
blogRouter.get("/:userId", blogController.getBlogByUser);

export default blogRouter;
