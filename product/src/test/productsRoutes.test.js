import request from 'supertest';
import {
    afterEach, beforeEach, describe, it,
} from '@jest/globals';
import app from '../app';

let server;
beforeEach(() => {
    const port = 3008;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('listando produtos', () => {
    it('deve retosnar uma lista com as produtos', async () => {
        await request(app)
            .get('/products')
            .expect(200);
    });
});

let idNewProduct;
describe('post em Product', () => {
    it('criando um novo produtos', async () => {
        const retorno = await request(app)
            .post('/products')
            .send({
                produto: 'livro',
                descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\'FHD, W11 Cinza',
                slug: 'notebook',
                precoUnitario: 350.00,
                estoque: 1,
                idCategoria: '63c15f6ac9e28591c1d02858',
            })
            .expect(201);
        // eslint-disable-next-line no-underscore-dangle
        idNewProduct = retorno.body._id;
    });
});

describe('listando categoria pelo id', () => {
    it('deve retosnar uma categoria', async () => {
        await request(app)
            .get(`/products/${idNewProduct}`)
            .expect(200);
    });
});

describe('post em Product', () => {
    it('criando um novo produtos', async () => {
        await request(app)
            .put(`/products/${idNewProduct}`)
            .send({
                nome: 'esport',
                status: 'inativo',
            })
            .expect(200);
    });
});

describe('deletando categoria pelo id', () => {
    it('deve deletar uma categoria', async () => {
        await request(app)
            .delete(`/products/${idNewProduct}`)
            .expect(200);
    });
});
