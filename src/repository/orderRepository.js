
import order from "../model/OrderModel.js";

export const createOrder = async(userId,order_data)=>{
    const order1 = await order.create({...order_data,userId});
    return order1;
}


export default {createOrder}