import { Router } from "express";
import productController from "../controller/ProductUploadController.js";




const router = Router();





router.post('/product-upload',  productController.uploadProduct); 

router.get('/products',  productController.getProducts);
router.get('/products/:id',  productController.getProductsByVendorId);

router.get('/search-products',  productController.searchProducts);

router.get('/query-products-new',  productController.getProductsByQuery);
router.get('/query-products',  productController.getALLproductsByQuery);
router.get('/get-all-products-by-pagnation',  productController.getProductsByPagnation);








export default router