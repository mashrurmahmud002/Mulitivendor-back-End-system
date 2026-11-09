
import cartRepo from "../repository/CartRepository.js"

export const addToCart = async(userId,productId)=>{
    const cart = await cartRepo.addToCart(userId,productId);
    return cart;
}

export const getUserCart = async(userId)=>{
    const cart = await cartRepo.getUserCart(userId);
    return cart;
}

export const deleteFromCart = async(id)=>{
    const cart = await cartRepo.deleteFromCart(id);
    return cart;
}

export const updateCart = async(userId,id,quantity,price)=>{
    const cart = await cartRepo.updateCart(userId,id,quantity,price);
    return cart 
}



export default {
    addToCart,
    getUserCart,
    deleteFromCart,
    updateCart
}