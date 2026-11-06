import { Router } from "express";

import { protectRouter } from "../middleWare/protect.js";
import cartController from "../controller/cartController.js";

const router = Router();


router.post('/add-to-cart',  cartController.addToCart);
router.get('/get-user-cart', protectRouter ,cartController.getUserCart);
router.delete('/delete-from-cart/:id', protectRouter ,cartController.deleteFromCart);





export default router;