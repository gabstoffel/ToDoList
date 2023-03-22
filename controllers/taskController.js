import mongoose from "mongoose";
import task from "../models/Task.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validate from "./validate.js";
import Task from "../models/Task.js";

const taskController = {
    newTask: async (req, res) => {
        const {error} = validate.taskValidate(req.body);
        if(error){res.status(400).send(error.message)}
        const title = req.body.title;
        const description = req.body.description;
        const task = new Task ({
            title: title,
            description: description,
        })
        try{
            const newtask = await task.save();
            res.send(newtask);
        } catch(err){res.send(err)}  
    },
    getAll: async (req, res) => {
        Task.find().then((task) => {
            res.send(task);
        })
    },
    delTask: async (req, res) => {
        const docID = req.body._id;
        try {
            if(docID != ''){
                console.log(req.body._id);
                const doc = await Task.findById(req.body._id);
                console.log(doc);
                await Task.findByIdAndDelete(docID);
                res.send();
            }
        } catch (err){
            res.send(err);
        }
    }
}
export default taskController;