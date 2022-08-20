import { getAstro, getForecast } from "../helpers/weather";

let hour = parseInt(new Date().getHours());

export async function createWidget(location, init) {
  console.log(hour)
  if (init) {
    document.querySelector('.right-arrow').addEventListener('click', () => {
      if (hour < 24) {
        hour++;
        createWidget(location, false);
      }
    })
  }
  if (init) {
    document.querySelector('.left-arrow').addEventListener('click', () => {
      if (hour > 0) {
        hour--;
        createWidget(location, false);
      }
    })
  }

  let forecast = await getForecast(location)
  let astro = await getAstro(location)
  let createButton = document.querySelector('.widget-header-button');
  createButton.addEventListener('click', () => {
    hour = parseInt(new Date().getHours());
    createWidget(document.querySelector('.location').value, false);
  })
  document.querySelector('.temp').innerHTML = '';
  document.querySelector('.sunrise').innerHTML = '';
  document.querySelector('.icon-img').innerHTML = '';
  document.querySelector('.sunrise').innerHTML = '';
  document.querySelector('.chance-of-rain').innerHTML = '';
  document.querySelector('.icon-img').setAttribute('src', forecast[hour]['condition']['icon'])
  document.querySelector('.temp').append(forecast[hour]['temp_c'] + '°C')
  document.querySelector('.sunrise').append('Day lasts ' + astro['sunrise'] + ' to ' + astro['sunset'])
  document.querySelector('.chance-of-rain').append('Rain: ' + forecast[hour]['chance_of_rain'] + '%')
}