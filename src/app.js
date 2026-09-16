

import express from "express";

import dotenv from "dotenv";


import cors from "cors";
import categoryRouter from "./Router/CategoryRouter.js";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

import vendorRouter from "./Router/vendorRouter.js";



const app = express();
dotenv.config();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.use("/api/category-box", categoryRouter);
app.use("/api/vendor", vendorRouter )



// if (mongoose.connection.readyState === 0) {
//   connectDB();
// }

app.get('/', (req,res)=>{
    res.send("Server is healthy")

})





export default app;

