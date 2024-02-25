import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import user from "../model/user.js"


const secret = 'test';


export const signIn = async (req,res) =>{

    const {username,password} = req.body;
    try{
        const oldUser = await user.findOne({username});
        if (!oldUser) {
            return res.send("Register First")
        }
        const isPasswordCorrect = await bcryptjs.compare(password,oldUser.password);
        if (!isPasswordCorrect) {
            return res.send('wrong password')
        }
        const token = jwt.sign({username:oldUser.username,id:oldUser._id},secret,{expiresIn:'1h'})
        res.cookie("token",token);
        res.status(200).json({result:true,token})
    }catch(err){

        res.status(500).json({message: "Something went wrong"});
        console.log(err);
    }

}

export const signUp = async (req,res) => {
    const {username,password} = req.body;

    try{
        const oldUser = await user.findOne({username});

        if (oldUser) {
            return res.send("User already exists")
        }

        const hashedPassword = await bcryptjs.hash(password,12);

        const result = await user
user.create({
            username,
            password:hashedPassword
        })

        const token = jwt.sign({username:result.username,id:result._id},secret,{
            expiresIn:'1h'
        })
        res.cookie("token",token);
        res.status(201).json({result,token})
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
        console.log(err);
    }
}