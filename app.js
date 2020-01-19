const express = require('express');
const app = express();

const apiRoutes = require('./api/routes/api');

app.use(express.static('public'));
app.use('/api', apiRoutes);

module.exports = app;