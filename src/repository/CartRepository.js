
import cart from "../model/CartModle.js";

export const addToCart = async(productInfo)=>{
    const cart = await cart.create(productInfo);
    return cart;
}


export default {
    addToCart
}