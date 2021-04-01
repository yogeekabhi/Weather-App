//INIT LOCAL STORAGE
const storage = new Storage();

const weatherLocation = storage.getLocationData();

//Init Weather
const weather = new Weather(weatherLocation.city);

//Init UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", getweather);

//Change Location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  //Change Location
  weather.changeLocation(city);

  //set Location Data
  storage.setLocationData(city);

  getweather();

  $("#locModal").modal("hide");
});

function getweather() {
  weather
    .getWeather()
    .then((results) => {
        //console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
