"use strict";

const recommendedSchedule = [
  {
    date: "א׳ · 20.9",
    region: "היער השחור",
    title: "טיטיזי ו-Badeparadies",
    description: "יום קרוב וקל אחרי הטיסה: אגם בבוקר ופארק מים מקורה אחר הצהריים.",
    suggestionId: "titisee-badeparadies",
  },
  {
    date: "ב׳ · 21.9",
    region: "היער השחור",
    title: "פלדברג ו-FUNDORENA",
    description: "עולים לתצפית כשבהיר ועוברים למתחם המקורה אם מזג האוויר מתחלף.",
    suggestionId: "feldberg-fundorena",
  },
  {
    date: "ג׳ · 22.9",
    region: "היער השחור",
    title: "Europa-Park",
    description: "יום מלא ועצמאי בפארק; כדאי להגיע לפתיחה ולהזמין כרטיסים מראש.",
    suggestionId: "europa-park",
  },
  {
    date: "ד׳ · 23.9",
    region: "היער השחור",
    title: "גוטאך והחיים ביער השחור",
    description: "המוזיאון הפתוח ומגלשות ההרים, עם מפלי טריברג רק אם נשאר זמן וכוח.",
    suggestionId: "gutach-day",
  },
  {
    date: "ה׳ · 24.9",
    region: "היער השחור",
    title: "טודנאו: מפל ומגלשות הרים",
    description: "יום טבע ואקשן. בגשם מחליפים ל-Rulantica או ל-Badeparadies.",
    suggestionId: "todtnau-day",
  },
  {
    date: "ו׳ · 25.9",
    region: "יום מעבר",
    title: "מפלי הריין בדרך לאינטרלקן",
    description: "עצירה של שעה עד שעה וחצי בדרך — לא יום פעילות מלא.",
    suggestionId: "rhine-falls-transfer",
  },
  {
    date: "ש׳ · 26.9",
    region: "שווייץ",
    title: "טירת אוברהופן ואגם תון",
    description: "הטירה פתוחה בשבת; משלבים עם תון או שיט רגוע על האגם.",
    suggestionId: "oberhofen-thun",
  },
  {
    date: "א׳ · 27.9",
    region: "שווייץ",
    title: "לאוטרברונן, טרומלבך וונגן",
    description: "יום עמק מלא עם מפלים, רכבת הרים קצרה וכפר ללא מכוניות.",
    suggestionId: "lauterbrunnen-wengen",
  },
  {
    date: "ב׳ · 28.9",
    region: "שווייץ",
    title: "קניון הארה ומפלי גייסבך",
    description: "שילוב קומפקטי שמתאים גם למזג אוויר מעורב; אוברהופן סגורה ביום שני.",
    suggestionId: "aare-giessbach",
  },
];

const activitySuggestions = [
  {
    id: "europa-park",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "יום עצמאי",
    title: "Europa-Park",
    summary: "פארק ענק שמצדיק יום שלם — לא כדאי לצרף אליו אטרקציה נוספת.",
    duration: "8–10 שעות",
    drive: "כשעה לכל כיוון",
    weather: "עדיף ביום יבש",
    weatherproof: false,
    stops: [
      {
        name: "Europa-Park · Rust",
        description: "מגיעים לפתיחה, בוחרים מראש מתקני חובה ומחלקים את היום לפי גיל וגובה.",
        links: [
          { label: "האתר הרשמי", url: "https://www.europapark.de/en" },
          { label: "שעות ועונות", url: "https://www.europapark.de/en/theme-park/info/plan-your-visit/europa-park-opening-hours-seasons" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Europa-Park+Rust" },
        ],
      },
    ],
    adviceTitle: "מתאים, עם תכנון מראש",
    advice: "יש מתקנים עם מגבלות גיל וגובה. כדאי להזמין כרטיסים מראש ולהשתמש באפליקציה הרשמית ביום הביקור.",
  },
  {
    id: "rulantica",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "חלופת גשם",
    title: "Rulantica",
    summary: "פארק מים גדול ליד Europa-Park, שרובו מקורה ומתאים כיום נפרד.",
    duration: "6–9 שעות",
    drive: "כשעה לכל כיוון",
    weather: "מצוין לגשם",
    weatherproof: true,
    stops: [
      {
        name: "Rulantica · Rust",
        description: "מתחמי מים ומגלשות לכל היום. אזורי החוץ תלויים במזג האוויר ובעונה.",
        links: [
          { label: "האתר הרשמי", url: "https://www.europapark.de/en/rulantica" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Rulantica+Rust" },
        ],
      },
    ],
    adviceTitle: "לא לשלב עם Europa-Park",
    advice: "שני הפארקים גדולים מספיק ליום שלם. Rulantica הוא הגיבוי הטוב ביותר ליום גשום.",
  },
  {
    id: "titisee-badeparadies",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "מומלץ",
    title: "אגם טיטיזי ו-Badeparadies",
    summary: "בוקר רגוע ליד האגם ואחר צהריים חם בפארק מים מקורה.",
    duration: "6–8 שעות",
    drive: "כ-20 דקות לכל כיוון",
    weather: "גמיש מאוד",
    weatherproof: true,
    stops: [
      {
        name: "אגם טיטיזי",
        description: "טיילת, שיט קצר או סירה אם מזג האוויר נעים. אפשר לקצר ולהמשיך מוקדם לפארק המים.",
        links: [
          { label: "מידע על האגם", url: "https://www.hochschwarzwald.de/en/attractions/lake-titisee" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Titisee+Germany" },
        ],
      },
      {
        name: "Badeparadies Schwarzwald",
        description: "פארק מים מקורה עם אזור מגלשות; בודקים מראש אילו מתחמים מותרים לילדים.",
        links: [
          { label: "האתר הרשמי", url: "https://www.badeparadies-schwarzwald.de/en" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Badeparadies+Schwarzwald" },
        ],
      },
    ],
    adviceTitle: "בחירה טובה ליום הראשון",
    advice: "זה היום הקרוב והפחות מעייף. במקרה של גשם מדלגים על האגם ומקדימים לפארק המים.",
  },
  {
    id: "feldberg-fundorena",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "מומלץ",
    title: "פלדברג ו-FUNDORENA",
    summary: "תצפית ורכבל כשבהיר, ומתחם משחקים וספורט מקורה ממש ליד.",
    duration: "6–8 שעות",
    drive: "כ-30 דקות לכל כיוון",
    weather: "חצי בחוץ, חצי בפנים",
    weatherproof: true,
    stops: [
      {
        name: "Feldbergbahn",
        description: "עולים ברכבל לאזור הפסגה, מטיילים במסלול קצר ונהנים מהנוף אם הראות טובה.",
        links: [
          { label: "מידע ושעות", url: "https://www.feldberg-erlebnis.de/en/info-service/opening-hours" },
          { label: "מפה", url: "https://maps.app.goo.gl/Xo2i1UdhEeV5K8hm8" },
        ],
      },
      {
        name: "FUNDORENA",
        description: "מתחם מקורה ליד תחנת הרכבל עם טרמפולינות, טיפוס ופעילויות משפחתיות.",
        links: [
          { label: "האתר הרשמי", url: "https://fundorena.de/en/homepage/" },
          { label: "מפה", url: "https://maps.app.goo.gl/RWT2goxYsLsEdqaCA" },
        ],
      },
    ],
    adviceTitle: "בודקים רוח לפני היציאה",
    advice: "הרכבל עלול להיסגר ברוח חזקה. במקרה כזה הופכים את FUNDORENA לפעילות המרכזית.",
  },
  {
    id: "todtnau-day",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "מומלץ",
    title: "טודנאו: מפל ומגלשות הרים",
    summary: "שילוב טבע ואקשן באותו אזור, בלי לדחוס נסיעות מיותרות.",
    duration: "5–7 שעות",
    drive: "35–40 דקות לכל כיוון",
    weather: "דורש יום יבש",
    weatherproof: false,
    stops: [
      {
        name: "מפלי טודנאו",
        description: "מתחילים בהליכה קצרה ונוחה מהחניה אל אחד המפלים הגבוהים בגרמניה.",
        links: [
          { label: "מידע על המפל", url: "https://www.badische-seiten.de/todtnau/todtnauer-wasserfall.php" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Todtnauer+Wasserfall" },
        ],
      },
      {
        name: "Hasenhorn Coaster",
        description: "רכבל ומסלול מגלשות ארוך. הפעילות נסגרת ברוח חזקה, סופה או תנאי מסלול לא בטוחים.",
        links: [
          { label: "האתר הרשמי", url: "https://www.hasenhorn-rodelbahn.de/" },
          { label: "מפה", url: "https://maps.app.goo.gl/3Mc5Ryee29M7rQSB6" },
        ],
      },
    ],
    adviceTitle: "יום קצר יחסית",
    advice: "השילוב הגיוני, אבל לא תמיד ממלא יום ארוך. אפשר לסיים בטיטיזי או לחזור מוקדם למנוחה.",
  },
  {
    id: "gutach-day",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "מומלץ",
    title: "גוטאך, מגלשות ומפלי טריברג",
    summary: "יום שמחבר תרבות מקומית ואטרקציה לילדים; טריברג הוא תוספת, לא חובה.",
    duration: "7–9 שעות",
    drive: "45–50 דקות לכל כיוון",
    weather: "עדיף ביום יבש",
    weatherproof: false,
    stops: [
      {
        name: "Vogtsbauernhof",
        description: "המוזיאון הפתוח של היער השחור: בתי חווה, מלאכות מסורתיות ופעילויות משפחתיות.",
        links: [
          { label: "האתר הרשמי", url: "https://www.vogtsbauernhof.de/en" },
          { label: "שעות ומחירים", url: "https://www.vogtsbauernhof.de/en/visit/opening-hours-and-prices" },
          { label: "מפה", url: "https://maps.app.goo.gl/fPKaWsk7q5ycjMx38" },
        ],
      },
      {
        name: "Sommerrodelbahn Gutach",
        description: "מגלשות הרים קצרות ונגישות ליד המוזיאון. ילדים צעירים נוסעים עם מלווה.",
        links: [
          { label: "האתר הרשמי", url: "https://www.sommerrodelbahn-gutach.de/" },
          { label: "מפה", url: "https://maps.app.goo.gl/KPFiYwAk3Ja3nWa97" },
        ],
      },
      {
        name: "מפלי טריברג · אם נשאר זמן",
        description: "מסיימים במסלול קצר במפלים רק אם כולם עדיין באנרגיה; לא מנסים להספיק הכול בכוח.",
        links: [
          { label: "אתר טריברג", url: "https://www.triberg.de/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Triberg+Waterfalls" },
        ],
      },
    ],
    adviceTitle: "לא לדחוס ארבע אטרקציות",
    advice: "המוזיאון והמגלשות הם הליבה. Park mit allen Sinnen הוא חלופה למוזיאון, לא תוספת לאותו יום.",
  },
  {
    id: "park-all-senses",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "חלופה רגועה",
    title: "Park mit allen Sinnen וחור המכשפה",
    summary: "יום טבע רגוע יותר עם מסלול חושים וביקור בטחנת Hexenloch.",
    duration: "5–7 שעות",
    drive: "כ-45 דקות לכל כיוון",
    weather: "עדיף ביום יבש",
    weatherproof: false,
    stops: [
      {
        name: "Park mit allen Sinnen",
        description: "מסלול יחפים וחושים בטבע. מתאים כחלופה רגועה למוזיאון הפתוח של גוטאך.",
        links: [
          { label: "האתר הרשמי", url: "https://www.parkmitallensinnen.de/" },
          { label: "מפה", url: "https://maps.app.goo.gl/pXWzGv98Cs29hksp6" },
        ],
      },
      {
        name: "Hexenlochmühle · חור המכשפה",
        description: "טחנה ציורית ומפל קטן. אפשר להסתפק בביקור קצר או לבחור במסלול מעגלי של כשלוש שעות.",
        links: [
          { label: "מידע למטייל", url: "https://www.hochschwarzwald.de/en/attractions/hexenlochmuehle" },
          { label: "מפה", url: "https://maps.app.goo.gl/7aei1U4EKhUknuqr9" },
        ],
      },
    ],
    adviceTitle: "לא יום חובה",
    advice: "רעיון טוב כשמחפשים יום איטי בלי פארק גדול. המסלול הארוך אינו מתאים לעגלה.",
  },
  {
    id: "vogelpark-steinen",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "עדיפות נמוכה",
    title: "Vogelpark Steinen",
    summary: "פארק ציפורים וקופים מוצלח, אבל רחוק יחסית ואינו ממלא לבדו יום ארוך.",
    duration: "4–6 שעות",
    drive: "כ-55–65 דקות לכל כיוון",
    weather: "נסגר בגשם רצוף",
    weatherproof: false,
    stops: [
      {
        name: "Vogelpark Steinen",
        description: "פארק בעלי חיים עם מופעי ציפורים ומתחם קופים. בודקים את זמני המופעים לפני היציאה.",
        links: [
          { label: "האתר הרשמי", url: "https://www.vogelpark-steinen.de/" },
          { label: "מפה", url: "https://maps.app.goo.gl/s7LesAR7XE7XDQ95A" },
        ],
      },
    ],
    adviceTitle: "רק אם בעלי החיים בעדיפות גבוהה",
    advice: "יחס הנסיעה לזמן הפעילות פחות טוב מהאפשרויות האחרות. Steinwasen Park הוא חלופה קרובה ומגוונת יותר.",
  },
  {
    id: "wutach-gorge",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "תוספת שלנו",
    title: "Wutachschlucht",
    summary: "יום הליכה כמעט בלי נסיעה, בקניון הטבע המרשים שנמצא ליד לופינגן.",
    duration: "4–7 שעות",
    drive: "קרוב מאוד למקום הלינה",
    weather: "רק בתנאי שביל טובים",
    weatherproof: false,
    stops: [
      {
        name: "קניון ווטאך",
        description: "בוחרים מסלול קצר למשפחה או את הקטע הארוך יותר. השבילים סלעיים, צרים ולא מתאימים לעגלה.",
        links: [
          { label: "מידע ומסלולים", url: "https://www.hochschwarzwald.de/en/experience/hiking/wutach-gorge" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Wutachschlucht+Schattenmuehle" },
        ],
      },
    ],
    adviceTitle: "בודקים מצב שבילים",
    advice: "אחרי גשם חזק עלול להיות חלק או לא בטוח. זה רעיון מצוין ליום שרוצים בו הפסקה מהנהיגה.",
  },
  {
    id: "steinwasen",
    region: "black-forest",
    regionLabel: "היער השחור",
    fit: "תוספת שלנו",
    title: "Steinwasen Park",
    summary: "פארק חיות והרפתקאות עם גשר תלוי ומתקנים משפחתיים.",
    duration: "6–8 שעות",
    drive: "כ-45 דקות לכל כיוון",
    weather: "עדיף ביום יבש",
    weatherproof: false,
    stops: [
      {
        name: "Steinwasen Park",
        description: "שילוב נוח של בעלי חיים, מתקנים וגשר תלוי — חלופה חזקה לפארק הציפורים הרחוק יותר.",
        links: [
          { label: "האתר הרשמי", url: "https://www.steinwasen-park.de/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Steinwasen+Park" },
        ],
      },
    ],
    adviceTitle: "חלופה טובה למשפחות",
    advice: "מתאים במיוחד אם רוצים יום פארק קטן יותר מ-Europa-Park עם שילוב של חיות וטבע.",
  },
  {
    id: "rhine-falls-transfer",
    region: "black-forest",
    regionLabel: "יום מעבר",
    fit: "עצירה בדרך",
    title: "מפלי הריין",
    summary: "עצירה טבעית בין לופינגן לאינטרלקן — לא כדאי להקדיש לה יום נפרד.",
    duration: "1–1.5 שעות",
    drive: "על ציר הנסיעה לשווייץ",
    weather: "אפשרי כמעט בכל מזג אוויר",
    weatherproof: true,
    stops: [
      {
        name: "Rheinfall · Schaffhausen",
        description: "תצפית קצרה על המפלים, הפסקת אוכל והמשך לאינטרלקן כדי להגיע בנחת לצ׳ק-אין.",
        links: [
          { label: "האתר הרשמי", url: "https://rheinfall.ch/en/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Rhine+Falls+Switzerland" },
        ],
      },
    ],
    adviceTitle: "התיקון החשוב ביותר לרשימה",
    advice: "המיקום מתאים בדיוק ליום המעבר ב-25.9. יוצאים אחרי הצ׳ק-אאוט ומשאירים מספיק זמן לנסיעה לאינטרלקן.",
  },
  {
    id: "aare-giessbach",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "מומלץ",
    title: "קניון הארה ומפלי גייסבך",
    summary: "שתי אטרקציות באותו מסדרון נסיעה, עם שילוב טוב של קניון, אגם ומפל.",
    duration: "7–9 שעות",
    drive: "25–35 דקות מאינטרלקן",
    weather: "טוב גם במזג אוויר מעורב",
    weatherproof: true,
    stops: [
      {
        name: "Aareschlucht · קניון הארה",
        description: "מסלול נוח יחסית על גשרים ומעברים בתוך הקניון; חלקים רבים מוגנים מגשם קל.",
        links: [
          { label: "מידע רשמי", url: "https://aareschlucht.ch/en/info/information" },
          { label: "מפה", url: "https://maps.app.goo.gl/BGmQTW3sGv3PNbWZ6" },
        ],
      },
      {
        name: "מפלי גייסבך",
        description: "מפל מרשים מעל אגם ברינץ. אפשר לעלות בפוניקולר ההיסטורי ולשלב שיט.",
        links: [
          { label: "הפוניקולר הרשמי", url: "https://www.giessbach.ch/en/giessbach-bahn-1" },
          { label: "שיט וכרטיס משולב", url: "https://www.bls-schiff.ch/en/lake-cruise-experiences/combined-ticket-giessbach-time-travel" },
          { label: "מפה", url: "https://maps.app.goo.gl/jZZ9Bh6BzTeSPkVs6" },
        ],
      },
    ],
    adviceTitle: "שילוב הגיוני מאוד",
    advice: "מתאים ליום שני 28.9, כשהטירה באוברהופן סגורה. מתחילים בקניון וממשיכים לפי מזג האוויר.",
  },
  {
    id: "oberhofen-thun",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "שבת או ראשון",
    title: "טירת אוברהופן ואגם תון",
    summary: "הטירה לבדה היא חצי יום, ולכן משלבים אותה עם תון או שיט באגם.",
    duration: "6–8 שעות",
    drive: "כ-25 דקות מאינטרלקן",
    weather: "גמיש",
    weatherproof: true,
    stops: [
      {
        name: "טירת אוברהופן",
        description: "מוזיאון, גנים וטירה על שפת האגם. פנים הטירה סגור בימי שני.",
        links: [
          { label: "האתר הרשמי", url: "https://www.schlossoberhofen.ch/en/" },
          { label: "שעות ביקור", url: "https://www.schlossoberhofen.ch/en/information/besucherinfos" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Schloss+Oberhofen" },
        ],
      },
      {
        name: "תון או שיט באגם",
        description: "ממשיכים לעיר העתיקה של תון, או בוחרים בשיט נינוח לפי לוח ההפלגות.",
        links: [
          { label: "שיט באגם תון", url: "https://www.bls-schiff.ch/en/lake-cruise" },
          { label: "מפת תון", url: "https://www.google.com/maps/search/?api=1&query=Thun+Old+Town" },
        ],
      },
    ],
    adviceTitle: "לא לתכנן ל-28.9",
    advice: "28.9 הוא יום שני והמוזיאון סגור. לכן היום הזה חייב להיות בשבת 26.9 או בראשון 27.9.",
  },
  {
    id: "lauterbrunnen-wengen",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "מומלץ",
    title: "לאוטרברונן, טרומלבך וונגן",
    summary: "יום עמק מלא עם מפלים בתוך ההר ועלייה ברכבת לכפר ללא מכוניות.",
    duration: "8–9 שעות",
    drive: "כ-25 דקות מאינטרלקן",
    weather: "מתאים גם לעננות קלה",
    weatherproof: true,
    stops: [
      {
        name: "עמק לאוטרברונן",
        description: "מתחילים בעמק ובמפל שטאובאך, עם הליכה קצרה ונוף של צוקי העמק.",
        links: [
          { label: "מידע על העמק", url: "https://lauterbrunnen.swiss/en/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Lauterbrunnen+Switzerland" },
        ],
      },
      {
        name: "מפלי טרומלבך",
        description: "עשרה מפלים קרחוניים בתוך ההר. ילדים מתחת לגיל 4 אינם מורשים להיכנס.",
        links: [
          { label: "האתר הרשמי", url: "https://www.truemmelbachfaelle.ch/" },
          { label: "מפה", url: "https://maps.app.goo.gl/JYvkZ2DacEbFxDUt6" },
        ],
      },
      {
        name: "Wengen",
        description: "עולים ברכבת מלאוטרברונן לכפר נטול מכוניות, מטיילים וחוזרים באותה הדרך.",
        links: [
          { label: "מידע על וונגן", url: "https://wengen.swiss/en/" },
          { label: "מידע והגעה", url: "https://www.jungfrau.ch/en-gb/wengen/" },
        ],
      },
    ],
    adviceTitle: "יום מלא אבל לא מסובך",
    advice: "מחנים פעם אחת באזור לאוטרברונן וממשיכים ברגל וברכבת. זה אחד הימים הכי אמינים בתכנית.",
  },
  {
    id: "titlis",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "חלופת מזג אוויר",
    title: "הר טיטליס",
    summary: "פסגה קרחונית מרשימה, אך עם הנסיעה הארוכה ביותר ורגישות גבוהה לעננות ורוח.",
    duration: "9–11 שעות",
    drive: "כ-1:20 שעות לכל כיוון",
    weather: "רק ביום בהיר",
    weatherproof: false,
    stops: [
      {
        name: "Titlis · Engelberg",
        description: "עולים למערת הקרח, גשר הצוק והפסגה. בספטמבר 2026 Rotair סגור ומוחלף ברכבל Titlis Connect.",
        links: [
          { label: "האתר הרשמי", url: "https://www.titlis.ch/en" },
          { label: "מפה", url: "https://maps.app.goo.gl/GLb5UXgAM7NLCW3E8" },
        ],
      },
    ],
    adviceTitle: "אפשרי, אבל לא הבחירה הראשונה",
    advice: "נוסעים ברכב ורק כשהתחזית בפסגה מצוינת. עם שלושה ימים בלבד, Grindelwald First יעיל יותר.",
  },
  {
    id: "brienz-rothorn",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "יום בהיר",
    title: "רכבת הקיטור Brienz Rothorn",
    summary: "נסיעת רכבת היסטורית לפסגה ונוף פנורמי, קרוב מאוד לבסיס באינטרלקן.",
    duration: "6–8 שעות",
    drive: "20–25 דקות לברינץ",
    weather: "רק בראות טובה",
    weatherproof: false,
    stops: [
      {
        name: "Brienz Rothorn Bahn",
        description: "רכבת קיטור לפסגת רותהורן. עונת 2026 המלאה נמשכת עד 25.10; מומלץ לשריין מושבים.",
        links: [
          { label: "האתר הרשמי", url: "https://brienz-rothorn-bahn.ch/en/" },
          { label: "לוח זמנים ומחירים", url: "https://brienz-rothorn-bahn.ch/en/fahrplan-preise/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Brienz+Rothorn+Bahn" },
        ],
      },
      {
        name: "ברינץ",
        description: "אחרי הרכבת מטיילים בטיילת האגם או משלבים ארוחה בכפר.",
        links: [
          { label: "מפת ברינץ", url: "https://www.google.com/maps/search/?api=1&query=Brienz+Switzerland" },
        ],
      },
    ],
    adviceTitle: "לא לדחוס עם קניון הארה",
    advice: "הרכבת והשהייה בפסגה ממלאות את רוב היום. עדיף לשמור את קניון הארה וגייסבך ליום נפרד.",
  },
  {
    id: "grindelwald-first",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "תוספת שלנו",
    title: "Grindelwald First",
    summary: "יום הרים גמיש וקרוב עם רכבל, Cliff Walk ומסלולים בכמה רמות.",
    duration: "7–9 שעות",
    drive: "25–30 דקות מאינטרלקן",
    weather: "עדיף ביום בהיר",
    weatherproof: false,
    stops: [
      {
        name: "First · Grindelwald",
        description: "רכבל, גשר צוקים ומסלול אפשרי לאגם Bachalpsee. אפשר לקצר בקלות אם מזג האוויר משתנה.",
        links: [
          { label: "האתר הרשמי", url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/" },
          { label: "First Cliff Walk", url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-cliff-walk-by-tissot/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Grindelwald+First" },
        ],
      },
    ],
    adviceTitle: "חלופת ההרים היעילה ביותר",
    advice: "קרוב משמעותית מטיטליס וגמיש יותר למשפחה. אפשר להחליף בו את אוברהופן ביום בהיר במיוחד.",
  },
  {
    id: "interlaken-flex",
    region: "switzerland",
    regionLabel: "שווייץ",
    fit: "תוספת שלנו",
    title: "אינטרלקן ו-Harder Kulm",
    summary: "יום קצר וגמיש ליד מקום הלינה, שמתאים לעייפות או לתחזית לא יציבה.",
    duration: "4–7 שעות",
    drive: "ללא נסיעה משמעותית",
    weather: "גמיש",
    weatherproof: true,
    stops: [
      {
        name: "Harder Kulm",
        description: "פוניקולר קצר לתצפית מעל אינטרלקן ושני האגמים. עולים רק אם הראות טובה.",
        links: [
          { label: "האתר הרשמי", url: "https://www.jungfrau.ch/en-gb/harder-kulm/" },
          { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Harder+Kulm" },
        ],
      },
      {
        name: "אינטרלקן או שיט באגם",
        description: "משלימים בטיול בעיר, פארק Höhematte או שיט קצר לפי לוח ההפלגות.",
        links: [
          { label: "מידע על אינטרלקן", url: "https://www.interlaken.ch/en" },
          { label: "שיט באגמים", url: "https://www.bls-schiff.ch/en" },
        ],
      },
    ],
    adviceTitle: "שומרים ליום עייף",
    advice: "זה יום שניתן להתחיל מאוחר, לקצר או להרחיב בלי לפגוע בתכנית כולה.",
  },
];

const CARD_SOURCES = {
  red: "https://www.hochschwarzwald.de/_Resources/Persistent/eb77307150357c762114f2245cd782ed07b9b796/Hochschwarzwald%20Card%20Leistungen%20ab%20Juli%202026.pdf",
  black:
    "https://www.schwarzwald-tourismus.info/_Resources/Persistent/0e08e7eb75db93f4ad0379544ee6d8cec3191ac8/SchwarzwaldCard%202026_PDF-%C3%9Cbersicht.pdf",
};

const attractionCardBenefits = {
  "europa-park": [
    {
      red: { status: "none", short: "לא מתקבל", detail: "אין הטבה בכרטיס האדום." },
      black: {
        status: "variant",
        short: "גרסה מיוחדת",
        detail: "יום כניסה אחד כלול רק ב-SchwarzwaldCard הכולל Europa-Park, לא בכרטיס הרגיל.",
      },
    },
  ],
  rulantica: [
    {
      red: { status: "none", short: "לא מתקבל", detail: "אין הטבה בכרטיס האדום." },
      black: { status: "none", short: "לא מתקבל", detail: "גם גרסת Europa-Park אינה כוללת את Rulantica." },
    },
  ],
  "titisee-badeparadies": [
    {
      red: { status: "included", short: "שיט חינם", detail: "שיט מעגלי אחד של כ-25 דקות באגם במהלך השהייה." },
      black: { status: "none", short: "לא מתקבל", detail: "השיט אינו מופיע ברשימת שותפי SchwarzwaldCard 2026." },
    },
    {
      red: {
        status: "discount",
        short: "30% הנחה",
        detail: "30% הנחה פעם אחת לכרטיס 4 שעות ב-Galaxy או Palmenoase; נדרשת הזמנה מקוונת.",
      },
      black: { status: "none", short: "לא מתקבל", detail: "Badeparadies אינו שותף בכרטיס השחור ב-2026." },
    },
  ],
  "feldberg-fundorena": [
    {
      red: { status: "included", short: "חינם", detail: "עלייה וירידה אחת ברכבל, כולל כניסה ל-Feldbergturm." },
      black: { status: "discount", short: "50% הנחה", detail: "50% הנחה על כרטיס עלייה וירידה, כולל Feldbergturm." },
    },
    {
      red: {
        status: "included",
        short: "פעילות חינם",
        detail: "60 דקות בפארק החבלים המקורה ועוד 60 דקות בטרמפולינות או בולדר, פעם אחת בשהייה.",
      },
      black: {
        status: "included",
        short: "פעילות חינם",
        detail: "60 דקות באחת מפעילויות הפנים; פארק החבלים החיצוני כולל שעתיים.",
      },
    },
  ],
  "todtnau-day": [
    {
      red: { status: "included", short: "חינם", detail: "כניסה חד-פעמית למפלים ולגשר BLACKFORESTLINE באמצעות ה-QR." },
      black: { status: "none", short: "לא מתקבל", detail: "המפלים אינם מופיעים ברשימת SchwarzwaldCard 2026." },
    },
    {
      red: { status: "none", short: "לא מתקבל", detail: "Hasenhorn Coaster אינו מופיע ברשימת הטבות 2026." },
      black: { status: "none", short: "לא מתקבל", detail: "Hasenhorn Coaster אינו שותף בכרטיס השחור." },
    },
  ],
  "gutach-day": [
    {
      red: { status: "none", short: "לא מתקבל", detail: "המוזיאון אינו מופיע ברשימת הטבות הכרטיס האדום." },
      black: { status: "included", short: "כניסה חינם", detail: "כניסה חד-פעמית חינם למוזיאון הפתוח Vogtsbauernhof." },
    },
    {
      red: { status: "none", short: "לא מתקבל", detail: "מגלשות גוטאך אינן שותפות בכרטיס האדום." },
      black: { status: "none", short: "לא מתקבל", detail: "מגלשות גוטאך אינן מופיעות ברשימת SchwarzwaldCard 2026." },
    },
    {
      red: { status: "none", short: "לא מתקבל", detail: "הטבת כרטיס האורח המקומי של טריברג אינה הכרטיס האדום." },
      black: {
        status: "included",
        short: "כרטיס משולב חינם",
        detail: "כניסה חינם למפלים, למוזיאון היער השחור ול-Triberg-Land/Fantasy.",
      },
    },
  ],
  "park-all-senses": [
    {
      red: { status: "none", short: "לא מתקבל", detail: "הפארק אינו מופיע ברשימת הטבות הכרטיס האדום." },
      black: { status: "none", short: "לא מתקבל", detail: "הפארק אינו מופיע ברשימת SchwarzwaldCard 2026." },
    },
    {
      free: { short: "חינם לכולם", detail: "הביקור בטחנה ובסביבה אינו דורש כרטיס כניסה; קניות ואוכל בתשלום." },
    },
  ],
  "vogelpark-steinen": [
    {
      red: { status: "none", short: "לא מתקבל", detail: "Vogelpark Steinen אינו שותף בכרטיס האדום." },
      black: { status: "included", short: "כניסה חינם", detail: "כניסה חד-פעמית חינם לפארק הציפורים והקופים." },
    },
  ],
  "wutach-gorge": [
    {
      free: { short: "חינם לכולם", detail: "ההליכה בקניון אינה כרוכה בדמי כניסה, ולכן אין צורך באחד הכרטיסים." },
    },
  ],
  steinwasen: [
    {
      red: { status: "included", short: "כניסה חינם", detail: "כניסה חד-פעמית חינם לפארק, לגשר ולמתקנים הכלולים." },
      black: { status: "none", short: "לא מתקבל", detail: "Steinwasen Park אינו מופיע ברשימת SchwarzwaldCard 2026." },
    },
  ],
  "rhine-falls-transfer": [
    {
      red: { status: "none", short: "לא תקף", detail: "המפלים נמצאים בשווייץ ומחוץ לרשת הכרטיס." },
      black: { status: "none", short: "לא תקף", detail: "המפלים נמצאים בשווייץ ומחוץ לרשת הכרטיס." },
    },
  ],
};

function renderSchedule() {
  const container = document.querySelector("#schedule-list");
  container.innerHTML = recommendedSchedule
    .map(
      (day) => `
        <article class="schedule-day">
          <div class="schedule-date">
            <strong>${day.date}</strong>
            <span class="schedule-region">${day.region}</span>
          </div>
          <h3>${day.title}</h3>
          <p>${day.description}</p>
          <a href="#${day.suggestionId}">לפרטי היום</a>
        </article>
      `,
    )
    .join("");
}

function renderStopLinks(links) {
  return links
    .map(
      (link) => `
        <a class="stop-link" href="${link.url}" target="_blank" rel="noreferrer">
          ${link.label}
        </a>
      `,
    )
    .join("");
}

function isAcceptedBenefit(benefit) {
  return benefit && ["included", "discount", "variant"].includes(benefit.status);
}

function renderBenefitCard(type, benefit) {
  const name = type === "red" ? "כרטיס אדום" : "כרטיס שחור";
  const letter = type === "red" ? "H" : "S";
  const source = CARD_SOURCES[type];

  return `
    <a
      class="attraction-benefit attraction-benefit-${type} attraction-benefit-${benefit.status}"
      href="${source}"
      target="_blank"
      rel="noreferrer"
      title="${benefit.detail}"
      aria-label="${name}: ${benefit.short}. ${benefit.detail}"
    >
      <span class="benefit-card-symbol" aria-hidden="true">${letter}</span>
      <span>
        <strong>${name}</strong>
        <small>${benefit.short}</small>
      </span>
    </a>
  `;
}

function renderStopBenefits(benefits) {
  if (!benefits) return "";

  if (benefits.free) {
    return `
      <div class="stop-benefits">
        <span class="attraction-benefit attraction-benefit-free" title="${benefits.free.detail}">
          <span class="benefit-card-symbol" aria-hidden="true">✓</span>
          <span>
            <strong>${benefits.free.short}</strong>
            <small>אין צורך בכרטיס</small>
          </span>
        </span>
      </div>
    `;
  }

  const relevantBenefits = [
    isAcceptedBenefit(benefits.red) ? renderBenefitCard("red", benefits.red) : "",
    isAcceptedBenefit(benefits.black) ? renderBenefitCard("black", benefits.black) : "",
  ].filter(Boolean);

  if (!relevantBenefits.length) return "";

  return `
    <div class="stop-benefits">
      ${relevantBenefits.join("")}
    </div>
  `;
}

function getSuggestionCardStatus(suggestion) {
  const stopBenefits = attractionCardBenefits[suggestion.id] || [];
  const acceptedBlackBenefits = stopBenefits
    .map((benefits) => benefits?.black)
    .filter(isAcceptedBenefit);

  return {
    hasData: stopBenefits.length > 0,
    red: stopBenefits.some((benefits) => isAcceptedBenefit(benefits?.red)),
    black: acceptedBlackBenefits.length > 0,
    blackVariantOnly:
      acceptedBlackBenefits.length > 0 &&
      acceptedBlackBenefits.every((benefit) => benefit.status === "variant"),
    free: stopBenefits.length > 0 && stopBenefits.every((benefits) => benefits?.free),
  };
}

function renderSuggestionCardSummary(status) {
  if (!status.hasData) return "";

  const pills = [];

  if (status.red) {
    pills.push('<span class="summary-benefit summary-benefit-red"><span aria-hidden="true">H</span> אדום</span>');
  }

  if (status.black) {
    pills.push(
      `<span class="summary-benefit summary-benefit-black"><span aria-hidden="true">S</span> ${
        status.blackVariantOnly ? "שחור מיוחד" : "שחור"
      }</span>`,
    );
  }

  if (status.free) {
    pills.push('<span class="summary-benefit summary-benefit-free"><span aria-hidden="true">✓</span> חינם</span>');
  }

  if (!pills.length) return "";

  return `<div class="summary-benefits" aria-label="הטבות כרטיסים">${pills.join("")}</div>`;
}

function renderSuggestions() {
  const container = document.querySelector("#suggestions-grid");
  if (!activitySuggestions.length) {
    container.innerHTML = '<p class="empty-state">הרעיונות נטענים…</p>';
    return;
  }

  container.innerHTML = activitySuggestions
    .map((suggestion) => {
      const cardStatus = getSuggestionCardStatus(suggestion);
      return `
        <details
          class="suggestion-card"
          id="${suggestion.id}"
          data-region="${suggestion.region}"
          data-weatherproof="${suggestion.weatherproof}"
          data-red-card="${cardStatus.red}"
          data-black-card="${cardStatus.black}"
        >
          <summary>
            <div class="suggestion-topline">
              <span class="region-label">${suggestion.regionLabel}</span>
              <span class="fit-label">${suggestion.fit}</span>
            </div>
            <h3>${suggestion.title}</h3>
            <p class="suggestion-summary">${suggestion.summary}</p>
            <div class="day-metadata">
              <span>${suggestion.duration}</span>
              <span>${suggestion.drive}</span>
              <span>${suggestion.weather}</span>
            </div>
            ${renderSuggestionCardSummary(cardStatus)}
          </summary>
          <div class="suggestion-content">
            <ol class="route-list">
              ${suggestion.stops
                .map(
                  (stop, stopIndex) => `
                    <li class="route-stop">
                      <h4>${stop.name}</h4>
                      <p>${stop.description}</p>
                      ${renderStopBenefits(attractionCardBenefits[suggestion.id]?.[stopIndex])}
                      <div class="stop-links">${renderStopLinks(stop.links)}</div>
                    </li>
                  `,
                )
                .join("")}
            </ol>
            <div class="day-advice">
              <strong>${suggestion.adviceTitle}</strong>
              <p>${suggestion.advice}</p>
            </div>
          </div>
        </details>
      `;
    })
    .join("");
}

function setupFilters() {
  document.querySelectorAll(".idea-filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".idea-filter").forEach((filter) => filter.classList.remove("active"));
      button.classList.add("active");

      document.querySelectorAll(".suggestion-card").forEach((card) => {
        const filter = button.dataset.filter;
        card.hidden =
          filter !== "all" &&
          card.dataset.region !== filter &&
          !(filter === "weatherproof" && card.dataset.weatherproof === "true") &&
          !(filter === "red-card" && card.dataset.redCard === "true") &&
          !(filter === "black-card" && card.dataset.blackCard === "true");
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

function setLastUpdated() {
  document.querySelector("#last-updated").textContent = new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(document.lastModified));
}

function openLinkedSuggestion() {
  if (!window.location.hash) return;

  const suggestion = document.querySelector(window.location.hash);
  if (suggestion instanceof HTMLDetailsElement) {
    suggestion.open = true;
  }
}

function init() {
  renderSchedule();
  renderSuggestions();
  setupFilters();
  setupTheme();
  setLastUpdated();
  openLinkedSuggestion();
  window.addEventListener("hashchange", openLinkedSuggestion);
}

init();
