

import cart from "../model/CartModle.js";

export const addToCart = async(userId,productId)=>{
    const cart1 = await cart.create({userId,productId});
    return cart1;
}

export const getUserCart = async()=>{
    const cart1 = await cart.find({}).populate("productId","title imageArray price quantity");
    return cart1;
}

export const deleteFromCart = async(productId)=>{
    
    const cart1 = await cart.findByIdAndDelete(productId);
    return cart1
}

export const updateCart = async(userId,id,quantity,price)=>{
    if(userId){
        const cart1 = await cart.findOneAndUpdate({_id:id},{quantity,price},{new:true,runValidators: true});
        return cart1;
    }
}


export default {
    addToCart,
    getUserCart,
    deleteFromCart,
    updateCart
}