import express from 'express';
import NewsController from '../controllers/NewsController.js';
import FileUpload from '../lib/FileUpload.js';
let fPInstance = new FileUpload();
let upload = fPInstance.custom_upload("uploads/news")


const newsRouter = express.Router();
const newsInstance = new NewsController();

newsRouter.get('/', newsInstance.index);
newsRouter.get('/:id', newsInstance.show);
newsRouter.post('/',upload.single('image'), newsInstance.store);
newsRouter.put('/:id', newsInstance.update);
newsRouter.delete('/:id', newsInstance.destroy);

export default newsRouter;