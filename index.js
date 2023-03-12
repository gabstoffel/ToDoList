import express from 'express';
import router from './routes/userRouter.js';
import getAuthorization from './routes/adminRouter.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3030;
const URL = process.env.MONGODB_CONNECTION_URL;
dotenv.config();
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://gabstoffel:FxkD3jcWR0Y7nASf@cluster0.kbmfuq3.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {console.log('DB connected')})

app.use('/user', express.json(), router);
app.use('/admin',express.json(), getAuthorization);
app.listen(port, ()=>{console.log(`Running on port: ${port}`)});

