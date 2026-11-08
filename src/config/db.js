import dotenv from 'dotenv';
import mongoose from 'mongoose';




dotenv.config();



export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        
    } catch (error) {
        
        process.exit(1);
    }
}