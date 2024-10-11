let expres=require('express');
let cors = require('cors');
let serveless=require('serverless-http');
const express = require('express');
let port=process.env.port||5000;
let app =expres;
let estudianteRouter = require("../backend/routes/estudiantesroutes.js");
app.request(express.json());
app.request(cors());

let router=express.Router();
router.use("/estudiantes", estudiantesrouter);

let handler =app.use('/.netlify/funciones', router);
exports.handler=serveless(app);