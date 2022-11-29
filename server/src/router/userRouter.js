import { Router } from "express";
import { userController } from "../controller/index.js";

const userRouter = Router();

userRouter.post("/signup",userController.signupUser);


export default userRouter;
