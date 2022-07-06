let currentDayTime = new Date();

function formatDate(date) {
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];

  let formattedDate = `${currentDay} ${currentHour}:${currentMinutes}`;
  return formattedDate;
}

let h5 = document.querySelector("h5");
h5.innerHTML = formatDate(currentDayTime);

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#your-city");
  let city = `${searchInput.value}`;
  let apiKey = "d65b5034851332171d7712135a2ce6d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showTemperature(response) {
  console.log(response.data);
  let h4 = document.querySelector("h4");
  h4.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}°c`;
}

function convertCelcius(event) {
  event.preventDefault();
  let tempElementCelcius = document.querySelector("#Ctemp");
  temp.innerHTML = "19 °C";
}
function convertFahrenheit(event) {
  event.preventDefault();
  let tempElementFahrenheit = document.querySelector("#Ftemp");
  temp.innerHTML = " 66 °F";
}
let fahrenheitLink = document.querySelector("#Ftemp");
fahrenheitLink.addEventListener("click", convertFahrenheit);

let celciusLink = document.querySelector("#Ctemp");
celciusLink.addEventListener("click", convertCelcius);

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `d65b5034851332171d7712135a2ce6d5`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
