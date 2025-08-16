const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

/* Using middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

module.exports = app;
