import express from 'express';
import router from './routes/userRouter.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3030;
const URL = process.env.MONGODB_CONNECTION_URL;
dotenv.config();
mongoose.set('strictQuery', false)
mongoose.connect(URL, {}, () => {console.log('DB connected');})

app.use('/user', router);
app.listen(port, ()=>{console.log(`Running on port: ${port}`)});