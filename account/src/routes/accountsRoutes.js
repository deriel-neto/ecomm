import express from 'express';
import AccountController from '../controllers/accountController.js';
import passport from 'passport';

const router = express.Router();

router
    .post('/accounts/login', passport.authenticate('local', { session: false }), AccountController.loginUser)
    .get('/accounts', passport.authenticate('bearer', { session: false }), AccountController.listAccounts)
    .post('/accounts', AccountController.registerAccounts)
    .get('/accounts/:id', AccountController.listAccountsById)
    .put('/accounts/:id', passport.authenticate('bearer', { session: false }), AccountController.updateAccountsById)
    .delete('/accounts/:id', passport.authenticate('bearer', { session: false }), AccountController.deleteAccountsById);

export default router;
