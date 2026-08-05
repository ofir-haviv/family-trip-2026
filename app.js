"use strict";

const tripData = {
  startDate: "2026-09-19T00:00:00+03:00",
  endDate: "2026-09-30T00:45:00+03:00",
  itinerary: [
    {
      date: "2026-09-19",
      region: "travel",
      title: "טיסה למינכן, רכב וצ׳ק-אין",
      description: "טיסת IZ 441 יוצאת ב-08:15 ונוחתת במינכן ב-11:15. איסוף הרכב רשום ל-11:00 ויש לתאם זאת עם Europcar. צ׳ק-אין ב-Tiny House החל מ-15:00.",
      tags: ["IZ 441", "Europcar", "צ׳ק-אין מ-15:00"],
      mapQuery: "Welschland 2, 79843 Löffingen, Germany",
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
      region: "black-forest",
      title: "יום גמיש נוסף ביער השחור",
      description: "הלילה האחרון ב-Tiny House. אפשר לבחור טיול קצר באזור לופינגן, שלוכזי או ווטאכשלוכט ולהתארגן למעבר.",
      tags: ["יום גמיש", "טבע", "לילה אחרון"],
      mapQuery: "Löffingen Germany",
    },
    {
      date: "2026-09-25",
      region: "travel",
      title: "עוברים לאינטרלקן דרך מפלי הריין",
      description: "צ׳ק-אאוט עד 10:00 ונסיעה לשווייץ. אפשר לעצור במפלי הריין בדרך; הצ׳ק-אין ב-Mountain Views מתחיל ב-16:00.",
      tags: ["מעבר מדינה", "מפלי הריין", "צ׳ק-אין מ-16:00"],
      mapQuery: "Rhine Falls Switzerland",
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
      title: "יום גמיש: לוצרן או ברן",
      description: "יום רגוע וגמיש לעיר עתיקה, אגם וקניות. הבחירה הסופית תהיה לפי מזג האוויר והקצב המשפחתי.",
      tags: ["יום גמיש", "עיר עתיקה", "אגם"],
      mapQuery: "Bern Switzerland",
    },
    {
      date: "2026-09-29",
      region: "travel",
      title: "צ׳ק-אאוט וטיסה הביתה",
      description: "צ׳ק-אאוט עד 10:00, החזרת Europcar בבאזל ב-18:00 וטיסת IZ 526 ב-19:50. הנחיתה בתל אביב ב-00:45 ביום רביעי, 30.9.",
      tags: ["החזרה ב-18:00", "IZ 526", "נחיתה ב-30.9"],
      mapQuery: "EuroAirport Basel Mulhouse Freiburg",
    },
  ],
  bookings: [
    {
      type: "טיסת הלוך",
      title: "תל אביב → מינכן (TLV–MUC)",
      status: "מאושר",
      details: [
        ["טיסה", "IZ 441 · ארקיע"],
        ["תאריך", "שבת, 19.9.2026"],
        ["המראה", "08:15 · טרמינל 1"],
        ["נחיתה", "11:15 · טרמינל 1"],
        ["משך", "4 שעות"],
        ["מפעיל בפועל", "FlyLili"],
        ["נוסעים", "5"],
        ["כבודה", "2 מזוודות שנרכשו"],
      ],
    },
    {
      type: "טיסת חזור",
      title: "באזל → תל אביב (BSL–TLV)",
      status: "מאושר",
      details: [
        ["טיסה", "IZ 526 · ארקיע"],
        ["תאריך", "שלישי, 29.9.2026"],
        ["המראה", "19:50"],
        ["נחיתה", "00:45 ב-30.9 · טרמינל 3"],
        ["משך", "3 שעות ו-55 דקות"],
        ["מפעיל בפועל", "KR, לפי האישור"],
        ["נוסעים", "5"],
        ["כבודה", "2 מזוודות שנרכשו"],
      ],
    },
    {
      type: "לינה",
      title: "Schwarzwald Tiny House Village",
      status: "מאושר",
      details: [
        ["שהייה", "19–25.9 · 6 לילות"],
        ["כתובת", "Welschland 2, 79843 Löffingen"],
        ["צ׳ק-אין", "15:00–24:00"],
        ["צ׳ק-אאוט", "06:00–10:00"],
        ["אירוח", "2 בתים · 10 אורחים"],
        ["ארוחות", "לא כלולות"],
        ["ביטול חינם", "עד 19.8 ב-23:59"],
        ["פרטי הזמנה", "ב-Booking.com"],
      ],
    },
    {
      type: "לינה",
      title: "Mountain Views · אינטרלקן",
      status: "מאושר",
      details: [
        ["שהייה", "25–29.9 · 4 לילות"],
        ["כתובת", "Rütistrasse 29, 3800 Interlaken"],
        ["צ׳ק-אין", "מ-16:00"],
        ["צ׳ק-אאוט", "עד 10:00"],
        ["אירוח", "דירה עם מרפסת · 10 אורחים"],
        ["ארוחות", "לא כלולות"],
        ["ביטול חינם", "עד 25.8 ב-23:59"],
        ["פרטי כניסה", "ב-Booking.com"],
      ],
    },
    {
      type: "תחבורה",
      title: "Europcar · מינכן → באזל",
      status: "מאושר",
      details: [
        ["איסוף", "19.9 · 11:00 · שדה MUC"],
        ["החזרה", "29.9 · 18:00 · באזל"],
        ["קטגוריה", "Intermediate (IFAR)"],
        ["רכב", "אוטומטי · מיזוג · 5 דלתות"],
        ["קיבולת", "5 נוסעים"],
        ["תוספת", "בוסטר אחד"],
        ["קילומטראז׳", "3,300 ק״מ"],
        ["דלק", "מלא למלא"],
        ["פיקדון", "€300 בכרטיס אשראי פיזי"],
        ["תשלום באיסוף", "€390.67"],
        ["מעבר לשווייץ", "מותר; נדרשת הודעה מראש"],
        ["מסמכים", "מקוריים ושובר מודפס"],
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
      items: ["דרכונים בתוקף", "ביטוח נסיעות", "רישיון נהיגה", "רישיון נהיגה בינלאומי", "שובר השכרת רכב מודפס", "הוכחת כתובת עדכנית לנהג", "כרטיס אשראי פיזי על שם הנהג", "מעט אירו ופרנקים"],
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
            <span class="booking-status ${booking.status === "מאושר" ? "confirmed" : ""}">${booking.status}</span>
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
