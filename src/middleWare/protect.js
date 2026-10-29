
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'


export const protectRouter = async(req,res,next)=>{
    const token = req.cookies?.rafi_token;
    console.log("Recieved token", token);
    if(!token){
        res.status(401).json({message:"Not authorized"});
        throw new Error('Not authorized');
    }
    const decoded  = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded,"is decoded found???????????");
    req.user = {
        _id: decoded?._id,
        name: decoded?.name,
        email: decoded?.email
    }
    next();
}