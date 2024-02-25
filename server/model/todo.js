import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    username:String,
    title:String,
    description:String,
    date:String,
    id:String
})

export default mongoose.model('todos',todoSchema)