const db = require ('../models/index')

class PaymentController {

    static async registerPayment(req, res) {
        const newPayment = req.body
        try{
            const newPaymentcreated = await db.payments.create(newPayment)
            return res.status(200).location(`/payments/${newPaymentcreated.id}`).json(newPaymentcreated)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async listPaymentById(req, res){
        const {id} = req.params
        try{
            const payment = await db.payments.findOne({
                where:{
                    id: Number(id)
                }, attributes:{exclude:["cvv"]}
            })
            return res.status(200).json(payment)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PaymentController