const express = require('express');
const router = express.Router();
const CountryModel = require('../models/countryModel');

// Obtener todos los países
router.get('/', async (req, res) => {
  const countries = await CountryModel.find({});
  res.json(countries);
});

// Obtener países por condición o consulta
router.get('/search', async (req, res) => {
  const query = req.query;
  const countries = await CountryModel.find(query);
  res.json(countries);
});

// Modificar un país por condición o consulta (PUT)
router.put('/', async (req, res) => {
  const query = req.query;
  const update = req.body;

  const result = await CountryModel.updateMany(query, update);

  if (result.nModified) {
    res.status(200).json({ message: 'Country updated successfully', result });
  } else if (result.n) {
    res.status(201).json({ message: 'New country created', result });
  } else {
    res.status(400).json({ message: 'Bad request', result });
  }
});

// Eliminar país(es) por condición o consulta (DELETE)
router.delete('/', async (req, res) => {
  const query = req.query;

  const result = await CountryModel.deleteMany(query);

  if (result.deletedCount) {
    res.status(200).json({ message: 'Country deleted successfully', result });
  } else {
    res.status(204).json({ message: 'No content', result });
  }
});

module.exports = router;
