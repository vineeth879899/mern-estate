import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashpassword=bcryptjs.hashSync(password,10);
    const newUser = new User({username, email, password:hashpassword});
    try{
        await newUser.save();
        res.status(200).json("user added sussufully")
    }
    catch(error){
        //res.status(500).json(error.message);
        next(error);
    }
}