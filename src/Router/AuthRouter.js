import { Router } from "express";
import authController from "../controller/authController.js";
import { protectRouter } from "../middleWare/protect.js";

const router = Router();


router.post('/create-account', authController.createUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/get-user-exist', protectRouter ,authController.userExist);

export default router