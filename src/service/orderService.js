
import orderRepo from "../repository/orderRepository.js";

export const createOrder = async(userId,order_data)=>{
    const order = await orderRepo.createOrder(userId,order_data);
    return order;
}







export default {
    createOrder
}