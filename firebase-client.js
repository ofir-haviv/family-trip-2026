import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  runTransaction,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMOc3xy0MSevX4hQ6QigK-ameDLnBW5Pc",
  authDomain: "netashay-bat-mitzvah-2026.firebaseapp.com",
  projectId: "netashay-bat-mitzvah-2026",
  storageBucket: "netashay-bat-mitzvah-2026.firebasestorage.app",
  messagingSenderId: "671443316103",
  appId: "1:671443316103:web:b8bf47952052ced1e47722",
};

export const AUTHORIZED_EMAILS = Object.freeze(["havivi1986@gmail.com"]);

export const SCHEDULE_DATES = Object.freeze([
  { date: "2026-09-20", label: "יום א׳ · 20.9", shortLabel: "א׳ · 20.9", region: "black-forest", regionLabel: "היער השחור" },
  { date: "2026-09-21", label: "יום ב׳ · 21.9", shortLabel: "ב׳ · 21.9", region: "black-forest", regionLabel: "היער השחור" },
  { date: "2026-09-22", label: "יום ג׳ · 22.9", shortLabel: "ג׳ · 22.9", region: "black-forest", regionLabel: "היער השחור" },
  { date: "2026-09-23", label: "יום ד׳ · 23.9", shortLabel: "ד׳ · 23.9", region: "black-forest", regionLabel: "היער השחור" },
  { date: "2026-09-24", label: "יום ה׳ · 24.9", shortLabel: "ה׳ · 24.9", region: "black-forest", regionLabel: "היער השחור" },
  { date: "2026-09-26", label: "שבת · 26.9", shortLabel: "ש׳ · 26.9", region: "switzerland", regionLabel: "שווייץ" },
  { date: "2026-09-27", label: "יום א׳ · 27.9", shortLabel: "א׳ · 27.9", region: "switzerland", regionLabel: "שווייץ" },
  { date: "2026-09-28", label: "יום ב׳ · 28.9", shortLabel: "ב׳ · 28.9", region: "switzerland", regionLabel: "שווייץ" },
]);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export function isAuthorizedUser(user) {
  return Boolean(
    user?.email &&
      user.emailVerified &&
      AUTHORIZED_EMAILS.includes(user.email.toLowerCase()),
  );
}

export function observeAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export function signInEditor() {
  return signInWithPopup(auth, provider);
}

export function signOutEditor() {
  return signOut(auth);
}

export function subscribeToSchedule(onUpdate, onError) {
  return onSnapshot(
    collection(db, "schedule"),
    (snapshot) => {
      const assignments = new Map();
      snapshot.forEach((scheduleDoc) => assignments.set(scheduleDoc.id, scheduleDoc.data()));
      onUpdate(assignments);
    },
    onError,
  );
}

function getSuggestionMapUrl(suggestion) {
  return (
    suggestion.stops
      .flatMap((stop) => stop.links)
      .find((link) => link.label.includes("מפה"))?.url ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(suggestion.title)}`
  );
}

function assignmentFromExisting(date, assignment, user) {
  return {
    date,
    suggestionId: assignment.suggestionId,
    title: assignment.title,
    summary: assignment.summary,
    region: assignment.region,
    tags: assignment.tags,
    mapUrl: assignment.mapUrl,
    updatedBy: user.email,
    updatedAt: serverTimestamp(),
  };
}

export function saveScheduleAssignment(
  date,
  suggestion,
  user,
  previousDate = null,
) {
  if (!isAuthorizedUser(user)) {
    throw new Error("אין הרשאה לעדכן את הלו״ז.");
  }

  const dateConfig = SCHEDULE_DATES.find((item) => item.date === date);
  if (!dateConfig || dateConfig.region !== suggestion.region) {
    throw new Error("אי אפשר לשבץ את הפעילות בתאריך הזה.");
  }

  const targetRef = doc(db, "schedule", date);
  const sourceRef =
    previousDate && previousDate !== date
      ? doc(db, "schedule", previousDate)
      : null;

  return runTransaction(db, async (transaction) => {
    let targetAssignment = null;
    if (sourceRef) {
      const sourceSnapshot = await transaction.get(sourceRef);
      const targetSnapshot = await transaction.get(targetRef);

      if (
        !sourceSnapshot.exists() ||
        sourceSnapshot.data().suggestionId !== suggestion.id
      ) {
        throw new Error("הלו״ז השתנה בינתיים. נסו שוב.");
      }

      targetAssignment = targetSnapshot.exists() ? targetSnapshot.data() : null;
    }

    if (sourceRef) {
      if (targetAssignment) {
        transaction.set(
          sourceRef,
          assignmentFromExisting(previousDate, targetAssignment, user),
        );
      } else {
        transaction.delete(sourceRef);
      }
    }

    transaction.set(targetRef, {
      date,
      suggestionId: suggestion.id,
      title: suggestion.title,
      summary: suggestion.summary,
      region: suggestion.region,
      tags: [suggestion.duration, suggestion.weather],
      mapUrl: getSuggestionMapUrl(suggestion),
      updatedBy: user.email,
      updatedAt: serverTimestamp(),
    });
  });
}

export function removeScheduleAssignment(date, user) {
  if (!isAuthorizedUser(user)) {
    throw new Error("אין הרשאה לעדכן את הלו״ז.");
  }

  if (!SCHEDULE_DATES.some((item) => item.date === date)) {
    throw new Error("התאריך אינו ניתן לעריכה.");
  }

  return deleteDoc(doc(db, "schedule", date));
}
