const express = require('express');
const PaymentController = require('../controller/PaymentsController.js');

const router = express.Router();

router
    .get('/payments', PaymentController.listPayment)
    .post('/payments', PaymentController.registerPayment)
    .get('/payments/:id', PaymentController.listPaymentById)
    .put('/payments/:id/cancel', PaymentController.updatePaymentCanceled)
    .put('/payments/:id/confirm', PaymentController.updatePaymentConfirmed);
module.exports = router;
