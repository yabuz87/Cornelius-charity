import mongoose from "mongoose"
const projectsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String, 
        // since it is in development it is not that mandatory to store every sample photos on cloudinary b/c of my economy
        // required:true, 
        default:""
        },
    photo_id:{
            type:String,
            default:""
        }

},{timestamps:true});
const projects=mongoose.model("Project",projectsSchema);
export default projects