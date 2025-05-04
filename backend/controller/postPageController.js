import Blogs from "../model/blogs.model.js";
import Gallery from "../model/gallery.model.js";
import Project from "../model/project.model.js";
import cloudinary from "../lib/cloudinary.js";

export const postBlog = async (req, res) => {
  try {
    const { description, title, photo } = req.body;
  
    if (!photo) {
     
      return res.status(404).json({ "message": "Profile picture is required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(photo);
    const photoUrl = uploadResponse.secure_url;
    const publicId=uploadResponse.public_id;

    const newblog = new Blogs({ 
       description,
       title,
       photo_id:publicId,
       photo:photoUrl
      });

    await newblog.save();
    res.status(201).json(newblog);
    console.log("Blog saved successfully");
  } catch (error) {
    res.status(400).json({ "message": error.message });
    console.log("There is an error in ", error.message);
  }
};

export const postGallery = async (req, res) => {
  try {
    const { photo, description, title } = req.body;
    if (!photo) {
     
      return res.status(404).json({ "message": "Profile picture is required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(photo);
    const photoUrl = uploadResponse.secure_url;
    const publicId=uploadResponse.public_id;
    const newGallery = new Gallery({
       description,
       title,
       photo:photoUrl,
       photo_id:publicId
      });

    await newGallery.save();
    res.status(201).json({ newGallery });
    console.log("Gallery successfully added");
  } catch (error) {
    res.status(500).json({ "message": error.message });
    console.log("There is an error in postGallery method", error.message);
  }
};

export const postProject = async (req, res) => {
  try {
    const { title, photo, description } = req.body;
     
    
    if (!photo) {
     
      return res.status(404).json({ "message": "Profile picture is required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(photo);
    const photoUrl = uploadResponse.secure_url;
    const publicId=uploadResponse.public_id;
    const newProject = new Project({
      title,
      description,
      photo:photoUrl,
      photo_id:publicId,
    });
    await newProject.save();
    res.status(201).json(newProject);
    console.log("Success");
  } catch (error) {
    res.status(500).json({ "message": error.message });
    console.log("There is an error in postProject", error);
  }
};
