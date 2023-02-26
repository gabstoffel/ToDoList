import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import registerValidate from "./validate.js";

const userController = {
    register: async (req, res) => {
        const {error} = registerValidate(req.body);
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
                );
                res.header('validation-token', userToken);
                //é por meio do token que uma rota será protegida e determinado user terá ou não acesso a ela;
                res.send();
            }else{
                return res.status(400).send('wrong password, try again!');
            }
        }else{
            return res.status(400).send('You need to register first!');
        }
    },
}
export default userController;