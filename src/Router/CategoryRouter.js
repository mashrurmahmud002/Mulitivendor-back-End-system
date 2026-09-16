import { Router } from "express";
import category from "../model/category.js";
import catrgoryController from "../controller/categoryController.js";

const router = Router();


router.get('/categories', catrgoryController.getCategories);

    


export default router