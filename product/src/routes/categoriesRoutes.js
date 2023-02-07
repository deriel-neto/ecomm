import express from "express";
import CategoryController from "../controllers/categoryController.js";
import CategoryControler from "../controllers/categoryController.js";

const router = express.Router();

router
    .get("/categories", CategoryController.listarCategorias);

export default router;