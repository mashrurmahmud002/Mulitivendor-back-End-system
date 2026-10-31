import { Router } from "express";

import { protectRouter } from "../middleWare/protect.js";
import cartController from "../controller/cartController.js";

const router = Router();


router.post('/add-to-cart', protectRouter, cartController.addToCart);





export default router