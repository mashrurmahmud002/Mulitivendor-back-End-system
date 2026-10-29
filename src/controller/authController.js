

import { createToken } from "../middleWare/verifytoken.js";
import auth from "../model/AuthModel.js";
import authService from "../service/authService.js";
import bcrypt from 'bcryptjs';




export const createUser = async(req,res)=>{
     const {fullname, email,password} = req.body;
     if(!email || !password || !fullname){
         return res.status(400).json({message:"Please fill all the fields"});
     }

     const userExist = await authService.findIdbyEmail(email);
     if(userExist){
         return res.status(400).json({message:"User already exist"});
     }


     const user = await authService.createUser({fullname, email,password});
     const token = createToken({email,password});

     res.cookie('rafi_token', token, { httpOnly: false, secure: "production", sameSite: 'lax' });


    res.status(200).json({message:"User created successfully", success:true, data:{
        user,
        token
    }});

     

}




export const loginUser = async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please fill all the fields"});
    }
    const user = await authService.findIdbyEmail(email);
    console.log(user,"user is ")
    if(!user){
        console.log("I am comming")
        return res.status(400).json({message:"User not found"});
    }
    const isValidPassword = await bcrypt.compare(password, user?.password);
    if(!isValidPassword){
        return res.status(400).json({message:"Invalid password"});
    }
    const token = createToken({email,password,_id:user._id});
    res.cookie('rafi_token', token, { httpOnly: false, secure: process.env.NODE_ENV==="production", sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", });
    res.status(200).json({message:"User logged in successfully", success:true, data:{
        user,
        token
    }});
}

export const logoutUser = async(req,res)=>{
    res.clearCookie('rafi_token', { httpOnly: false, secure: "production", sameSite: 'lax' });
    res.status(200).json({message:"User logged out successfully", success:true});
}

export const userExist = async(req,res)=>{
    const {_id} = req.user;
    const user = await auth.findById({_id:_id});
    if(user){
        return res.status(200).json({message:"User is online"});
    
    }
    return res.status(400).json({message:"User is offline"});

}





export default {
    createUser,
    loginUser,
    logoutUser,
    userExist
}