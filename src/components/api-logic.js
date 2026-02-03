const apiKey = "3LMP8DFDEB9TKDYFNGJA4JK86";

async function getWeather() {
  const location = document.querySelector("input").value;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
  );
  const weatherData = await response.json();
  return weatherData;
}

export async function getWeatherData() {
  const weatherData = {
    temperature: await geTemperature(),
    condition: await getWeatherConditions(),
    cloudCover: await getCloudCover(),
    windSpeed: await getWindSpeed(),
    UVIndex: await getUVIndex(),
    humidity: await getHumidity(),
    icon: await getWeatherIcon(),
  };

  return weatherData;
}

async function geTemperature(weatherData) {
  weatherData = await getWeather();
  const temperatureInFahrenheit = await weatherData.currentConditions.temp;
  const temperatureInCelsius = `${Math.round(((temperatureInFahrenheit - 32) * 5) / 9)}°C`;
  return temperatureInCelsius;
}

async function getWeatherConditions(weatherData) {
  weatherData = await getWeather();
  const weatherCondition = weatherData.currentConditions.conditions;
  return weatherCondition;
}

async function getCloudCover(weatherData) {
  weatherData = await getWeather();
  const cloudCover = `${weatherData.currentConditions.cloudcover}%`;
  return cloudCover;
}

async function getWindSpeed(weatherData) {
  weatherData = await getWeather();
  const windSpeed = `${weatherData.currentConditions.windspeed} km/h`;
  return windSpeed;
}

async function getUVIndex(weatherData) {
  weatherData = await getWeather();
  const UvIndex = weatherData.currentConditions.uvindex;
  return UvIndex;
}

async function getHumidity(weatherData) {
  weatherData = await getWeather();
  const humidity = `${weatherData.currentConditions.humidity}%`;
  return humidity;
}

async function getWeatherIcon(weatherData) {
  weatherData = await getWeather();
  const weatherIcon = weatherData.currentConditions.icon;
  return weatherIcon;
}
