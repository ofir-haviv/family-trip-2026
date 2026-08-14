"use strict";

const WEATHER_LOCATIONS = [
  {
    id: "black-forest",
    name: "לופינגן · היער השחור",
    stay: "ליד Schwarzwald Tiny House Village",
    latitude: 47.884,
    longitude: 8.343,
  },
  {
    id: "interlaken",
    name: "אינטרלקן · שווייץ",
    stay: "ליד Mountain Views",
    latitude: 46.686,
    longitude: 7.863,
  },
];

const WEATHER_CODES = {
  0: ["בהיר", "☀️"],
  1: ["בהיר ברובו", "🌤️"],
  2: ["מעונן חלקית", "⛅"],
  3: ["מעונן", "☁️"],
  45: ["ערפל", "🌫️"],
  48: ["ערפל קפוא", "🌫️"],
  51: ["טפטוף קל", "🌦️"],
  53: ["טפטוף", "🌦️"],
  55: ["טפטוף חזק", "🌧️"],
  56: ["טפטוף קפוא", "🌧️"],
  57: ["טפטוף קפוא חזק", "🌧️"],
  61: ["גשם קל", "🌦️"],
  63: ["גשם", "🌧️"],
  65: ["גשם חזק", "🌧️"],
  66: ["גשם קפוא", "🌧️"],
  67: ["גשם קפוא חזק", "🌧️"],
  71: ["שלג קל", "🌨️"],
  73: ["שלג", "🌨️"],
  75: ["שלג כבד", "❄️"],
  77: ["גרגרי שלג", "🌨️"],
  80: ["ממטרים קלים", "🌦️"],
  81: ["ממטרים", "🌧️"],
  82: ["ממטרים חזקים", "⛈️"],
  85: ["ממטרי שלג", "🌨️"],
  86: ["ממטרי שלג חזקים", "❄️"],
  95: ["סופת רעמים", "⛈️"],
  96: ["סופה וברד", "⛈️"],
  99: ["סופה וברד כבד", "⛈️"],
};

const dayFormatter = new Intl.DateTimeFormat("he-IL", {
  weekday: "short",
});
const dateFormatter = new Intl.DateTimeFormat("he-IL", {
  day: "numeric",
  month: "numeric",
});
const updateFormatter = new Intl.DateTimeFormat("he-IL", {
  hour: "2-digit",
  minute: "2-digit",
});

function getWeatherInfo(code) {
  return WEATHER_CODES[code] || ["מזג אוויר משתנה", "🌡️"];
}

function getForecastUrl(location) {
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max",
    forecast_days: "7",
    timezone: "auto",
  });

  return `https://api.open-meteo.com/v1/forecast?${params}`;
}

function getDailyForecast(data, index) {
  return {
    date: data.daily.time[index],
    code: data.daily.weather_code[index],
    max: Math.round(data.daily.temperature_2m_max[index]),
    min: Math.round(data.daily.temperature_2m_min[index]),
    rainProbability: data.daily.precipitation_probability_max[index] ?? 0,
    rainAmount: data.daily.precipitation_sum[index] ?? 0,
    wind: Math.round(data.daily.wind_speed_10m_max[index] ?? 0),
  };
}

function renderForecastCard(location, data) {
  const days = data.daily.time.map((_, index) => getDailyForecast(data, index));
  const overallMin = Math.min(...days.map((day) => day.min));
  const overallMax = Math.max(...days.map((day) => day.max));
  const wetDays = days.filter((day) => day.rainProbability >= 40).length;

  return `
    <article class="weather-location-card">
      <header class="weather-location-header">
        <div>
          <span>${location.stay}</span>
          <h3>${location.name}</h3>
        </div>
        <div class="weather-range">
          <strong><bdi>${overallMin}°–${overallMax}°</bdi></strong>
          <span>${wetDays ? `${wetDays} ימים עם סיכוי לגשם` : "שבוע יבש ברובו"}</span>
        </div>
      </header>
      <div class="weather-days">
        ${days
          .map((day, index) => {
            const [description, icon] = getWeatherInfo(day.code);
            const date = new Date(`${day.date}T12:00:00`);
            return `
              <article class="weather-day ${index === 0 ? "weather-day-today" : ""}">
                <div class="weather-day-date">
                  <strong>${index === 0 ? "היום" : dayFormatter.format(date)}</strong>
                  <span>${dateFormatter.format(date)}</span>
                </div>
                <span class="weather-day-icon" role="img" aria-label="${description}">${icon}</span>
                <span class="weather-day-description">${description}</span>
                <div class="weather-temperatures">
                  <strong><bdi>${day.max}°</bdi></strong>
                  <span><bdi>${day.min}°</bdi></span>
                </div>
                <div class="weather-rain" title="${day.rainAmount} מ״מ משקעים צפויים">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
                  </svg>
                  <span><bdi>${day.rainProbability}%</bdi></span>
                </div>
                <div class="weather-wind" title="רוח מרבית">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 8h11c2 0 2-3 0-3M3 12h16c3 0 3 4 0 4M3 16h8" />
                  </svg>
                  <span><bdi>${day.wind}</bdi></span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderWeatherError() {
  const container = document.querySelector("#weather-forecast");
  if (!container) return;

  container.innerHTML = `
    <div class="weather-error">
      <strong>לא הצלחנו לטעון את התחזית כרגע</strong>
      <span>אפשר לנסות שוב בעוד כמה דקות.</span>
      <button type="button" id="weather-retry">ניסיון נוסף</button>
    </div>
  `;
  document.querySelector("#weather-retry").addEventListener("click", loadWeatherForecast);
}

async function loadWeatherForecast() {
  const container = document.querySelector("#weather-forecast");
  if (!container) return;

  container.innerHTML = WEATHER_LOCATIONS.map(
    () => `
      <div class="weather-skeleton" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
    `,
  ).join("");

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 10000);

  try {
    const forecasts = await Promise.all(
      WEATHER_LOCATIONS.map(async (location) => {
        const response = await fetch(getForecastUrl(location), {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
        return { location, data: await response.json() };
      }),
    );

    container.innerHTML = forecasts
      .map(({ location, data }) => renderForecastCard(location, data))
      .join("");

    const updated = document.querySelector("#weather-updated");
    if (updated) {
      updated.textContent = `עודכן ב-${updateFormatter.format(new Date())}`;
    }

    const allDays = forecasts.flatMap(({ data }) =>
      data.daily.time.map((_, index) => getDailyForecast(data, index)),
    );
    const min = Math.min(...allDays.map((day) => day.min));
    const max = Math.max(...allDays.map((day) => day.max));
    const summary = document.querySelector("#weather-summary-range");
    if (summary) summary.textContent = `${min}°–${max}°`;
  } catch (error) {
    console.error("Weather forecast failed", error);
    renderWeatherError();
  } finally {
    window.clearTimeout(timeoutId);
  }
}

loadWeatherForecast();
