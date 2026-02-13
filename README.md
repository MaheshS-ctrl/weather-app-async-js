# 🌦 Weather App (Async JavaScript)

A simple weather application built to practice asynchronous JavaScript concepts including Promises, async/await, and API error handling.

---

## 🚀 Features

- Fetch real-time weather data using OpenWeatherMap API
- Async/await based request handling
- Granular HTTP error handling (401, 404, server errors)
- Network error detection
- UI state management (idle / loading / success / error)
- ESLint + Prettier integration for code quality

---

## 🛠 Tech Stack

- Vanilla JavaScript (ES Modules)
- Fetch API
- OpenWeatherMap API
- ESLint
- Prettier

---

## 📂 Project Structure
src/
app.js
config.js
index.html
styles.css


---

## 🔧 Setup

1. Clone the repository

2. Install dependencies:

```bash
npm install

3. Create a config.js file inside src/:

export const API_KEY = 'your_api_key_here';

4. Run the project by opening index.html in browser.

🧪 Scripts
npm run lint     # Check lint errors
npm run format   # Auto-format code
npm run check    # Run lint + prettier check
