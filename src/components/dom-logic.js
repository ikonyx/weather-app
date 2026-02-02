import { getWeatherData } from "./api-logic.js"


const temperature = document.querySelector('#temperature');
const condition = document.querySelector('#condition');
const cloudCover = document.querySelector('#cloudCover');
const windSpeed = document.querySelector('#windSpeed');
const humidity = document.querySelector('#humidity');
const UVIndex = document.querySelector('#UVIndex');

const cloudCoverLabel = document.querySelector('#cloudCoverLabel');
const windSpeedLabel = document.querySelector('#windSpeedLabel');
const humidityLabel = document.querySelector('#humidityLabel');
const UVIndexLabel = document.querySelector('#UVIndexLabel');

const searchBtn = document.querySelector('button');

export function DisplayWeatherInfo() {
    searchBtn.addEventListener('click', displayWeatherInfo);

    async function displayWeatherInfo() {
        const weatherData = await getWeatherData();
        console.log(weatherData);
        
        temperature.textContent = weatherData.temperature;
        condition.textContent = weatherData.condition;

        cloudCoverLabel.textContent = "Cloud Cover"
        cloudCover.textContent = weatherData.cloudCover;
        
        windSpeedLabel.textContent = "Wind Speed"
        windSpeed.textContent = weatherData.windSpeed;
        
        humidityLabel.textContent = "Humidity";
        humidity.textContent = weatherData.humidity;

        UVIndexLabel.textContent = "UV Index";
        UVIndex.textContent = weatherData.UVIndex;
    }
}

