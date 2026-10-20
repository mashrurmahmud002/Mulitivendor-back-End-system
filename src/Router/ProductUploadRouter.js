import { Router } from "express";
import productController from "../controller/ProductUploadController.js";




const router = Router();





router.post('/product-upload',  productController.uploadProduct); 

router.get('/products',  productController.getProducts);
router.get('/products/:id',  productController.getProductsByVendorId);

router.get('/search-products',  productController.searchProducts);







export default router