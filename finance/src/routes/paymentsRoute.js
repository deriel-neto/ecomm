const express = require ('express');
const PaymentController = require ('../controller/PaymentsController');

const router = express.Router()

router
    .post("/payments", PaymentController.registerPayment)

module.exports = router