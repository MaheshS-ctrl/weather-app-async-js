const statusDiv = document.getElementById('status');
const resultDiv = document.getElementById('weatherResult');
const searchBtn = document.getElementById('searchBtn');

const UI_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

let currentState = UI_STATE.IDLE;

function setState(state, message = '') {
  currentState = state;

  statusDiv.className = '';
  resultDiv.innerHTML = '';

  switch (state) {
    case UI_STATE.IDLE:
      statusDiv.textContent = '';
      break;

    case UI_STATE.LOADING:
      statusDiv.textContent = 'Loading...';
      statusDiv.classList.add('loading');
      break;

    case UI_STATE.SUCCESS:
      statusDiv.textContent = 'Success';
      statusDiv.classList.add('success');
      resultDiv.innerHTML = message;
      break;

    case UI_STATE.ERROR:
      statusDiv.textContent = message;
      statusDiv.classList.add('error');
      break;

    default:
      break;
  }
}

// Simulate async behavior
const API_KEY = '3f8c9e8d8ecefc5056cb60dfd59d459c';

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('City not found');
  }

  const data = await response.json();
  return data;
}

searchBtn.addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();

  if (!city) {
    setState(UI_STATE.ERROR, 'Please enter a city name');
    return;
  }

  try {
    setState(UI_STATE.LOADING);

    const weatherData = await fetchWeather(city);

    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    setState(
      UI_STATE.SUCCESS,
      `<p>${temperature}°C - ${description}</p>`
    );
  } catch (error) {
    setState(UI_STATE.ERROR, error.message);
  }
});

