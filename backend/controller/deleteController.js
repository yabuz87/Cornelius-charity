import Blogs from "../model/blogs.model.js";
import Gallery from "../model/gallery.model.js";
import Project from "../model/project.model.js";
import cloudinary from "../lib/cloudinary.js";

export const deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
         
       
        const item = await Gallery.findById(id);
        if (!item) {
            return res.status(404).json({ "message": "Gallery not found" });
        }

        // Extract the publicId from the image URL (adjust based on your URL format)
        const publicId = item.photo_id;

        // Delete the image from Cloudinary
        await cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                console.error('Error deleting image from Cloudinary:', error);
                throw new Error('Failed to delete image from Cloudinary');
            }
            console.log('Cloudinary deletion result:', result);
        });

        // Delete the item from MongoDB
        const deletedItem = await Gallery.findByIdAndDelete(id);
        return res.status(200).json(deletedItem);

    } catch (error) {
        console.error("There is an error in deleteGallery:", error.message);
        res.status(500).json({ "message": error.message });
       
    }
};

export const deleteProject=async (req,res)=>
{

    try {
        const {id } = req.params;
         
       
        const item = await Project.findById(id);
        if (!item) {
            return res.status(404).json({ "message": "Gallery not found" });
        }

        // Extract the publicId from the image URL (adjust based on your URL format)
        const publicId = item.photo_id;

        // Delete the image from Cloudinary
        await cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                console.error('Error deleting image from Cloudinary:', error);
                throw new Error('Failed to delete image from Cloudinary');
            }
            console.log('Cloudinary deletion result:', result);
        });

        // Delete the item from MongoDB
        const deletedItem = await Project.findByIdAndDelete(id);
        return res.status(200).json(deletedItem);

    } catch (error) {
        console.error("There is an error in deleteGallery:", error.message);
        res.status(500).json({ "message": error.message });
       
    }
}
export const deleteBlog=async (req,res)=>
{

    try {
        const {id } = req.params;
         
       
        const item = await Blogs.findById(id);
        if (!item) {
            return res.status(404).json({ "message": "Gallery not found" });
        }

        // Extract the publicId from the image URL (adjust based on your URL format)
        const publicId = item.photo_id;

        // Delete the image from Cloudinary
        await cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                console.error('Error deleting image from Cloudinary:', error);
                throw new Error('Failed to delete image from Cloudinary');
            }
            console.log('Cloudinary deletion result:', result);
        });

        // Delete the item from MongoDB
        const deletedItem = await Blogs.findByIdAndDelete(id);
        return res.status(200).json(deletedItem);

    } catch (error) {
        console.error("There is an error in deleteGallery:", error.message);
        res.status(500).json({ "message": error.message });
       
    }
}