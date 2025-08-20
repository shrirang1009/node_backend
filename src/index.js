import dotenv from "dotenv";
import express from "express";   
dotenv.config({ path: "./.env" }); 
import cors from "cors"
import cookieParser from "cookie-parser";  // loads .env from root

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

const app=express()
connectDB()
.then(()=>
{
    app.listen(process.env.PORT||8000,()=>
    {
        console.log(`SERVER is running aat PORT: ${process.env.PORT}`);
        // Server Started 
    })
})
.catch((err)=>
{
    console.error("❌ MongoDB connection failed:", err);
});


/*
import express from "express";
(async ()=>
{
    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)
      app.on("error",()=>
    {
        console.log("Error:",error)
        throw error
    })
    app.listen(process.env.PORT,()=>
    {
        console.log(`App is running on port :${process.env.PORT}`) 
    })
    }
    catch(error)
    {
      console.error("Error:",error)
      throw err
    }
})()
    */