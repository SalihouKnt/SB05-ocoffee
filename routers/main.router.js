import { Router } from 'express';
import { mainController } from '../controllers/main.controller.js';

export const router = Router();

// Routes
router.get('/', mainController.home);
router.get('/catalog', mainController.catalog);
router.get('/coffee/:id', mainController.coffeeDetails);
router.get('/about', mainController.about);

// 404 route
router.use((req, res) => {
  res.locals.style = 'home';
  res.status(404).render('404');
});