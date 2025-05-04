import express from "express";
import dotenv from "dotenv";
 dotenv.config();
import path from "path";
import cors from "cors"
import bodyParser from "body-parser";
import {getRouter} from './Router/getRouters.js';
import connect  from "./lib/mongodb.js" ;
import postRouter from "./Router/postRouters.js";
import deleteRouters from "./Router/deleteRouters.js";
import authRouter from "./Router/authRouters.js";
import cookieParser from "cookie-parser";

const app=express();
const port=process.env.PORT


app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174",],
    credentials: true,
}));
app.get("/",(req,res)=>{
    res.json({"message":"this is a home page"})
})
app.use("/get",getRouter);
app.use("/post",postRouter);
app.use(deleteRouters);
app.use("/auth",authRouter);

app.listen(port,()=>{
    console.log(`server is listening port  ${port}`);
    connect();
    
})
