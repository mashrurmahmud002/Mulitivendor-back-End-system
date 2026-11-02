import { Router } from "express";

import { protectRouter } from "../middleWare/protect.js";
import cartController from "../controller/cartController.js";

const router = Router();


router.post('/add-to-cart',  cartController.addToCart);





export default router;