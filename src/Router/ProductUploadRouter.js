import { Router } from "express";
import productController from "../controller/ProductUploadController.js";




const router = Router();





router.post('/product-upload',  productController.uploadProduct); 

router.get('/products',  productController.getProducts);







export default router