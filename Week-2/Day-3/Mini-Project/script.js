document.getElementById("fetchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.textContent = "Please enter a city name.";
    return;
  }

  try {
    result.textContent = "Finding location...";

    // Step 1: Get coordinates from city name
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    const geoRes = await fetch(geoURL);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      result.textContent = "City not found.";
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // Step 2: Fetch weather
    result.textContent = "Fetching weather...";

    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;

    result.textContent = `Weather in ${name}: ${temp}°C, Wind: ${wind} km/h`;

  } catch (error) {
    result.textContent = "Something went wrong. Try again.";
  }
}
