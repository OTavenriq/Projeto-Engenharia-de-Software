import { Router } from 'express';
import CustomerController from './src/app/controller/customerController.js'; 
import EmployeeController from './src/app/controller/employeeController.js'; 
import RentalController from './src/app/controller/rentalController.js';
import BookController from './src/app/controller/bookController.js';
const router = Router();

router.post('/login', EmployeeController.login);

router.get('/books', BookController.index);

router.get('/customers', CustomerController.index);
router.get('/customers/search/:name', CustomerController.showByName);
router.get('/customers/:id', CustomerController.show);
router.post('/customers/', CustomerController.store);
router.patch('/customers/:id', CustomerController.update);
router.delete('/customers/:id', CustomerController.delete);

router.get('/rentals', RentalController.index);
router.get('/rentals/search/:date', RentalController.showByDate);
router.get('/rentals/:id', RentalController.show);
router.post('/rentals/', RentalController.store);
router.patch('/rentals/:id', RentalController.update);
router.delete('/rentals/:id/:id_book', RentalController.delete);

export default router;