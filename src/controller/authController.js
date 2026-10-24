

import { createToken } from "../middleWare/verifytoken.js";
import auth from "../model/AuthModel.js";
import authService from "../service/authService.js";




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
    console.log(user)
    if(!user){
        return res.status(400).json({message:"User not found"});
    }
    if(user.password !== password){
        return res.status(400).json({message:"Incorrect password"});
    }
    const token = createToken({email,password});
    res.cookie('rafi_token', token, { httpOnly: false, secure: "production", sameSite: 'lax' });
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
    const {_id} = req.body;
    const user = await auth.findById({_id:_id});
    if(user){
        return res.status(400).json({message:"User is online"});
    
}

}





export default {
    createUser,
    loginUser,
    logoutUser,
    userExist
}