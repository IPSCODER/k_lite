import mongoose from "mongoose";
import todoSchema from "../model/todo.js";


export const getTodo = async (req,res) => {
    const {username} = req.body
    try{
        const todoData = await todoSchema.find({username:username});
        if (!todoData) {
            res.send("not found")   
        }else{
            res.status(200).json(todoData);
        }

    }catch(err){
        res.status(404).json({ message: err.message });
    }
}


export const createTodo = async (req,res) => {
    const {username,title,description,date} = req.body;
    console.log(title,description);
    // const username= "psawant0015@gmail.com";
    try{
        const todoData = await todoSchema.find({username:username});
        if (!todoData) {
            res.send("not found")   
        }
        const result = await todoSchema.create({
            username,
            title:title,
            description:description,
            date:date
        })
        res.send({result})
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}


export const updateTodo = async (req,res) => {
    const {username,_id,title,description} = req.body;
    console.log(_id);
    // const username= "psawant0015@gmail.com";
    try{
        const todoData = await todoSchema.find({username:username});
        if (!todoData) {
            res.send("not found")   
        }
        const result = await todoSchema.findByIdAndUpdate({_id},{
            username,
            title:title,
            description:description,
            
        })
        res.send({result})
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}


export const deleteTodo = async (req,res) => {
    const {username,_id} = req.body;
    // const username= "psawant0015@gmail.com";
    try{
        const todoData = await todoSchema.find({username:username});
        if (!todoData) {
            res.send("not found")   
        }
        const result = await todoSchema.findByIdAndDelete({_id})
        res.send({result})
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}