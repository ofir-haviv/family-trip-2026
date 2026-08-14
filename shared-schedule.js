import {
  SCHEDULE_DATES,
  isAuthorizedUser,
  observeAuth,
  removeScheduleAssignment,
  saveScheduleAssignment,
  signInEditor,
  signOutEditor,
  subscribeToSchedule,
} from "./firebase-client.js";

const FIXED_TRANSFER_DAY = {
  date: "2026-09-25",
  shortLabel: "ו׳ · 25.9",
  regionLabel: "יום מעבר",
  suggestionId: "rhine-falls-transfer",
};

let currentUser = null;
let currentAssignments = new Map();
let scheduleLoaded = false;
let selectedSuggestion = null;
let selectedDate = null;
let previousSuggestionDate = null;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isSuggestionsPage() {
  return Boolean(document.querySelector("#suggestions-grid"));
}

function setScheduleStatus(message, state = "ready") {
  document.querySelectorAll("[data-schedule-status]").forEach((element) => {
    element.textContent = message;
    element.dataset.state = state;
  });
}

function showScheduleToast(message, state = "success") {
  const toast = document.querySelector("#schedule-toast");
  if (!toast) return;

  toast.textContent = message;
  toast.dataset.state = state;
  toast.classList.add("visible");
  window.clearTimeout(showScheduleToast.timeoutId);
  showScheduleToast.timeoutId = window.setTimeout(() => toast.classList.remove("visible"), 3000);
}

function updateAuthUI(user) {
  currentUser = user;
  const authorized = isAuthorizedUser(user);
  const button = document.querySelector("#auth-button");
  if (!button) return;

  button.classList.toggle("authorized", authorized);
  button.classList.toggle("unauthorized", Boolean(user) && !authorized);
  button.setAttribute("aria-label", user ? "יציאה מחשבון העריכה" : "כניסה לעריכת הלו״ז עם Google");

  const icon = user ? escapeHtml(user.email.slice(0, 1).toUpperCase()) : "G";
  const label = !user ? "כניסה לעריכה" : authorized ? "מצב עריכה" : "אין הרשאה";
  button.innerHTML = `<span class="auth-symbol" aria-hidden="true">${icon}</span><span>${label}</span>`;

  document.querySelectorAll(".editor-only").forEach((element) => {
    element.hidden = !authorized;
  });

  const editorBanner = document.querySelector("#editor-banner");
  if (editorBanner) {
    editorBanner.hidden = !authorized;
    if (authorized) {
      editorBanner.querySelector("strong").textContent = user.email;
    }
  }

  if (isSuggestionsPage()) renderSharedSchedule();
}

async function handleAuthButton() {
  try {
    if (currentUser) {
      await signOutEditor();
      showScheduleToast("יצאת ממצב העריכה");
      return;
    }

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    if (isStandalone) {
      showScheduleToast("כדי להיכנס לעריכה, פתחו את האתר בדפדפן הרגיל", "error");
      return;
    }

    const result = await signInEditor();
    if (!isAuthorizedUser(result.user)) {
      showScheduleToast("החשבון הזה אינו מורשה לערוך את הלו״ז", "error");
    } else {
      showScheduleToast("מצב העריכה פעיל");
    }
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") return;
    console.error("Google sign-in failed", error);
    showScheduleToast("הכניסה עם Google נכשלה", "error");
  }
}

function getFallbackAssignments() {
  const assignments = new Map();
  const suggestions = window.tripSuggestions?.activitySuggestions || [];
  const recommended = window.tripSuggestions?.recommendedSchedule || [];

  recommended.forEach((day) => {
    if (!day.isoDate || day.isoDate === FIXED_TRANSFER_DAY.date) return;
    const suggestion = suggestions.find((item) => item.id === day.suggestionId);
    if (!suggestion) return;

    assignments.set(day.isoDate, {
      date: day.isoDate,
      suggestionId: suggestion.id,
      title: suggestion.title,
      summary: suggestion.summary,
      region: suggestion.region,
      tags: [suggestion.duration, suggestion.weather],
      mapUrl:
        suggestion.stops.flatMap((stop) => stop.links).find((link) => link.label.includes("מפה"))?.url ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(suggestion.title)}`,
    });
  });

  return assignments;
}

function getDisplayAssignments() {
  return scheduleLoaded ? currentAssignments : getFallbackAssignments();
}

function updateSuggestionScheduleMarkers() {
  if (!isSuggestionsPage()) return;

  const scheduledDates = new Map();
  getDisplayAssignments().forEach((assignment, date) => {
    const dates = scheduledDates.get(assignment.suggestionId) || [];
    dates.push(SCHEDULE_DATES.find((item) => item.date === date)?.shortLabel || date);
    scheduledDates.set(assignment.suggestionId, dates);
  });
  scheduledDates.set(FIXED_TRANSFER_DAY.suggestionId, [FIXED_TRANSFER_DAY.shortLabel]);

  document.querySelectorAll(".suggestion-card").forEach((card) => {
    const marker = card.querySelector("[data-scheduled-marker]");
    const dates = scheduledDates.get(card.id) || [];
    if (!marker) return;

    card.classList.toggle("is-scheduled", dates.length > 0);
    marker.hidden = dates.length === 0;
    marker.querySelector("span").textContent =
      dates.length === 1 ? `משובץ · ${dates[0]}` : `משובץ · ${dates.join(", ")}`;
  });
}

function renderSharedSchedule() {
  const container = document.querySelector("#schedule-list");
  if (!container || !window.tripSuggestions) return;

  const authorized = isAuthorizedUser(currentUser);
  const assignments = getDisplayAssignments();
  const scheduleItems = [
    ...SCHEDULE_DATES.slice(0, 5),
    FIXED_TRANSFER_DAY,
    ...SCHEDULE_DATES.slice(5),
  ];

  container.innerHTML = scheduleItems
    .map((dateConfig) => {
      const fixed = dateConfig.date === FIXED_TRANSFER_DAY.date;
      const transferSuggestion = fixed
        ? window.tripSuggestions.activitySuggestions.find(
            (suggestion) => suggestion.id === FIXED_TRANSFER_DAY.suggestionId,
          )
        : null;
      const assignment = fixed
        ? {
            ...FIXED_TRANSFER_DAY,
            title: transferSuggestion?.title || "מפלי הריין בדרך לאינטרלקן",
            summary:
              transferSuggestion?.summary ||
              "עצירה של שעה עד שעה וחצי בדרך — לא יום פעילות מלא.",
          }
        : assignments.get(dateConfig.date);

      if (!assignment) {
        return `
          <article class="schedule-day schedule-day-empty">
            <div class="schedule-date">
              <strong>${escapeHtml(dateConfig.shortLabel)}</strong>
              <span class="schedule-region">${escapeHtml(dateConfig.regionLabel)}</span>
            </div>
            <h3>טרם שובצה פעילות</h3>
            <p>היום פתוח לבחירה מתוך הרעיונות שבהמשך העמוד.</p>
            ${authorized ? '<a href="#day-catalog">לבחירת פעילות</a>' : ""}
          </article>
        `;
      }

      return `
        <article class="schedule-day" data-schedule-date="${escapeHtml(dateConfig.date)}">
          <div class="schedule-date">
            <strong>${escapeHtml(dateConfig.shortLabel)}</strong>
            <span class="schedule-region">${escapeHtml(dateConfig.regionLabel)}</span>
          </div>
          <h3>${escapeHtml(assignment.title)}</h3>
          <p>${escapeHtml(assignment.summary)}</p>
          <div class="schedule-card-actions">
            <a href="#${escapeHtml(assignment.suggestionId)}">לפרטי היום</a>
            ${
              authorized && !fixed
                ? `<button type="button" data-remove-schedule="${escapeHtml(dateConfig.date)}">הסרה</button>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");

  updateSuggestionScheduleMarkers();
}

function getEligibleDates(suggestion) {
  return SCHEDULE_DATES.filter((dateConfig) => dateConfig.region === suggestion.region);
}

function openScheduleDialog(suggestionId) {
  if (!isAuthorizedUser(currentUser) || !window.tripSuggestions) return;

  selectedSuggestion = window.tripSuggestions.activitySuggestions.find((item) => item.id === suggestionId);
  if (!selectedSuggestion) return;

  const dialog = document.querySelector("#schedule-dialog");
  const title = dialog.querySelector("#schedule-dialog-activity");
  const options = dialog.querySelector("#schedule-date-options");
  const eligibleDates = getEligibleDates(selectedSuggestion);
  const existingDate = eligibleDates.find(
    (dateConfig) => currentAssignments.get(dateConfig.date)?.suggestionId === selectedSuggestion.id,
  );

  selectedDate = existingDate?.date || eligibleDates[0]?.date || null;
  previousSuggestionDate = existingDate?.date || null;
  title.textContent = selectedSuggestion.title;
  options.innerHTML = eligibleDates
    .map((dateConfig) => {
      const current = currentAssignments.get(dateConfig.date);
      const selected = dateConfig.date === selectedDate;
      return `
        <label class="schedule-date-option">
          <input type="radio" name="schedule-date" value="${dateConfig.date}" ${selected ? "checked" : ""} />
          <span>
            <strong>${escapeHtml(dateConfig.label)}</strong>
            <small>${current ? `כרגע: ${escapeHtml(current.title)}` : "התאריך פנוי"}</small>
          </span>
        </label>
      `;
    })
    .join("");

  updateReplacementMessage();
  dialog.showModal();
}

function updateReplacementMessage() {
  const message = document.querySelector("#schedule-replacement-message");
  const current = selectedDate ? currentAssignments.get(selectedDate) : null;
  if (!message) return;

  message.hidden = !current || current.suggestionId === selectedSuggestion?.id;
  if (!message.hidden) {
    message.textContent = `השיבוץ “${current.title}” יוחלף.`;
  }
}

async function saveSelectedSchedule() {
  if (!selectedDate || !selectedSuggestion || !currentUser) return;
  const saveButton = document.querySelector("#schedule-dialog-save");
  saveButton.disabled = true;
  saveButton.textContent = "שומר…";

  try {
    await saveScheduleAssignment(
      selectedDate,
      selectedSuggestion,
      currentUser,
      previousSuggestionDate,
    );
    document.querySelector("#schedule-dialog").close();
    showScheduleToast("הפעילות שובצה בלו״ז");
  } catch (error) {
    console.error("Schedule update failed", error);
    showScheduleToast(error.message || "שמירת השיבוץ נכשלה", "error");
  } finally {
    saveButton.disabled = false;
    saveButton.textContent = "שמירת השיבוץ";
  }
}

async function removeScheduledDate(date) {
  const assignment = currentAssignments.get(date);
  if (!assignment || !currentUser) return;
  if (!window.confirm(`להסיר את “${assignment.title}” מהלו״ז?`)) return;

  try {
    await removeScheduleAssignment(date, currentUser);
    showScheduleToast("הפעילות הוסרה מהלו״ז");
  } catch (error) {
    console.error("Schedule removal failed", error);
    showScheduleToast(error.message || "הסרת השיבוץ נכשלה", "error");
  }
}

function setupSuggestionsEditor() {
  const grid = document.querySelector("#suggestions-grid");
  const scheduleList = document.querySelector("#schedule-list");
  const dialog = document.querySelector("#schedule-dialog");
  if (!grid || !scheduleList || !dialog) return;

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-schedule-suggestion]");
    if (button) openScheduleDialog(button.dataset.scheduleSuggestion);
  });

  scheduleList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-schedule]");
    if (button) removeScheduledDate(button.dataset.removeSchedule);
  });

  dialog.querySelector("#schedule-dialog-close").addEventListener("click", () => dialog.close());
  dialog.querySelector("#schedule-dialog-cancel").addEventListener("click", () => dialog.close());
  dialog.querySelector("#schedule-dialog-save").addEventListener("click", saveSelectedSchedule);
  dialog.querySelector("#schedule-date-options").addEventListener("change", (event) => {
    if (event.target.name !== "schedule-date") return;
    selectedDate = event.target.value;
    updateReplacementMessage();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function applyScheduleToMainPage(assignments) {
  if (!window.tripApp) return;
  window.tripApp.applySharedSchedule(assignments);
}

function startPageIntegration() {
  if (isSuggestionsPage() && !window.tripSuggestions) {
    window.addEventListener("trip-suggestions-ready", startPageIntegration, { once: true });
    return;
  }

  if (!isSuggestionsPage() && !window.tripApp) {
    window.addEventListener("trip-app-ready", startPageIntegration, { once: true });
    return;
  }

  document.querySelector("#auth-button")?.addEventListener("click", handleAuthButton);
  if (isSuggestionsPage()) {
    setupSuggestionsEditor();
    renderSharedSchedule();
  }

  observeAuth(updateAuthUI);
  setScheduleStatus("מתחבר ללו״ז המשותף…", "loading");

  subscribeToSchedule(
    (assignments) => {
      currentAssignments = assignments;
      scheduleLoaded = true;
      setScheduleStatus("הלו״ז המשותף מתעדכן בזמן אמת", "live");
      if (isSuggestionsPage()) renderSharedSchedule();
      else applyScheduleToMainPage(assignments);
    },
    (error) => {
      console.error("Shared schedule listener failed", error);
      setScheduleStatus("מציגים את הגרסה השמורה באתר", "offline");
      showScheduleToast("לא ניתן להתחבר כרגע ללו״ז המשותף", "error");
    },
  );
}

startPageIntegration();
