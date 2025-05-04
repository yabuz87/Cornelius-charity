import mongoose from "mongoose";
const gallerySchema=mongoose.Schema({
    photo:{
        type:String,
        // since it is in development it is not that mandatory to store every sample photos on cloudinary b/c of my economy
        // required:true,
        default:""

    },
    description:{
        type:String,
        default:""
    },
    title:{
        type:String,
        default:""
    },
    photo_id:{
        type:String,
        default:""
    }
},{timestamps:true})

const gallery=mongoose.model("Gallery",gallerySchema);
export default gallery;