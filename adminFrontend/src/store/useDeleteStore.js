import {create} from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";
 export const useDeleteStore=create((set)=>
({
     isGalleryDeletingLoading:false,
     isBlogDeletingLoading:false,
     isProjectDeletingLoadin:false,

     deleteGallery:async(id)=>{
        try {
            set({isDeletingLoading:true});
            await axiosInstance.delete(`deleteGallery/${id}`);
            toast.success("the photo and its Description deleted successfully from Gallery Section");
        } catch (error) {
            toast.error(error.message);
        }finally{
                set({isGalleryDeletingLoading:false})
        }
     },
     deleteProject:async(id)=>{
        try {
            set({isDeletingLoading:true});
            await axiosInstance.delete(`deleteProject/${id}`);
            toast.success("the photo and its Description deleted successfully from Project Section");
        } catch (error) {
            toast.error(error.message);
        }finally{
            set({isProjectDeletingLoadin:false});
        }
     },
     deleteBlog:async(id)=>{
        try {
            set({isDeletingLoading:true});
            await axiosInstance.delete(`deleteBlog/${id}`);
            toast.success("the photo and its Description deleted successfully from Blog section");
        } catch (error) {
            toast.error(error.message);
        }finally{
            set({isBlogDeletingLoading:false});
        }
     },

}))

