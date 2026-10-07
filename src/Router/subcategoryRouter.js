import { Router } from "express";
import subcategoryController from "../controller/subCategoryController.js";







const router = Router();

router.get('/subcategories',  subcategoryController.getSubCategories);



export default router