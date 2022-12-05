import { Router } from "express";
import { userController } from "../controller/index.js";

const userRouter = Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/signup", userController.register);
userRouter.put("/:id", userController.updateUser);

export default userRouter;
