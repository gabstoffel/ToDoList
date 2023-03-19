/* import express from "express";
import tokenVerification from '../controllers/authController.js';
const getAuthorization = express.Router();
getAuthorization.get('/', tokenVerification, (req, res) => {
        if(req.user.admin){
                res.send('you are an admin');       
        }else{
                res.status(401).send('access denied, you are not an admin');
        }
})
export default getAuthorization; */