import { Router } from "express";
import { protectRouter } from "../middleWare/protect.js";

import vendorController from"../controller/vendorController.js";





const router = Router();

router.post('/create-vendor-register',  vendorController.createVendor); 
router.post('/vendor-login',  vendorController.loginVendor);
router.get("/top-vendor", vendorController.getTopVendor);







export default router