
import express from 'express';
import taskController from '../controllers/taskController.js';
const todolist = express.Router();
todolist.post('/new', taskController.newTask);
todolist.get('/all', taskController.getAll);
todolist.get('/userinfo', express.json(), taskController.userInfo)
todolist.delete('/delete', taskController.delTask);

export default todolist;