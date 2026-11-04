
import cartRepo from "../repository/CartRepository.js"

export const addToCart = async(userId,productId)=>{
    const cart = await cartRepo.addToCart(userId,productId);
    return cart;
}

export const getUserCart = async(userId)=>{
    const cart = await cartRepo.getUserCart(userId);
    return cart;
}

export const deleteFromCart = async(productId)=>{
    const cart = await cartRepo.deleteFromCart(productId);
    return cart;
}



export default {
    addToCart,
    getUserCart,
    deleteFromCart
}