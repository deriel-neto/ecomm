const request = require('supertest');
const {
    afterEach, beforeEach, describe, it,
} = require('@jest/globals');
const app = require('../app');
const { response } = require('../app');

let server;
beforeEach(() => {
    const port = 3009;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

let idNewPayment;
describe('post em Payment', () => {
    it('criando uma nova pagamento', async () => {
        const retorno = await request(app)
            .post('/payments')
            .send({
                valor: 200.99,
                nome: 'paula',
                numero: 231312313,
                expiracao: '12/2023',
                cvv: 123,
                status: 'criado',
            })
            .expect(201);
        idNewPayment = retorno.body.id;
    });
});

describe('listando pagamento pelo id', () => {
    it('deve retosnar um pagamento', async () => {
        await request(app)
            .get(`/payments/${idNewPayment}`)
            .expect(200);
    });
});

describe('cancelando pagamento pelo id', () => {
    it('pagamento cancelado', async () => {
        await request(app)
            .put(`/payments/${idNewPayment}/confirm/`)
            .expect(200);
    });
});

describe('confirmando pagamento pelo id', () => {
    it('pagamento confimado', async () => {
        await request(app)
            .put(`/payments/${idNewPayment}/confirm/`)
            .expect(409);
    });
});
