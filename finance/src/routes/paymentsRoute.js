const express = require ('express');
const PaymentController = require ('../controller/PaymentsController');

const router = express.Router()

router
    .post("/payments", PaymentController.registerPayment)
    .get("/payments/:id", PaymentController.listPaymentById)

module.exports = router