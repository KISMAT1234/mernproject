import express from 'express';
import UserController from '../controllers/UserController.js';
import FileUpload from '../lib/FileUpload.js';

const userRouter = express.Router();
let fPInstance = new FileUpload();
let upload = fPInstance.custom_upload("uploads/users")

const userInstance = new UserController();

userRouter.get('/', userInstance.index);
userRouter.post('/',upload.single('image'), userInstance.store);
userRouter.get('/loginuser', userInstance.loginuser);

export default userRouter;