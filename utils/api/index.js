const apiClient = require("./api");
const endpoints = require("./endpoints");

const getData = endpoint => {
  return apiClient
    .get(endpoint)
    .then(res => res.data)
    .catch(err => console.log(err));
};

const getGlobal = () => {
  return getData("/");
};

const getDetailConfirmed = () => {
  return getData(endpoints.confirmed);
};

const getDetailDaily = () => {
  return getData(endpoints.daily);
};

const getDetailDeaths = () => {
  return getData(endpoints.deaths);
};

const getDetailRecovered = () => {
  return getData(endpoints.recovered);
};

const getCountryCode = () => {
  return getData(endpoints.countries);
};

const getByCountry = code => {
  return getData(`${endpoints.countries}/${code}`);
};

module.exports = {
  getGlobal,
  getDetailConfirmed,
  getDetailDaily,
  getDetailDeaths,
  getDetailRecovered,
  getCountryCode,
  getByCountry
};
