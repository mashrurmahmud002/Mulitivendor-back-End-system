
import cart from "../model/CartModle.js";
import cartService from "../service/CartService.js";

export const addToCart = async(req,res)=>{
    const  {userId, productId} = req.body;
    console.log(userId, productId,"You are here");

   
    try{
        
    

    const userExist = await cart.findOne({userId:userId, productId:productId});
    if(userExist){
        console.log("I am in user Exist")
        return res.status(400).json({message:"You have already added your product to cart", success:true,});
    }

    if(userId && productId){
        const cart1 = await cartService.addToCart(userId,productId);
        console.log("I am in cart1")
        return res.status(200).json({message:"Product added to cart successfully", success:true, data:{cart1}});

    }
    else{
        return res.status(400).json({message:"Product not added to cart", success:false});
    }
    }
    catch(err){
        console.log(err?.message);
    }
}

export const getUserCart = async(req,res)=>{

     const {_id} = req?.user;
     console.log(_id,"THis is from get user cart");
     

     const cart = await cartService.getUserCart(_id);
     console.log(cart,"THis is from get user cart");    
    if(cart){
        return res.status(200).json({message:"Cart fetched successfully", success:true, data:{cart}});
    }
    else{
        return res.status(400).json({message:"Cart not fetched", success:false});
    }

}


export const deleteFromCart = async(req, res)=>{

    console.log("delete")
    const {_id} = req?.user;
    const id = req.params.id;
    

    try{
        if(!_id){
            console.log("i am in")
            return res.status(400).json({message:"User not found", success:false});
        }
        const cart = await cartService.deleteFromCart(id);
        console.log("I am comming")
        

        
        if(!cart){
            return res.status(400).json({message:"Product not deleted from cart", success:false});
        }
        res.status(200).json({message:"Product deleted from cart successfully", success:true, data:{cart}});

        

    }catch(err){
        console.log(err?.message);
    }
    

}


export const getUserCartlength = async(req, res)=>{
    const cartItemLength = await cart.find({userId:req.user._id}).countDocuments();
    res.status(200).json({message:"Cart length fetched successfully", success:true, data:{cartItemLength}});
}






export default {
    addToCart,
    getUserCart,
    deleteFromCart
}