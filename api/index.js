const express = require('express');
const app = express();

app.use(express.json());

const serverless = require('serverless-http');

const userRoutes = require('../routes/user.route');
app.use('/api', userRoutes);


module.exports = serverless(app)