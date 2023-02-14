import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

router
    .get("/products", ProductController.listProducts)
    .get("/products/:id", ProductController.listProductsById)
    .post("/products", ProductController.registerProduct)
    .put("/products/:id", ProductController.updateProductById)
    .delete("/products/:id", ProductController.deleteProductById)

    export default router;