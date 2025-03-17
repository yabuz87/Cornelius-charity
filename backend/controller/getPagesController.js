import express from "express";
import Blogs from "../model/blogs.model.js"


export const getHomePage=async(req,res)=>{
    res.json({"message":"this is a home page"});

}
export const getBlogPage=async(req,res)=>{

  try {
    const data=await Blogs.find();
    if(data!==null)
    {
        res.status(200).json(data);
    }
    else
    {
      console.log("messages have been sent from the server")
       res.status(200).json({"message":"empty file"}) 
    }
  } catch (error) {
    res.json({"message":error.message});
    console.log("there is error in getBlogsPage method");
    
  }
}
export const getGalleryPage=async(req,res)=>{
    res.json({"message":"this is a Gallery page"});
}
