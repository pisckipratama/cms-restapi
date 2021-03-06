const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

module.exports = app;
