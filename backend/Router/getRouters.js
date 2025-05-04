import express from "express";
import { getBlogPage, getGalleryPage, getHomePage, getProjectPage,} from "../controller/getPagesController.js";

export const getRouter = express.Router();

getRouter.get("/home", getHomePage);
getRouter.get("/galleries", getGalleryPage); // Changed to lowercase 'g' for consistency
getRouter.get("/blogs", getBlogPage);
getRouter.get("/projects", getProjectPage); 