import mongoose from "mongoose";







const cartSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductUpload",

    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    

    status:{
        type:String,
        default:"active"
    }
    
    
},{
    timestamps:true
})



const cart = mongoose.model("Cart", cartSchema,'cart');
export default cart;