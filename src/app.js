

import express from "express";

import dotenv from "dotenv";


import cors from "cors";
import categoryRouter from "./Router/CategoryRouter.js";
import mongoose from "mongoose";


import crypto from 'crypto';

import vendorRouter from "./Router/vendorRouter.js";
import subcategoryRouter from "./Router/subcategoryRouter.js";
import productUploadRouter from "./Router/ProductUploadRouter.js";

import authRouter from "./Router/AuthRouter.js";
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



const generateSkutoken = (prefix="SKu")=>{
    // Generates a random 6-character uppercase alphanumeric string
    const randomCode = crypto.randomBytes(4).toString('hex').toUpperCase();
    // Optional: Add timestamp components for uniqueness
     const timestamp = Date.now().toString().slice(-4);
     return `${prefix}-${randomCode}-${timestamp}`;
}



app.use("/api/category-box", categoryRouter);
app.use('/api/sub-category', subcategoryRouter);
app.use("/api/vendor-auth", vendorRouter );
app.use('/api/vendor-product-upload', productUploadRouter);

app.use("/api/auth", authRouter);



// if (mongoose.connection.readyState === 0) {
//   connectDB();
// }


app.get('/', (req,res)=>{
    res.send("Server is healthy")

})

// Route to fetch a newly generated SKU
app.get('/api/generate-sku', (req, res) => {

  const newSku = generateSkutoken();
  console.log("hello")
  
  res.json({
    success: true,
    sku: newSku
  });
});





export default app;

