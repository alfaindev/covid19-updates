const extractValue = data => {
  return {
    confirmed: data.confirmed.value,
    recovered: data.recovered.value,
    deaths: data.deaths.value,
    lastUpdate: data.lastUpdate
  };
};

module.exports = { extractValue };
