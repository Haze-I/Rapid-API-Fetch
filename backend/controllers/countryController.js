
const Country = require('../models/countryModel')
const express = require("express");
const axios = require('axios');
const router = express.Router()

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/ET',
  headers: {
    'X-RapidAPI-Key': `${process.env.API_KEY}`,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};


const getCountryDetails = router.get('/getCountryDetails', async (req, res) => {
  try {
    const response = await axios.request(options);
    for( let i = 0; i <= response.data.length; i++){
      const country = new Country({
        capital: response[0].data.capital,
        callingCode: response.data.callingCode,
        numRegions: response.data.numRegions,
      });
      country.save();
      
    }
   
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

})

module.exports = { getCountryDetails }

