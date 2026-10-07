

import { createToken } from "../middleWare/verifytoken.js";
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

     res.cookie('rafi_token', token, { httpOnly: true, secure: true, sameSite: 'none' });


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
    if(!user){
        return res.status(400).json({message:"User not found"});
    }
    if(user.password !== password){
        return res.status(400).json({message:"Incorrect password"});
    }
    const token = createToken({email,password});
    res.cookie('rafi_token', token, { httpOnly: true, secure: true, sameSite: 'none' });
    res.status(200).json({message:"User logged in successfully", success:true, data:{
        user,
        token
    }});
}





export default {
    createUser,
    loginUser
}