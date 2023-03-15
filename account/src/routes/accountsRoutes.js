import express from 'express';
import AccountController from '../controllers/accountController.js';
import passport from 'passport';

const router = express.Router();

router
    .post('/accounts/login', passport.authenticate('local', { session: false }), AccountController.loginUser)
    .get('/accounts', AccountController.listAccounts)
    .post('/accounts', AccountController.registerAccounts)
    .get('/accounts/:id', AccountController.listAccountsById)
    .put('/accounts/:id', AccountController.updateAccountsById)
    .delete('/accounts/:id', AccountController.deleteAccountsById);

export default router;
