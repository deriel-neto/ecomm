import express from "express";
import AccountController from "../controllers/accountController.js";

const router = express.Router();

router
    .get("/accounts", AccountController.listAccounts)
    .post("/accounts", AccountController.registerAccounts)
    .get("/accounts/:id", AccountController.listAccountsById)
    .put("/accounts/:id", AccountController.updateAccountsById)

export default router;