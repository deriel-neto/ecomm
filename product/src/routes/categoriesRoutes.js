import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router
    .get("/categories", CategoryController.listCategories)
    .post("/categories", CategoryController.registerCategory)

export default router;