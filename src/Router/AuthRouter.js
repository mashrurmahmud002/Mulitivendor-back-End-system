import { Router } from "express";
import authController from "../controller/authController.js";

const router = Router();


router.post('/create-account', authController.createUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/get-user-exist', authController.userExist);

export default router