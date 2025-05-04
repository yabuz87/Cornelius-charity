import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

const fetchData = async (url, setLoading, setData, errorMessage) => {
    try {
        setLoading(true);
        const res = await axiosInstance.get(url);
        setData(res.data);
    } catch (error) {
        toast.error(`There is an error in loading ${errorMessage}: ${error.message}`);
        console.log(`There is an error in loading ${errorMessage} on the client side`);
    } finally {
        setLoading(false);
    }
};

const useGetStore = create((set) => ({
    isGalleriesLoading: false,
    isBlogsLoading: false,
    isProjectsLoading: false,
    galleryData: [],
    blogData: [],
    projectData: [],
    numericalDataForFocusingAreaChart:{
        labels: ['unEmployed Youth', 'orphanes', 'widowes', 'Aged individuals', 'clean water for society', 'Children'],
        values: [0, 20, 15, 20, 20, 15],
      },
      numericalDataForFinanceChart:{
        labels:['admin cost','aid cost'],
        values:[19,81],
      },

    getGalleries: () => fetchData("get/galleries", (loading) => set({ isGalleriesLoading: loading }), (data) => set({ galleryData: data }), "galleries"),

    getProjects: () => fetchData("get/projects", (loading) => set({ isProjectsLoading: loading }), (data) => set({ projectData: data }), "projects"),

    getBlogs: () => fetchData("get/blogs", (loading) => set({ isBlogsLoading: loading }), (data) => set({ blogData: data }), "blogs"),
}));

export default useGetStore;
