import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();

router
    .get('/categories', CategoryController.listCategories)
    .get('/categories/:id', CategoryController.listCategoriesById)
    .post('/categories', CategoryController.registerCategory)
    .put('/categories/:id', CategoryController.updateCategoryById)
    .delete('/categories/:id', CategoryController.deleteCategoryById);

export default router;
