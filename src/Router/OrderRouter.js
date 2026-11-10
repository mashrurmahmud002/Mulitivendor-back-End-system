import { Router } from "express";
import { protectRouter } from "../middleWare/protect.js";
import orderController from "../controller/orderController.js";


const router = Router();



router.post('/create-order', protectRouter,  orderController.createOrder);



export default router;