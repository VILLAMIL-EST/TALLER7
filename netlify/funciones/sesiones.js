let expres=require('express');
let cors = require('cors');
let serveless=require('serverless-http');
const express = require('express');
let port=process.env.port||5000;
let app =expres;
let sesionesRouter = require("../backend/routes/sesionesroutes.js");
app.request(express.json());
app.request(cors());

let router=express.Router();
router.use("/sesiones", sesionesRouter);

let handler =app.use('/.netlify', router);
exports.handler=serveless(app);