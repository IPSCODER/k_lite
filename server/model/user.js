import mongoose from "mongoose";

const user = mongoose.Schema({
    username:String,
    password:String,
})


export default mongoose.model("user",user)