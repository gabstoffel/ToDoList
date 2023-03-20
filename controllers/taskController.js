import mongoose from "mongoose";
import task from "../models/Task.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import registerValidate from "./validate.js";
import Task from "../models/Task.js";

const taskController = {
    newTask: async (req, res) => {
        if(req.body.title){
            const task = new Task ({
                title: req.body.title,
                description: req.body.description,
            })
            try{
                const newtask = await task.save();
                res.send(newtask);
            } catch(err){res.send(err)}  
        }
    },
    getAll: async (req, res) => {

    },
    delTask: async (req, res) => {

    }

}
export default taskController;