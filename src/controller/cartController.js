
import cartService from "../service/CartService.js";

export const addToCart = async(req,res)=>{
    const  productInfo = req.body;
    console.log(productInfo);
    const cart = await cartService.addToCart(productInfo);
    if(cart){
        return res.status(200).json({message:"Product added to cart successfully", success:true, data:{cart}});
    }
    else{
        return res.status(400).json({message:"Product not added to cart", success:false});
    }
}



export default {
    addToCart
}