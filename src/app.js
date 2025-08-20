import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express()
app.use(cors(
    {
        //only allows requests from the domain stored in environment
        origin:process.env.CORS_ORIGIN,
        //allows cookies, authorization headers, and TLS certificates to be sent across domains.
        credential:true

    }
))

//accept json max size=16kb
app.use(express.json({limit:"16kb"}))
//when data comes from url 
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// In order to store files (.pdf) we give public access
app.use(express.static("public"))
 //
app.use(cookieParser())