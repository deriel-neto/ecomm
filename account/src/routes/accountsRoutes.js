import express from 'express';
import AccountController from '../controllers/accountController';

const router = express.Router();

router
    .get('/accounts', AccountController.listAccounts)
    .post('/accounts', AccountController.registerAccounts)
    .get('/accounts/:id', AccountController.listAccountsById)
    .put('/accounts/:id', AccountController.updateAccountsById)
    .delete('/accounts/:id', AccountController.deleteAccountsById);

export default router;
