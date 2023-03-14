const express = require('express');
const payments = require('./paymentsRoute.js');

const routes = (app) => {
    app.use(
        express.json(),
        payments,
    );
};

module.exports = routes;
