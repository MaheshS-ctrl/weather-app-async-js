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
searchBtn.addEventListener('click', () => {
  setState(UI_STATE.LOADING);

  setTimeout(() => {
    const random = Math.random();

    if (random > 0.5) {
      setState(UI_STATE.SUCCESS, '<p>25°C, Clear Sky</p>');
    } else {
      setState(UI_STATE.ERROR, 'City not found');
    }
  }, 1500);
});
