import { Router } from "express";
import { userController } from "../controller/index.js";

const userRouter = Router();

userRouter.post("/login", userController.loginctrl);
userRouter.post("/signup", userController.register);

export default userRouter;
