import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router
    .get("/categories", CategoryController.listCategories)
    .get("/categories/:id", CategoryController.listCategoriesById)
    .post("/categories", CategoryController.registerCategory)
    .put("/categories/:id", CategoryController.updateCategoryById)

export default router;