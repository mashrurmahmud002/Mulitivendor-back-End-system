import mongoose from "mongoose";







const cartSchema = new mongoose.Schema({
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductUpload",

    },

    status:{
        type:String,
        default:"active"
    }
    
    
},{
    timestamps:true
})



const cart = mongoose.model("Cart", cartSchema,'cart');
export default cart