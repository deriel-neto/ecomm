import express from 'express';
import accounts from './accountsRoutes';

const routes = (app) => {
    app.use(
        express.json(),
        accounts,
    );
};

export default routes;
