
import cartRepo from "../repository/CartRepository.js"

export const addToCart = async(userId,productId)=>{
    const cart = await cartRepo.addToCart(userId,productId);
    return cart;
}



export default {
    addToCart
}