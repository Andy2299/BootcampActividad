const axios = require('axios');
const CountryModel = require('../models/countryModel');

async function fetchCountries() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

async function seedCountries() {
  const countries = await fetchCountries();

  if (countries) {
    countries.forEach(async (country) => {
      const newCountry = new CountryModel({
        name: country.name.common,
        capital: country.capital[0],
        region: country.region,
        population: country.population,
        // Agregue o modifique los campos según su esquema
      });

      try {
        await newCountry.save();
        console.log(`Country ${country.name.common} saved`);
      } catch (error) {
        console.error('Error saving country:', error);
      }
    });
  }
}

module.exports = seedCountries;
