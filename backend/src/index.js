import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import webRouter from './router/index.js';
import connectDB from './connection/database.js';
import UserSeeder from './seeder/UserSeeder.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(express.static('public'));

app.use(webRouter);
connectDB();
UserSeeder.run();

const port = process.env.PORT || 5000;
const httpServer =process.env.HTTP_SERVER

app.listen(port, () => {
    console.log(`Server is running on port ${httpServer}:${process.env.PORT}`);
});