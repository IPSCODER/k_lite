import dotenv from "dotenv";
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import morgan from "morgan"
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js"
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"

dotenv.config();

const port = process.env.PORT || 9000 ;

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(express.json({extended:true}));






const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if (!token) {
        return res.json({Message: "we need token please provide it"})
    } else{
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err,decoded) =>{
            if (err) {
                return res.json({Message:"Authentication Error"});
            }else{
                req = decoded;
                next();
            }
        })
    }
}

app.use("/user",userRouter)


app.use("/todo",todoRouter)

app.get("/logout",(req,res)=>{
    res.clearCookie("token")
    res.json({logout:true})
})



app.get("/",verifyUser,(req,res)=>{
    return res.json({status:"Success",name:req})
})


mongoose.connect(process.env.MONGO_URL).then((then)=>{
    app.listen(port,()=>{
        console.log("server is running");
    })
    })
