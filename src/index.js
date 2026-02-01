import "./styles.css";

const weatherInfo = document.querySelector('.weather-info');
const searchBtn = document.querySelector('button');
const apiKey = "3LMP8DFDEB9TKDYFNGJA4JK86";

async function getWeather() {
    const location = document.querySelector('.input').value;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
    const weatherData = await response.json();
    console.log(weatherData);
    weatherInfo.textContent = weatherData.currentConditions.conditions;
}

searchBtn.addEventListener('click', () => {
    getWeather();
});