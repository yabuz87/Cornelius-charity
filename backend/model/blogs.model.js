import mongoose from "mongoose"
const blogsSchema=new mongoose.Schema({
    description:{
        type:String,
        // required:true
        default:""
    },
    title:{
        type:String,
        unique:true
    },
    photo:{
        type:String,
        default:""
    },
    photo_id:{
        type:String,
        default:""
    }
},{timestamps:true});
const blogs=mongoose.model("Blogs",blogsSchema);
export default blogs;