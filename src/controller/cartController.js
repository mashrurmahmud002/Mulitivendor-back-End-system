
import cartService from "../service/CartService.js";

export const addToCart = async(req,res)=>{
    const  {userId, productId} = req.params;

   
   
    const cart = await cartService.addToCart(userId,productId);
    if(cart){
        return res.status(200).json({message:"Product added to cart successfully", success:true, data:{cart}});
    }
    else{
        return res.status(400).json({message:"Product not added to cart", success:false});
    }
}

export const getUserCart = async(req,res)=>{

    const cart = await cartService.getUserCart(req.user._id);
    if(cart){
        return res.status(200).json({message:"Cart fetched successfully", success:true, data:{cart}});
    }
    else{
        return res.status(400).json({message:"Cart not fetched", success:false});
    }

}



export default {
    addToCart,
    getUserCart
}