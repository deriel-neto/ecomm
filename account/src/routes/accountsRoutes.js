import express from "express";
import AccountController from "../controllers/accountController.js";

const router = express.Router();

router
    .get("/accounts", AccountController.listAccounts)
    .post("/accounts", AccountController.registerAccounts)

export default router;