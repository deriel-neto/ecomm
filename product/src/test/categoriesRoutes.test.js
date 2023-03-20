import request from 'supertest';
import {
    afterEach, beforeEach, describe, it,
} from '@jest/globals';
import app from '../app.js';

let server;
beforeEach(() => {
    const port = 3007;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('listando categorias', () => {
    it('deve retosnar uma lista com as categorias', async () => {
        await request(app)
            .get('/categories')
            .expect(200);
    });
});

let idNewCategory;
describe('post em category', () => {
    it('criando uma nova categorias', async () => {
        const retorno = await request(app)
            .post('/categories')
            .send({
                nome: 'esport',
                status: 'ativo',
            })
            .expect(201);
        // eslint-disable-next-line no-underscore-dangle
        idNewCategory = retorno.body._id;
    });
});

describe('listando categoria pelo id', () => {
    it('deve retosnar uma categoria', async () => {
        await request(app)
            .get(`/categories/${idNewCategory}`)
            .expect(200);
    });
});

describe('post em category', () => {
    it('criando uma nova categorias', async () => {
        await request(app)
            .put(`/categories/${idNewCategory}`)
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
            .delete(`/categories/${idNewCategory}`)
            .expect(200);
    });
});
