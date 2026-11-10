
import orderService from "../service/orderService.js";


export const createOrder = async(req,res)=>{
    const {_id} = req?.user;
    const order = await orderService.createOrder(_id, req.body);
    if(order){
        return res.status(200).json({message:"Order created successfully", success:true, data:{order}});
    }
    else{
        return res.status(400).json({message:"Order not created", success:false})
    }
    
}





export default {
    createOrder
}