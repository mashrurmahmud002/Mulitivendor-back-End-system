import { Router } from "express";
import { protectRouter } from "../middleWare/protect.js";

import vendorController from"../controller/vendorController.js";





const router = Router();

router.post('/create-vendor-register',  vendorController.createVendor); 






export default router