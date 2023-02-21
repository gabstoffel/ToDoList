import express from "express";
import tokenVerification from '../controllers/authController.js';
const getAuthorization = express.Router();
getAuthorization.get('/', tokenVerification, (req, res) => {
        res.send('you are an admin');
})
export default getAuthorization;