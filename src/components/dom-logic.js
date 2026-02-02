import { getWeatherData } from "./api-logic.js"

const location = document.querySelector('input')
const weatherInfo = document.querySelector('#weather-info');
const temperature = document.querySelector('#temperature');
const condition = document.querySelector('#condition');
const cloudCover = document.querySelector('#cloudCover');
const windSpeed = document.querySelector('#windSpeed');
const humidity = document.querySelector('#humidity');
const UVIndex = document.querySelector('#UVIndex');
const weatherIcon = document.querySelector('#weather-icon');

const cloudCoverLabel = document.querySelector('#cloudCoverLabel');
const windSpeedLabel = document.querySelector('#windSpeedLabel');
const humidityLabel = document.querySelector('#humidityLabel');
const UVIndexLabel = document.querySelector('#UVIndexLabel');

export function DisplayWeatherInfo() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            displayWeatherInfo();
        }
    });

    async function displayWeatherInfo() {
        try {
            const weatherData = await getWeatherData();
            weatherInfo.style.visibility = "visible";
            temperature.textContent = weatherData.temperature;
            condition.textContent = weatherData.condition;

            cloudCoverLabel.textContent = "Cloud Cover:"
            cloudCover.textContent = weatherData.cloudCover;
            
            windSpeedLabel.textContent = "Wind:"
            windSpeed.textContent = weatherData.windSpeed;
            
            humidityLabel.textContent = "Humidity:";
            humidity.textContent = weatherData.humidity;

            UVIndexLabel.textContent = "UV Index:";
            UVIndex.textContent = weatherData.UVIndex;

            const weatherIconModule = await import(`../assets/${weatherData.icon}.svg`);
            weatherIcon.src = weatherIconModule.default;
        } catch {
            alert('No such location. Please enter a valid location name.');
        }  

        location.value = "";
    }
}
