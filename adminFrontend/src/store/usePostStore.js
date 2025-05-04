import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const usePostStore = create((set) => ({
  isBlogUploadLoading: false,
  isGalleryUploadLoading: false,
  isProjectUploadLoading: false,
  
  uploadBlog: async (data) => {
    try {
      set({ isBlogUploadLoading: true });
      const res = await axiosInstance.post("post/addblog", data);
      toast.success("Your blog is uploaded successfully");
    } catch (error) {
      toast.error(error.message);
      console.log("There is an error in uploadBlog method from usePostStore:", error.message);
    } finally {
      set({ isBlogUploadLoading: false });
    }
  },
  uploadGallery: async (data) => {
    try {
      set({ isGalleryUploadLoading: true });
      const res = await axiosInstance.post("post/addgallery",data);
      toast.success("Your gallery item is uploaded successfully");
    } catch (error) {
      toast.error(error.message);
      console.log("There is an error in uploadGallery method from usePostStore:", error.message);
    } finally {
      set({ isGalleryUploadLoading: false });
    }
  },
  uploadProject: async (data) => {
    try {
      set({ isProjectUploadLoading: true });
      const res = await axiosInstance.post("post/addProject", data);
      toast.success("Your project is uploaded successfully");
    } catch (error) {
      toast.error(error.message);
      console.log("There is an error in uploadProject method from usePostStore:", error.message);
    } finally {
      set({ isProjectUploadLoading: false });
    }
  }
}));
