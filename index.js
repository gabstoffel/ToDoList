import express from 'express';
import router from './routes/userRouter.js';
import getAuthorization from './routes/getAuthorization.js';
import todolist from './routes/toDoListRouter.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
import * as dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT;
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

//banco:
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {console.log('DB connected')})
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, "public/register")));
app.use('/login', express.static(path.join(__dirname, "public/login")))
app.use('/user', express.json(), router);
app.use('/todolist', getAuthorization, express.static(path.join(__dirname, 'public/ToDoList')));
app.use('/todolist', express.json(), todolist);
app.listen(port, ()=>{console.log(`Running on port: ${port}`)});