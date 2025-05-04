import express from "express";
import { postBlog, postGallery, postProject } from "../controller/postPageController.js";
const postRouter=express();


postRouter.post("/addblog",postBlog);
postRouter.post("/addgallery",postGallery);
postRouter.post("/addProject",postProject);

export default postRouter;

