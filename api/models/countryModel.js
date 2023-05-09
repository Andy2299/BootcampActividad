const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: {
    common: String,
    official: String,
  },
  capital: String,
  region: String,
  population: Number,
 
});

const CountryModel = mongoose.model('Country', countrySchema);

module.exports = CountryModel;
