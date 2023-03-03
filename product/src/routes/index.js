import express from 'express';
import categories from './categoriesRoutes';
import products from './productsRoutes';

const routes = (app) => {
    app.use(
        express.json(),
        categories,
        products,
    );
};

export default routes;
