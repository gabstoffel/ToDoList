
import validate from "./validate.js";
import Task from "../models/Task.js";
const taskController = {
    newTask: async (req, res) => {
        const userID = req.cookies.userID;
        const {error} = validate.taskValidate(req.body);
        if(error){res.status(400).send(error.message)}
        const title = req.body.title;
        const description = req.body.description;
        const task = new Task ({
            title: title,
            description: description,
            userID:  userID
        })
        try{
            const newtask = await task.save();
            res.send(newtask);
        } catch(err){res.send(err)}  
    },
    getAll: async (req, res) => {
        const userID = req.cookies.userID;
        Task.find({userID: userID}).then((task) => {
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
    },
    userInfo: async (req, res) => {
        try{
            const userID = req.cookies.userID;
            let totalTasks = await Task.count({userID: userID});
            totalTasks.toString();
            let userInfo = {
                totalTasks,
            }
            res.send(userInfo);
        } catch (err){
            console.log(err);
        }     
    }
}
export default taskController;