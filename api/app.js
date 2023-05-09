const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Configuración de middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

module.exports = app;
