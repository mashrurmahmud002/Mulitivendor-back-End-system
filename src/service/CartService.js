
import cartRepo from "../repository/CartRepository.js"

export const addToCart = async(productInfo)=>{
    const cart = await cartRepo.addToCart(productInfo);
    return cart;
}



export default {
    addToCart
}