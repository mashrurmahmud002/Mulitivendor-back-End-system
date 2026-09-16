
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'


export const protectRouter = async(req,res,next)=>{
    const token = req.cookies.rafi_token;
    if(!token){
        res.status(401);
        throw new Error('Not authorized');
    }
    const decoded  = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
        _id: decoded._id,
        name: decoded.name,
        email: decoded.email
    }
    next();
}