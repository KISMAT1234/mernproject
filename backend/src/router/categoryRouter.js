import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const categoryRouter = express.Router();
const categoryInstance = new CategoryController();

categoryRouter.get('/', categoryInstance.index);
categoryRouter.get('/:id', categoryInstance.show);
categoryRouter.post('/', categoryInstance.store);
categoryRouter.put('/:id', categoryInstance.update);
categoryRouter.delete('/:id', categoryInstance.destroy);

export default categoryRouter;