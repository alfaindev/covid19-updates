const axios = require('axios')
const apiClient = axios.create({
  baseURL: 'https://covid19.mathdro.id/api/'
})

module.exports = apiClient