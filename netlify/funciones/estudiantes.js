const estudiantesRouter = require('../../backend/router/estudiantesrouter');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());
app.use('/.netlify/functions/estudiantes', estudiantesRouter);

module.exports.handler = serverless(app);
