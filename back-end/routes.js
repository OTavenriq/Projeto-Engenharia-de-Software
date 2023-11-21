import { Router } from 'express';
import CustomerController from './src/app/controller/customerController.js'; 
const router = Router();

router.get('/customers', CustomerController.index);
router.get('/customers/:id', CustomerController.show);
router.post('/customers/', CustomerController.store);
router.patch('/customers/:id', CustomerController.update);
router.delete('/customers/:id', CustomerController.delete);

export default router;