import express from "express";
import { deleteGallery, deleteProject } from "../controller/deleteController.js";
const deleteRouters=express.Router();
deleteRouters.delete("/deleteGallery/:id",deleteGallery);
deleteRouters.delete("/deleteProject/:id",deleteProject);
export default deleteRouters;