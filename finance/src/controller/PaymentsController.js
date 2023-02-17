const db = require ('../models/index')

class PaymentController {

    static registerPayment(req, res) {
        const newPayment = req.body
        try{
            const newPaymentcreated = db.payments.create(newPayment)
            return res.status(200).json(newPaymentcreated)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PaymentController