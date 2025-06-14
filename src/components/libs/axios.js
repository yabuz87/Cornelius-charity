import React from 'react'
import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"https://charity-website-z6po.onrender.com/",
    withCredentials:true,
});
