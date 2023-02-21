import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();
router.post('/register', express.json(), userController.register);
router.post('/login', express.json(), userController.login);
export default router;