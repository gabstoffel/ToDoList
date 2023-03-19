import express from 'express';
import tokenVerification from '../controllers/authController.js';
import userController from '../controllers/userController.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getAuthorization = express.Router();
getAuthorization.get('/', tokenVerification, (req, res)=> {
    if(req.user){
        res.send('accces')
    }else{
        res.send('you have to log in first');
    }
});
export default getAuthorization;