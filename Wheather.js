const axios = require('axios');
const apiKey = '7fc019b7cadff8e54939a56b49cf7960';
const city = 'tadipatri';

const apiUrl =` http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl)
  .then(response => {
    const weatherData = response.data;
    console.log(`Weather in ${city}:`);
    console.log(`- Temperature: ${weatherData.main.temp}°C`);
    console.log(`- Weather: ${weatherData.weather[0].description}`);
    console.log(`- Humidity: ${weatherData.main.humidity}%`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error.message);
});