const db = require('../models/index');

class PaymentController {
    static async registerPayment(req, res) {
        const newPayment = req.body;
        try {
            const newPaymentcreated = await db.payments.create(newPayment);
            return res.status(201).location(`/payments/${newPaymentcreated.id}`).json(newPaymentcreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async listPayment(req, res) {
        try {
            const payment = await db.payments.findAll({
                attributes: { exclude: ['cvv'] },
            });
            return res.status(200).json(payment);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async listPaymentById(req, res) {
        const { id } = req.params;
        try {
            const payment = await db.payments.findOne({
                where: {
                    id: Number(id),
                },
                attributes: { exclude: ['cvv'] },
            });
            return res.status(200).json(payment);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePaymentCanceled(req, res) {
        const { id } = req.params;
        const status = { status: 'cancelado' };
        try {
            const payment = await db.payments.findOne({
                where: {
                    id: Number(id),
                },
            });
            if (payment.status === 'confirmado' || payment.status === 'criado') {
                await db.payments.update(status, {
                    where: {
                        id: Number(id),
                    },
                });
                return res.status(200).json('Pagamento cancelado');
            }
            return res.status(409).json('Pagamento não pode ser cancelado');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePaymentConfirmed(req, res) {
        const { id } = req.params;
        const status = { status: 'comfirmado' };
        try {
            const payment = await db.payments.findOne({
                where: {
                    id: Number(id),
                },
            });
            if (payment.status === 'criado') {
                await db.payments.update(status, {
                    where: {
                        id: Number(id),
                    },
                });
                return res.status(200).json('Pagamento confirmado');
            }
            return res.status(409).json('Pagamento não pode ser confirmado');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PaymentController;
