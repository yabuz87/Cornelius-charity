import express from "express";
import { signup,login,logout,updateProfile,checkAuth} from "../controller/authController.js";
import {protectRoute} from "../middleware/auth.middleware.js"
const authRouter=express.Router();


authRouter.post("/signup",signup);
authRouter.post("/login",login);
authRouter.post("/logout",logout);
authRouter.put("/updateProfile", protectRoute, updateProfile);
authRouter.get("/check", protectRoute, checkAuth);

export default authRouter;