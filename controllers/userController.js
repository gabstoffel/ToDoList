import mongoose from "mongoose";
import userSchema from "../models/User.js";
const User = mongoose.model('User', userSchema);
const userController = {
    register: async (req, res) => {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        try{
            const savedUser = await newUser.save();
            res.send(savedUser);
        } catch(err){
            res.status(400).send(err);
        }
    },
    login: (req, res) => {
        console.log('login');
        res.send();
    }
}
export default userController;