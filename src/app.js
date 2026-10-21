

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
import Stripe from "stripe";





const app = express();
dotenv.config();


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


const allowedOrigins = [
  'http://localhost:5173',                 // Your local frontend (change port if needed)
  'https://onrender.com'     // Your deployed frontend on Render
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow local requests, postman, or matching origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials:true
}));




const generateSkutoken = (prefix="SKu")=>{
    // Generates a random 6-character uppercase alphanumeric string
    const randomCode = crypto.randomBytes(4).toString('hex').toUpperCase();
    // Optional: Add timestamp components for uniqueness
     const timestamp = Date.now().toString().slice(-4);
     return `${prefix}-${randomCode}-${timestamp}`;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



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


app.post('/create-checkout-session', async (req, res) => {
try{
    const session = await stripe.checkout.sessions.create({
    line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Product Name',
            },
            unit_amount: 1000, // Amount in cents ($10.00)
          },
          quantity: 1,
        },
    ],
    mode: 'payment',
    success_url: 'http://localhost:5173/checkout?success=true',
    cancel_url: 'http://localhost:5173/checkout?canceled=true',
    // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
    
  });

  res.redirect(303, session?.url)

}catch(error){
  res.status(500).json({ error: error.message });

}

  
});

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

