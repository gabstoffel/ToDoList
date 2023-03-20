import express from 'express';
import tokenVerification from '../controllers/authController.js';

const getAuthorization = express.Router();
getAuthorization.get('/', tokenVerification, (req, res, next)=> {
    if(req.user){
        next();
    }else{
        res.send('you have to log in first');
    }
});
export default getAuthorization;