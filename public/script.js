console.log("App is running");

// a helper function that creates a list item for a given dream

let globalConfirmed = document.getElementById("globalConfirmed")
let globalRecovered = document.getElementById("globalRecovered")
let globalDeaths = document.getElementById("globalDeaths")
let localTitle = document.getElementById("localTitle")
let localConfirmed = document.getElementById("localConfirmed")
let localRecovered = document.getElementById("localRecovered")
let localDeaths = document.getElementById("localDeaths")
// fetch the initial list of dreams
fetch("/api/data")
  .then(res => res.json())
  .then(res => {
    let { data } = res
    let { global, indonesia } = data
    globalConfirmed.innerHTML = global.confirmed
    globalRecovered.innerHTML = global.recovered
    globalDeaths.innerHTML = global.deaths

    localTitle.innerHTML = "Indonesia"
    localConfirmed.innerHTML = indonesia.confirmed
    localRecovered.innerHTML = indonesia.recovered
    localDeaths.innerHTML = indonesia.deaths
  });

