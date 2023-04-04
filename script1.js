const apiKey = 'YOUR_API_KEY';
const cityInput = document.getElementById('city');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const temp2 = document.getElementById('temp2');
const maxTemp = document.getElementById('max_temp');
const minTemp = document.getElementById('min_temp');
const humidity = document.getElementById('humidity');
const humidity2 = document.getElementById('humidity2');
const windDegrees = document.getElementById('wind_degrees');
const feelsLike = document.getElementById('feels_like');

document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();
  const city = cityInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      cityName.innerText = data.name;
      temp.innerText = `${data.main.temp} °C`;
      temp2.innerText = `${data.main.temp} °C`;
      maxTemp.innerText = `${data.main.temp_max} °C`;
      minTemp.innerText = `${data.main.temp_min} °C`;
      humidity.innerText = `${data.main.humidity} %`;
      humidity2.innerText = `${data.main.humidity} %`;
      windDegrees.innerText = `${data.wind.deg} °`;
      feelsLike.innerText = `${data.main.feels_like} °C`;
    })
    .catch(error => console.log(error));
});
