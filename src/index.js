import "./styles.css";

const weatherInfo = document.querySelector('.weather-info');
const searchBtn = document.querySelector('button');
const apiKey = "3LMP8DFDEB9TKDYFNGJA4JK86";

async function getWeather() {
    const location = document.querySelector('.input').value;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
    return response;
}

searchBtn.addEventListener('click', async () => {
    const weatherData = {
        temperature: await getWeatherTemperature(),
        conditions: await getWeatherConditions(),
        cloudcover: await getWeatherCloudcover(),
        windSpeed: await getWeatherWindSpeed(),
        UVIndex: await getWeatherUVIndex(),
        humidity: await getWeatherHumidity()
    }
    
    console.log(weatherData);
    
});

async function getWeatherTemperature(response) {
    response = await getWeather();
    const weatherData = await response.json();
    const temperatureInFahrenheit = weatherData.currentConditions.temp;
    const temperatureInCelsius = `${Math.round((temperatureInFahrenheit - 32) * 5/9)}°`;
    return temperatureInCelsius;
}

async function getWeatherConditions(response) {
    response = await getWeather();
    const weatherData = await response.json();
    const weatherCondition = weatherData.currentConditions.conditions
    return weatherCondition;   
}

async function getWeatherCloudcover(response) {
    response = await getWeather();
    const weatherData = await response.json();
    const cloudCover = `${weatherData.currentConditions.cloudcover}%`;
    return cloudCover;
}

async function getWeatherWindSpeed(response) {
    response = await getWeather();
    const weatherData = await response.json();
    const windSpeed = `${weatherData.currentConditions.windspeed} km/h`;
    return windSpeed;
}

async function getWeatherUVIndex(response) {
    response = await getWeather();
    const weatherData = await response.json();
    const UvIndex = weatherData.currentConditions.uvindex;
    return UvIndex;
}

async function getWeatherHumidity(response) {
    response = await getWeather();
    const weatherData = await response.json();
    const humidity = `${weatherData.currentConditions.humidity}%`
    return humidity;
}

