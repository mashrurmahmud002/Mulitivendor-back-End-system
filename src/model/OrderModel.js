import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // ১. কে অর্ডারটি করেছে
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

   
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductUpload", // আপনার প্রোডাক্ট মডেলের নাম অনুযায়ী
          required: true,
        },
        
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true, 
        },
      },
    ],

    // ৩. মোট টাকার পরিমাণ
    totalAmount: {
      type: Number,
      required: true,
    },

   
    // shippingAddress: {
    //   fullName: { type: String, required: true },
    //   phone: { type: String, required: true },
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   postalCode: { type: String },
    // },

    
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "COD"], // Cash On Delivery বা অনলাইন পেমেন্ট
      default: "Pending",
    },
    
    
    // transactionId: {
    //   type: String,
    // },

   
    orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true, 
  }
);

const Order = mongoose.model("Order", orderSchema, "orders");
export default Order;