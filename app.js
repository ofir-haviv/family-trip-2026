"use strict";

const tripData = {
  startDate: "2026-09-19T00:00:00+03:00",
  endDate: "2026-09-29T23:59:59+03:00",
  itinerary: [
    {
      date: "2026-09-19",
      region: "travel",
      title: "טיסה, איסוף רכב והגעה",
      description: "יום הגעה רגוע. נאסוף את הרכב, נצטייד במצרכים ונגיע למקום הלינה ביער השחור.",
      tags: ["טיסה", "רכב שכור", "צ׳ק-אין"],
      mapQuery: "Black Forest Germany",
    },
    {
      date: "2026-09-20",
      region: "black-forest",
      title: "טריברג ומפלי המים",
      description: "טיול במפלי טריברג, מרכז העיירה ושעוני הקוקייה. מסלול שאפשר להתאים לקצב המשפחתי.",
      tags: ["טבע", "מפלים", "עיירה"],
      mapQuery: "Triberg Waterfalls",
    },
    {
      date: "2026-09-21",
      region: "black-forest",
      title: "יום בפארק אירופה",
      description: "יום מלא בפארק. מומלץ להזמין כרטיסים מראש, להגיע בפתיחה ולבחור מתקנים לפי גיל וגובה.",
      tags: ["פארק שעשועים", "יום מלא", "דורש הזמנה"],
      mapQuery: "Europa-Park Rust Germany",
    },
    {
      date: "2026-09-22",
      region: "black-forest",
      title: "אגם טיטיזי והר פלדברג",
      description: "בוקר סביב אגם טיטיזי ובהמשך תצפית או רכבל בפלדברג, בהתאם למזג האוויר ולשעות הפעילות.",
      tags: ["אגם", "רכבל", "תצפית"],
      mapQuery: "Titisee Feldberg Germany",
    },
    {
      date: "2026-09-23",
      region: "black-forest",
      title: "פרייבורג והסביבה",
      description: "סיור בעיר העתיקה, הקתדרלה והתעלות הקטנות. אפשר לשלב מסלול טבע קצר באזור רוונשלוכט.",
      tags: ["עיר עתיקה", "אוכל", "מסלול קצר"],
      mapQuery: "Freiburg im Breisgau",
    },
    {
      date: "2026-09-24",
      region: "travel",
      title: "עוברים לשווייץ דרך מפלי הריין",
      description: "צ׳ק-אאוט ונסיעה לשווייץ. בדרך נעצור במפלי הריין, ולאחר מכן נמשיך למקום הלינה.",
      tags: ["מעבר מדינה", "מפלים", "צ׳ק-אין"],
      mapQuery: "Rhine Falls Switzerland",
    },
    {
      date: "2026-09-25",
      region: "switzerland",
      title: "לוצרן והר פילאטוס או ריגי",
      description: "טיול בעיר העתיקה ובאגם. אם הראות טובה, נעלה לאחד ההרים ברכבל או ברכבת ההרים.",
      tags: ["אגם", "עיר", "פסגה"],
      mapQuery: "Lucerne Switzerland",
    },
    {
      date: "2026-09-26",
      region: "switzerland",
      title: "עמק לאוטרברונן",
      description: "יום בעמק המפלים: לאוטרברונן, שטאובאך והכפרים בסביבה. נבדוק מראש אילו אתרים פתוחים.",
      tags: ["עמק", "מפלים", "כפרים"],
      mapQuery: "Lauterbrunnen Switzerland",
    },
    {
      date: "2026-09-27",
      region: "switzerland",
      title: "גרינדלוולד והאלפים",
      description: "יום הרים שייבחר לפי התחזית: גרינדלוולד–פירסט, מנליכן או יונגפראויוך.",
      tags: ["רכבל", "אלפים", "לפי מזג האוויר"],
      mapQuery: "Grindelwald Switzerland",
    },
    {
      date: "2026-09-28",
      region: "switzerland",
      title: "יום גמיש: ברן או ציריך",
      description: "יום רגוע וגמיש לקניות, עיר עתיקה והשלמות. הבחירה הסופית תהיה לפי מקום הלינה ושעת הטיסה.",
      tags: ["יום גמיש", "עיר", "קניות"],
      mapQuery: "Bern Switzerland",
    },
    {
      date: "2026-09-29",
      region: "travel",
      title: "צ׳ק-אאוט וטיסה הביתה",
      description: "ארוחת בוקר, החזרת הרכב והגעה מוקדמת לשדה התעופה. פרטי השעות יעודכנו לאחר הזמנת הטיסה.",
      tags: ["צ׳ק-אאוט", "החזרת רכב", "טיסה"],
      mapQuery: "Zurich Airport",
    },
  ],
  bookings: [
    {
      type: "טיסת הלוך",
      title: "ישראל ← אירופה",
      status: "ממתין לעדכון",
      details: [
        ["תאריך", "19.9.2026"],
        ["חברת תעופה", "טרם עודכן"],
        ["שעת המראה", "טרם עודכנה"],
        ["שעת נחיתה", "טרם עודכנה"],
      ],
    },
    {
      type: "טיסת חזור",
      title: "אירופה ← ישראל",
      status: "ממתין לעדכון",
      details: [
        ["תאריך", "29.9.2026"],
        ["חברת תעופה", "טרם עודכן"],
        ["שעת המראה", "טרם עודכנה"],
        ["שעת נחיתה", "טרם עודכנה"],
      ],
    },
    {
      type: "לינה",
      title: "היער השחור",
      status: "ממתין להזמנה",
      details: [
        ["לילות", "19–24.9"],
        ["מקום", "טרם עודכן"],
        ["כתובת", "טרם עודכנה"],
        ["צ׳ק-אין", "טרם עודכן"],
      ],
    },
    {
      type: "לינה",
      title: "שווייץ",
      status: "ממתין להזמנה",
      details: [
        ["לילות", "24–29.9"],
        ["מקום", "טרם עודכן"],
        ["כתובת", "טרם עודכנה"],
        ["צ׳ק-אין", "טרם עודכן"],
      ],
    },
    {
      type: "תחבורה",
      title: "רכב שכור",
      status: "ממתין להזמנה",
      details: [
        ["איסוף", "19.9 · טרם עודכן"],
        ["החזרה", "29.9 · טרם עודכן"],
        ["חברה", "טרם עודכנה"],
        ["וינייטה", "יש לוודא"],
      ],
    },
    {
      type: "כרטיסים",
      title: "אטרקציות",
      status: "בתכנון",
      details: [
        ["פארק אירופה", "טרם הוזמן"],
        ["רכבלים", "לפי תחזית"],
        ["מפלי טריברג", "לבדוק שעות"],
        ["מפלי הריין", "לבדוק חניה"],
      ],
    },
  ],
  packing: [
    {
      title: "מסמכים וכסף",
      items: ["דרכונים בתוקף", "ביטוח נסיעות", "רישיון נהיגה", "רישיון נהיגה בינלאומי", "כרטיסי אשראי", "מעט אירו ופרנקים"],
    },
    {
      title: "ביגוד",
      items: ["מעיל גשם", "פליז או סוודר", "נעלי הליכה", "בגדים בשכבות", "כובע ומשקפי שמש", "בגדים להחלפה"],
    },
    {
      title: "ציוד שימושי",
      items: ["מתאם חשמל אירופי", "מטענים וסוללה ניידת", "תיק יום", "בקבוקי מים", "מטרייה קטנה", "תרופות קבועות"],
    },
    {
      title: "לילדים ולדרך",
      items: ["חטיפים לנסיעות", "משחקים ואוזניות", "כרית נסיעה", "בגדים זמינים בתיק יד", "מגבונים", "ערכת עזרה ראשונה"],
    },
  ],
};

const hebrewDate = new Intl.DateTimeFormat("he-IL", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

function parseLocalDate(dateString) {
  return new Date(`${dateString}T12:00:00`);
}

function renderItinerary() {
  const container = document.querySelector("#itinerary-list");
  if (!container) return;

  container.innerHTML = tripData.itinerary
    .map((day, index) => {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.mapQuery)}`;
      const tags = day.tags.map((tag) => `<span class="activity-tag">${tag}</span>`).join("");

      return `
        <article class="day-card" data-region="${day.region}">
          <span class="day-marker">${index + 1}</span>
          <div class="day-date">
            <strong>${hebrewDate.format(parseLocalDate(day.date))}</strong>
            <span>יום ${index + 1} מתוך ${tripData.itinerary.length}</span>
          </div>
          <div class="day-main">
            <h3>${day.title}</h3>
            <p>${day.description}</p>
            <div class="activity-tags">${tags}</div>
          </div>
          <a class="day-link" href="${mapUrl}" target="_blank" rel="noreferrer" aria-label="פתיחה במפה: ${day.title}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 5h5v5M10 14 19 5M19 14v5H5V5h5" />
            </svg>
          </a>
        </article>
      `;
    })
    .join("");
}

function renderBookings() {
  const container = document.querySelector("#bookings-list");
  if (!container) return;

  container.innerHTML = tripData.bookings
    .map(
      (booking) => `
        <article class="booking-card">
          <div class="booking-top">
            <div>
              <span class="booking-type">${booking.type}</span>
              <h3>${booking.title}</h3>
            </div>
            <span class="booking-status">${booking.status}</span>
          </div>
          <div class="booking-details">
            ${booking.details
              .map(
                ([label, value]) => `
                  <div class="booking-detail">
                    <span>${label}</span>
                    <strong>${value}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderPacking() {
  const container = document.querySelector("#packing-lists");
  if (!container) return;

  const checkedItems = new Set(JSON.parse(localStorage.getItem("family-trip-packing") || "[]"));
  let itemIndex = 0;

  container.innerHTML = tripData.packing
    .map((group) => {
      const items = group.items
        .map((item) => {
          const id = `packing-${itemIndex}`;
          const itemKey = `${group.title}:${item}`;
          itemIndex += 1;
          return `
            <label class="check-item" for="${id}">
              <input id="${id}" type="checkbox" value="${itemKey}" ${checkedItems.has(itemKey) ? "checked" : ""} />
              <span class="custom-check" aria-hidden="true"></span>
              <span class="check-label">${item}</span>
            </label>
          `;
        })
        .join("");

      return `
        <section class="packing-group">
          <h3>${group.title}</h3>
          ${items}
        </section>
      `;
    })
    .join("");

  container.addEventListener("change", savePackingState);
  updatePackingProgress();
}

function savePackingState() {
  const checked = [...document.querySelectorAll('#packing-lists input[type="checkbox"]:checked')].map(
    (input) => input.value,
  );
  localStorage.setItem("family-trip-packing", JSON.stringify(checked));
  updatePackingProgress();
}

function updatePackingProgress() {
  const checkboxes = [...document.querySelectorAll('#packing-lists input[type="checkbox"]')];
  const checkedCount = checkboxes.filter((input) => input.checked).length;
  const percent = checkboxes.length ? (checkedCount / checkboxes.length) * 100 : 0;

  document.querySelector("#packing-count").textContent = `${checkedCount} מתוך ${checkboxes.length}`;
  document.querySelector("#packing-progress-bar").style.width = `${percent}%`;
}

function updateCountdown() {
  const now = new Date();
  const start = new Date(tripData.startDate);
  const end = new Date(tripData.endDate);
  const label = document.querySelector("#countdown-label");
  const number = document.querySelector("#countdown-number");
  const unit = document.querySelector("#countdown-unit");

  if (now < start) {
    const days = Math.ceil((start - now) / 86_400_000);
    number.textContent = days.toLocaleString("he-IL");
    return;
  }

  if (now <= end) {
    const currentDay = Math.min(
      tripData.itinerary.length,
      Math.floor((now - start) / 86_400_000) + 1,
    );
    label.textContent = "אנחנו ביום";
    number.textContent = currentDay;
    unit.textContent = `מתוך ${tripData.itinerary.length}`;
    return;
  }

  label.textContent = "איזה טיול";
  number.textContent = "♥";
  unit.textContent = "נשארו הזיכרונות";
}

function setupFilters() {
  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");

      document.querySelectorAll(".day-card").forEach((card) => {
        card.hidden = button.dataset.filter !== "all" && card.dataset.region !== button.dataset.filter;
      });
    });
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem("family-trip-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.dataset.theme = "dark";
  }

  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    localStorage.setItem("family-trip-theme", isDark ? "light" : "dark");
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

async function shareTrip() {
  const shareData = {
    title: "הטיול המשפחתי 2026",
    text: "כל הפרטים על הטיול שלנו ליער השחור ולשווייץ, 19–29.9.2026",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("הקישור הועתק");
  } catch {
    showToast("אפשר להעתיק את הקישור משורת הכתובת");
  }
}

function formatIcsDate(date, endOfDay = false) {
  const suffix = endOfDay ? "T180000" : "T080000";
  return `${date.replaceAll("-", "")}${suffix}`;
}

function escapeIcs(value) {
  return value.replaceAll("\\", "\\\\").replaceAll(",", "\\,").replaceAll(";", "\\;").replaceAll("\n", "\\n");
}

function downloadCalendar() {
  const events = tripData.itinerary
    .map(
      (day) => [
        "BEGIN:VEVENT",
        `UID:${day.date}-${day.region}@family-trip-2026`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
        `DTSTART:${formatIcsDate(day.date)}`,
        `DTEND:${formatIcsDate(day.date, true)}`,
        `SUMMARY:${escapeIcs(day.title)}`,
        `DESCRIPTION:${escapeIcs(day.description)}`,
        `LOCATION:${escapeIcs(day.mapQuery)}`,
        "END:VEVENT",
      ].join("\r\n"),
    )
    .join("\r\n");

  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Family Trip 2026//HE",
    "CALSCALE:GREGORIAN",
    events,
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([calendar], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "family-trip-2026.ics";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("קובץ היומן הורד");
}

function setLastUpdated() {
  const value = new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(document.lastModified));
  document.querySelector("#last-updated").textContent = value;
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && window.location.protocol === "https:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Offline support is optional; normal browsing still works if registration is unavailable.
    });
  }
}

function init() {
  renderItinerary();
  renderBookings();
  renderPacking();
  updateCountdown();
  setupFilters();
  setupTheme();
  setLastUpdated();
  registerServiceWorker();

  document.querySelector("#share-button").addEventListener("click", shareTrip);
  document.querySelector("#calendar-button").addEventListener("click", downloadCalendar);
}

init();
