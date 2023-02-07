import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

router
    .get("/products", ProductController.listProducts)
    .post("/products", ProductController.registerProduct)

    export default router;