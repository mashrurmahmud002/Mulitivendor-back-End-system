

import cart from "../model/CartModle.js";

export const addToCart = async(userId,productId)=>{
    const cart1 = await cart.create({userId,productId});
    return cart1;
}


export default {
    addToCart
}