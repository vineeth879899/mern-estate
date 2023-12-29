import mongoose from "mongoose";

const userSchame =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,  
    }
},{timestamps:true});

const User=mongoose.models('User',userSchame);

export default User;

