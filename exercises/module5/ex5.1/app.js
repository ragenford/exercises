const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const pizzaRouter = require('./routes/pizzas');
const filmRouter = require('./routes/films');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/pizzas', pizzaRouter);
app.use('/films', filmRouter);

module.exports = app;
