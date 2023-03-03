const express = require('express');
const payments = require('./paymentsRoute');

const routes = (app) => {
    app.use(
        express.json(),
        payments,
    );
};

module.exports = routes;
