import mongoose from "mongoose";
import User from "../models/User.js";
const userController = {
    register: async (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        try{
            const savedDoc = await user.save();
            res.send(savedDoc);
        } catch(err){
            res.send(err);
        }
    },
    login: (req, res) => {
        console.log('login');
        res.send();
    }
}
export default userController;