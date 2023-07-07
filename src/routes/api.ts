import { Router, Request, Response } from 'express';
// Controllers
import { carIndex, carShow, carStore, carUpdate, carDestroy } from '../controllers/CarController';
import { orderIndex } from '../controllers/OrderController';
import { register, login } from '../controllers/AuthController';
import { uploadIndex } from '../controllers/UploadContoller';
// Middlewares
import { logMiddleware } from '../middlewares/log';
import { sessionMiddleware } from '../middlewares/session';
import { multerMiddleware } from '../middlewares/multer'

const router = Router();

// Authentication
router.post('/register', register);
router.post('/login', login);

// Orders - private
router.get('/api/orders', sessionMiddleware, orderIndex);

// Cars
router.get('/api/cars', logMiddleware, carIndex);
router.get('/api/car/:id', carShow);
router.post('/api/car', carStore);
router.put('/api/car/update/:id', carUpdate);
router.delete('/api/car/destroy/:id', carDestroy);

// Upload
router.post('/api/upload', multerMiddleware ,uploadIndex); 

export default router;