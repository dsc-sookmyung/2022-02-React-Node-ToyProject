import { Router } from "express";
import { blogController } from "../controller/index.js";

const blogRouter = Router();

blogRouter.put("/:blogId", blogController.updateBlog);
blogRouter.delete("/:blogId", blogController.deleteBlog);
blogRouter.post("/", blogController.testBlog);


export default blogRouter;
