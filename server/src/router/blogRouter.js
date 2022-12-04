import { Router } from "express";
import { blogController } from "../controller/index.js";

const blogRouter = Router();

blogRouter.put("/:blogId", blogController.updateBlog);


export default blogRouter;
