import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";



 export const useAuthStore=((set)=>({
    authUser:false
}))

