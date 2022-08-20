async function getWeather(city) {
  let message = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${city}`, {mode: 'cors'});
  let forecast = await message.json()
  return forecast;
}

export async function getForecast(city) {
  let weather = await getWeather(city);
  let hours =  weather.forecast.forecastday[0].hour
  return hours;
}

export async function getAstro(city) {
  let weather = await getWeather(city);
  let astro =  weather.forecast.forecastday[0].astro
  return astro;
}
