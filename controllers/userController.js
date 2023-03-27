import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validate from "./validate.js";

const userController = {
    register: async (req, res) => {
        const {error} = validate.registerValidate(req.body);
        if(error){return res.status(400).send(error.message)};
        const selectedUser = await User.findOne({email:req.body.email});
        if(selectedUser){
            return res.status(400).send('This email has already been registred');
        }
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            //gera uma senha criptografada, a ser gravada no banco;
            //usa como padrão salt = 10;
        })
        try{
            const savedDoc = await user.save();
            res.send(savedDoc);
        } catch(err){
            res.send(err);
        }
    },
    login: async(req, res) => {
        const selectedUser = await User.findOne({email: req.body.email});
        if(selectedUser){
            const passwordValidation =  await bcrypt.compare(req.body.password, selectedUser.password);
            if(passwordValidation){
                const selectedUserID = selectedUser._id;
                const selectedUserAdmin = selectedUser.admin;
                const userToken = jwt.sign(
                    {_id: selectedUserID, admin: selectedUserAdmin}, process.env.TOKEN_SECRETKEY
                )
                const options = {
                    secure: false,
                    maxAge: 3600000,
                    httpOnly: false,
                }
                res.cookie('token', userToken, options);
                res.cookie('userID', selectedUserID, options);
                res.send();

            }else{
                return res.status(400).send('wrong password, try again!');
            }
        }else{
            return res.status(400).send('You need to register first!');
        }
    },
    userInfo: async (req, res) => {
        const userID = req.cookies.userID;
        const userinfo = await User.findOne({_id: userID});
        const info = {
            name: userinfo.name
        }
        res.send(info);
    }
}
export default userController;