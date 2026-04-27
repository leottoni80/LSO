/* ============================================================
   LEE UNIVERSITY SYMPHONY ORCHESTRA — app.js
   ============================================================ */

/* ---------- PAGE NAVIGATION ---------- */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === id) a.classList.add('active');
  });

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');

  // Init calendar if needed
  if (id === 'calendar') renderCalendar();
}

/* ---------- HAMBURGER MENU ---------- */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* ---------- HERO BACKGROUND ---------- */
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const img = new Image();
  img.onload = () => {
    hero.style.backgroundImage = "url('assets/Symphony-Orchestra.webp')";
    hero.classList.add('bg-loaded');
  };
  img.onerror = () => {
    // Fallback: keep solid dark background
    hero.style.background = 'linear-gradient(135deg, #0D1B2A, #1A2D42)';
  };
  img.src = 'assets/Symphony-Orchestra.webp';
})();

/* ============================================================
   CALENDAR DATA
   Season events for 2026/27
   (Update from "Lee Orchestra Season 26-27.pdf" as needed)
   ============================================================ */
const SEASON_EVENTS = [
  // ── AUGUST 2026 ──────────────────────────────────────────
  {
    date: '2026-08-19T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
  {
    date: '2026-08-24T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-08-26T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
// ── SEPTEMBER 2026 ──────────────────────────────────────────
  {
    date: '2026-09-02T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-07T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-09T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-14T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-16T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-21T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-23T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },

{
    date: '2026-09-28T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-09-30T12:00',
    title: 'Late Rehearsal',
    type: 'special-rehearsal',
    details: 'Late rehearsal',
    time: '5:00 PM – 7:00 PM',
    location: 'Pangle Hall'
  },

// ── OCTOBER 2026 ──────────────────────────────────────────
  {
    date: '2026-10-05T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-10-07T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },

{
    date: '2026-10-08T12:00',
    title: 'NO CLASSES (FALL BREAK)',
    type: ' ',
    details: 'NO CLASSES (FALL BREAK)',
  },
{
    date: '2026-10-09T12:00',
    title: 'NO CLASSES (FALL BREAK)',
    type: ' ',
    details: 'NO CLASSES (FALL BREAK)',
  },
{
    date: '2026-10-12T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-10-14T12:00',
    title: 'Dress Rehearsal',
    type: 'special-rehearsal',
    details: 'Dress rehearsal',
    time: '5:00 PM – 7:00 PM',
    location: 'Pangle Hall'
  },
{
    date: '2026-10-15T12:00',
    title: 'ORCHESTRA CONCERT',
    type: 'concert',
    details: "Wagner - Meistersinger Overture\nHolmès - La Nuit et L'amour\nBerlioz - Roman Carnival\n- Intermission -\nTaylor - Bamboula\nKorsakov - Russian Easter Festival",
    time: '7:30 PM',
    location: 'Pangle Hall',
    note: 'Call time: 7 PM<br>Attire: All-black',
  },
{
    date: '2026-10-19T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-10-21T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-10-26T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-10-28T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },

// ── NOVEMBER 2026 ──────────────────────────────────────────
  {
    date: '2026-11-02T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-04T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-09T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-11T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-16T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-18T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-19T12:00',
    title: 'Concerto Competition',
    type: ' ',
    details: 'Concerto Competition',
    time: 'TBA',
    location: 'Squires'
  },
{
    date: '2026-11-23T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2026-11-25T12:00',
    title: 'NO CLASSES (THANKSGIVING)',
    type: ' ',
    details: 'NO CLASSES (THANKSGIVING)'
  },
{
    date: '2026-11-26T12:00',
    title: 'NO CLASSES (THANKSGIVING)',
    type: ' ',
    details: 'NO CLASSES (THANKSGIVING)'
  },
{
    date: '2026-11-27T12:00',
    title: 'NO CLASSES (THANKSGIVING)',
    type: ' ',
    details: 'NO CLASSES (THANKSGIVING)'
  },
{
    date: '2026-11-30T12:00',
    title: 'Classic Christmas Rehearsal TBC',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },

// ── DECEMBER 2026 ──────────────────────────────────────────
  {
    date: '2026-12-05T12:00',
    title: 'Dress Rehearsal',
    type: 'special-rehearsal',
    details: 'Dress rehearsal',
    time: '9:00 PM – 12:00 PM',
    location: 'Conn Center'
  },
{
    date: '2026-12-06T12:00',
    title: 'CONCERT - CLASSIC CHRISTMAS',
    type: 'concert',
    details: "Program TBA",
    time: '3:00 PM',
    location: 'Conn Center',
    note: 'Call time: 2 PM<br>Attire: Tuxedo for men, and all-black for women',
  },
// ── JANUARY 2027 ──────────────────────────────────────────
  {
    date: '2027-01-13T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-01-18T12:00',
    title: 'NO CLASSES (MLK DAY)',
    type: ' ',
    details: 'NO CLASSES (MLK DAY)'
  },
 {
    date: '2027-01-20T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
 {
    date: '2027-01-25T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
 {
    date: '2027-01-27T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-01-31T12:00',
    title: 'Convocation',
    type: ' ',
    details: 'Convocation'
  },
// ── FEBRUARY 2027 ──────────────────────────────────────────
  {
    date: '2027-02-01T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
 {
    date: '2027-02-03T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
 {
    date: '2027-02-07T12:00',
    title: 'Dress Rehearsal',
    type: 'special-rehearsal',
    details: 'Dress rehearsal',
    time: '3:00 PM – 6:00 PM',
    location: 'Pangle Hall'
  },
{
    date: '2027-02-08T12:00',
    title: 'CONCERT - Concerto Competition Winners',
    type: 'concert',
    details: "Program TBA",
    time: '7:30 PM',
    location: 'Pangle Hall',
    note: 'Call time: 7 PM<br>Attire: All-black',
  },
{
    date: '2027-02-10T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-02-15T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-02-17T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-02-22T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-02-24T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
// ── MARCH 2027 ──────────────────────────────────────────
  {
    date: '2027-03-01T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-03-03T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-03-08T12:00',
    title: 'NO CLASS (SPRING BREAK)',
    type: ' ',
    details: 'NO CLASS (SPRING BREAK)'
  },
{
    date: '2027-03-09T12:00',
    title: 'NO CLASS (SPRING BREAK)',
    type: ' ',
    details: 'NO CLASS (SPRING BREAK)'
  },
{
    date: '2027-03-10T12:00',
    title: 'NO CLASS (SPRING BREAK)',
    type: ' ',
    details: 'NO CLASS (SPRING BREAK)'
  },
{
    date: '2027-03-11T12:00',
    title: 'NO CLASS (SPRING BREAK)',
    type: ' ',
    details: 'NO CLASS (SPRING BREAK)'
  },
{
    date: '2027-03-12T12:00',
    title: 'NO CLASS (SPRING BREAK)',
    type: ' ',
    details: 'NO CLASS (SPRING BREAK)'
  },
{
    date: '2027-03-15T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-03-17T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-03-22T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-03-24T12:00',
    title: 'Late Rehearsal',
    type: 'special-rehearsal',
    details: 'Late rehearsal',
    time: '5:00 PM – 7:00 PM',
    location: 'Pangle Hall'
  },
{
    date: '2027-03-26T12:00',
    title: 'NO CLASS (GOOD FRIDAY)',
    type: ' ',
    details: 'NO CLASS (GOOD FRIDAY)'
  },
{
    date: '2027-03-28T12:00',
    title: 'EASTER',
    type: ' ',
    details: 'EASTER'
  },
{
    date: '2027-03-29T12:00',
    title: 'NO CLASS',
    type: ' ',
    details: 'NO CLASS'
  },
{
    date: '2027-03-31T12:00',
    title: 'Dress Rehearsal',
    type: 'special-rehearsal',
    details: 'Dress rehearsal',
    time: '5:00 PM – 7:00 PM',
    location: 'Pangle Hall'
  },
// ── APRIL 2027 ──────────────────────────────────────────

{
    date: '2027-04-01T12:00',
    title: 'ORCHESTRA CONCERT',
    type: 'concert',
    details:'Beethoven – Egmont Overture\nDebussy – Petite Suite\n— Intermission —\nBrahms – Symphony No. 1 in C minor, Op. 68',
    time: '7:30 PM',
    location: 'Pangle Hall',
    note: 'Call time: 7 PM<br>Attire: All-black',
  },
 {
    date: '2027-03-02T12:00',
    title: 'Lee Day',
    type: ' ',
    details: 'Lee Day'
  },
{
    date: '2027-03-03T12:00',
    title: 'Lee Day',
    type: ' ',
    details: 'Lee Day'
  },

 {
    date: '2027-04-05T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-04-07T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-04-12T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-04-14T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-04-19T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-04-21T12:00',
    title: 'Rehearsal',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'IRR'
  },
{
    date: '2027-04-22T12:00',
    title: 'Masterworks TBC',
    type: 'rehearsal',
    details: 'Regular rehearsal',
    time: '3:35 PM – 5:30 PM',
    location: 'Conn Center'
  },
{
    date: '2027-04-23T12:00',
    title: 'Masterworks TBC',
    type: 'concert',
    details: 'Concert',
    time: 'TBC',
    location: 'Conn Center'
  },


   
];

 // Define season boundaries
const seasonStart = new Date(2026, 7, 1);  // August 1, 2026
const seasonEnd   = new Date(2027, 3, 30); // April 30, 2027

// Get real current date
let today = new Date();

// Clamp the date inside the season
if (today < seasonStart) today = seasonStart;
if (today > seasonEnd)   today = seasonEnd;

/* ---------- CALENDAR STATE ---------- */
let calYear = today.getFullYear();
let calMonth = today.getMonth();

/* ---------- CALENDAR RENDER ---------- */
function renderCalendar() {
  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  document.getElementById('calMonthTitle').textContent =
    `${monthNames[calMonth]} ${calYear}`;

  const container = document.getElementById('calDays');
  container.innerHTML = '';

  const firstDay = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

 

  // Build event lookup map
  const eventMap = {};
  SEASON_EVENTS.forEach(ev => {
    const d = new Date(ev.date);
    if (d.getFullYear() === calYear && d.getMonth() === calMonth) {
      const key = d.getDate();
      if (!eventMap[key]) eventMap[key] = [];
      eventMap[key].push(ev);
    }
  });

  // Blank cells before first day
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-day empty';
    blank.innerHTML = '<span class="cal-day-num"></span>';
    container.appendChild(blank);
  }

  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    const isToday = (d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear());
    const events = eventMap[d] || [];

    cell.className = 'cal-day' + (isToday ? ' today' : '') + (events.length ? ' has-event' : '');
    cell.innerHTML = `<span class="cal-day-num">${d}</span>`;

    // Show up to 2 event pills
    events.slice(0, 2).forEach(ev => {
      const dot = document.createElement('div');
      dot.className = `cal-event-dot ${ev.type}`;
      dot.textContent = ev.title;
      cell.appendChild(dot);
    });
    if (events.length > 2) {
      const more = document.createElement('div');
      more.className = 'cal-event-dot rehearsal';
      more.textContent = `+${events.length - 2} more`;
      cell.appendChild(more);
    }

    if (events.length) {
      cell.addEventListener('click', () => openEventPanel(events));
    }
    container.appendChild(cell);
  }

  renderEventsList();
}

function openEventPanel(events) {
  const panel = document.getElementById('eventPanel');
  const content = document.getElementById('panelContent');
  content.innerHTML = events.map(ev => {
    const d = new Date(ev.date);
    const dateStr = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return `
      <div style="margin-bottom:1.5rem;">
        <div class="panel-date">${dateStr}${ev.time ? ' · ' + ev.time : ''}</div>
        <h3>${ev.title}</h3>
        ${ev.location ? `<p style="font-size:0.8rem;color:var(--gold);margin:.25rem 0 .5rem;">${ev.location}</p>` : ''}
        <p style="white-space:pre-line;font-size:.9rem;">${ev.details}</p>
        ${ev.note ? `<p style="font-size:.75rem;color:var(--gold);margin-top:.5rem;">${ev.note}</p>` : ''}
      </div>
    `;
  }).join('<hr style="border-color:rgba(255,255,255,0.08);margin:1rem 0;">');
  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeEventPanel() {
  document.getElementById('eventPanel').style.display = 'none';
}

function renderEventsList() {
  const list = document.getElementById('eventsList');
  list.innerHTML = '';
  const monthEvents = SEASON_EVENTS.filter(ev => {
    const d = new Date(ev.date);
    return d.getFullYear() === calYear && d.getMonth() === calMonth;
  });

  if (monthEvents.length === 0) {
    list.innerHTML = '<p style="color:rgba(240,235,224,0.4);font-size:.9rem;">No events this month.</p>';
    return;
  }

  monthEvents.forEach(ev => {
    const d = new Date(ev.date);
    const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = d.getDate();
    const item = document.createElement('div');
    item.className = 'event-list-item';
    item.innerHTML = `
      <div class="eli-date">
        <div class="eli-date-month">${month}</div>
        <div class="eli-date-day">${day}</div>
      </div>
      <div class="eli-info">
        <h4>${ev.title}</h4>
        <p>${ev.time || ''} ${ev.location ? '· ' + ev.location : ''}</p>
        <span class="eli-type ${ev.type}">${ev.type.charAt(0).toUpperCase() + ev.type.slice(1)}</span>
      </div>
    `;
    item.addEventListener('click', () => openEventPanel([ev]));
    list.appendChild(item);
  });
}

/* ---------- MONTH PICKER ---------- */
const SEASON_MONTHS = [
  { year: 2026, month: 7  }, // August
  { year: 2026, month: 8  }, // September
  { year: 2026, month: 9  }, // October
  { year: 2026, month: 10 }, // November
  { year: 2026, month: 11 }, // December
  { year: 2027, month: 0  }, // January
  { year: 2027, month: 1  }, // February
  { year: 2027, month: 2  }, // March
  { year: 2027, month: 3  }, // April
];

function toggleMonthPicker() {
  const dropdown = document.getElementById('monthPickerDropdown');
  const display = document.getElementById('calMonthDisplay');
  const isOpen = dropdown.style.display !== 'none';

  if (isOpen) {
    dropdown.style.display = 'none';
    display.classList.remove('picker-open');
  } else {
    buildMonthPicker();
    dropdown.style.display = 'block';
    display.classList.add('picker-open');
  }
}

function buildMonthPicker() {
  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  // Count events per month
  const countMap = {};
  SEASON_EVENTS.forEach(ev => {
    const d = new Date(ev.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    countMap[key] = (countMap[key] || 0) + 1;
  });

  const inner = document.getElementById('monthPickerInner');
  inner.innerHTML = '';

  let lastYear = null;
  SEASON_MONTHS.forEach(({ year, month }) => {
    // Year divider
    if (lastYear !== null && year !== lastYear) {
      const divider = document.createElement('div');
      divider.className = 'mpd-divider';
      inner.appendChild(divider);
    }
    lastYear = year;

    const key = `${year}-${month}`;
    const count = countMap[key] || 0;
    const isActive = (year === calYear && month === calMonth);

    const item = document.createElement('div');
    item.className = `mpd-item ${isActive ? 'mpd-active' : ''} ${count > 0 ? 'mpd-has-events' : 'mpd-no-events'}`;
    item.innerHTML = `
      <span class="mpd-month-name">${monthNames[month]}</span>
      <span class="mpd-year-label">${year}</span>
    `;
    item.addEventListener('click', () => {
      calYear = year;
      calMonth = month;
      closeEventPanel();
      renderCalendar();
      // Close picker
      document.getElementById('monthPickerDropdown').style.display = 'none';
      document.getElementById('calMonthDisplay').classList.remove('picker-open');
    });
    inner.appendChild(item);
  });
}

// Close picker when clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('monthPickerDropdown');
  const display = document.getElementById('calMonthDisplay');
  if (!dropdown || !display) return;
  if (!display.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
    display.classList.remove('picker-open');
  }
});


/* ---------- CALENDAR NAV BUTTONS ---------- */
document.getElementById('prevMonth').addEventListener('click', () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  closeEventPanel();
  renderCalendar();
  document.getElementById('monthPickerDropdown').style.display = 'none';
  document.getElementById('calMonthDisplay').classList.remove('picker-open');
});

document.getElementById('nextMonth').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  closeEventPanel();
  renderCalendar();
  document.getElementById('monthPickerDropdown').style.display = 'none';
  document.getElementById('calMonthDisplay').classList.remove('picker-open');
});



/* ---------- RECORDINGS DRILL-DOWN ---------- */
const RECORDINGS_DATA = {
  concert1: {
    label: 'Concert One',
    date: 'October 15, 2026',
    pieces: [
      {
        composer: 'Richard Wagner',
        title: 'Die Meistersinger von Nürnberg – Vorspiel',
        full: ' ',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=fDIkzHjHRhI&list=RDfDIkzHjHRhI&start_radio=1'
      },
      {
        composer: 'Augusta Mary Anne Holmès',
        title: 'La nuit et l\'amour',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=lD1umjEZz38&list=RDlD1umjEZz38&start_radio=1'
      },
      {
        composer: 'Hector Berlioz',
        title: 'Roman Carnival Overture, Op. 9',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=j_3YoeLz7Rc&list=RDj_3YoeLz7Rc&start_radio=1'
      },
           {
        composer: 'Samuel Coleridge-Taylor',
        title: 'The Bamboula, Op. 75',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=L4tdmChlkgs&list=RDL4tdmChlkgs&start_radio=1'
      },
      {
        composer: 'Nikolai Rimsky-Korsakov',
        title: 'Russian Easter Festival, Op. 38',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=yak5D-6BKn0&list=RDyak5D-6BKn0&start_radio=1'
      },
    ]
  },
  concert2: {
    label: 'Concert Two',
    date: 'April 1, 2027',
    pieces: [
      {
        composer: 'Ludwig Van Beethoven',
        title: 'Egmont Overture, Op. 84',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=9cD4IR7-Hd0&list=RD9cD4IR7-Hd0&start_radio=1'
      },
      {
        composer: 'Claude Debussy',
        title: 'Petite Suite',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=J_kiMeYKJbY&list=RDJ_kiMeYKJbY&start_radio=1'
      },
           {
        composer: 'Brahms',
        title: 'Symphony No. 1 in C minor, Op. 68',
        full: ' <br>',
        linkText: 'Listen',
        url: 'https://www.youtube.com/watch?v=51xDbdUFc8o&list=RD51xDbdUFc8o&start_radio=1'
      },
    ]
  }
};

function recNav(concertId) {
  const concert = RECORDINGS_DATA[concertId];
  const bc = document.getElementById('recBreadcrumb');

  bc.innerHTML = `
    <span class="bc-item" onclick="recNavHome()">Concerts</span>
    <span class="bc-sep">›</span>
    <span class="bc-item bc-active">${concert.label}</span>`;

  document.getElementById('recLevelTitle').textContent = concert.label + ' · ' + concert.date;

  const grid = document.getElementById('recGrid');
  grid.innerHTML = concert.pieces.map(p => {
    if (p.intermission) return `
      <div class="recording-card intermission-card">
        <span class="intermission-label">— Intermission —</span>
      </div>`;
    return `
      <div class="recording-card">
        <div class="rec-composer">${p.composer}</div>
        <h3 class="rec-title">${p.title}</h3>
        <p class="rec-full">${p.full}</p>
        <a href="${p.url}" target="_blank" class="rec-link">
          <span class="rec-icon">▶</span>
          ${p.linkText}
        </a>
      </div>`;
  }).join('');

  document.getElementById('recLevel-concerts').style.display = 'none';
  document.getElementById('recLevel-recordings').style.display = 'block';
}

function recNavHome() {
  document.getElementById('recBreadcrumb').innerHTML =
    `<span class="bc-item bc-active">Concerts</span>`;
  document.getElementById('recLevel-recordings').style.display = 'none';
  document.getElementById('recLevel-concerts').style.display = 'block';
}

/* Reset recordings to concerts list when page is opened */
const _origShowPageRec = window.showPage;
window.showPage = function(id) {
  _origShowPageRec(id);
  if (id === 'recordings') recNavHome();
};

/* ---------- CONTACT FORM ---------- */
function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value;
  const message = form.message.value.trim();

  // Build mailto link
  const to = 'lrosario@leeuniversity.edu';
  const mailSubject = encodeURIComponent(`[Orchestra Website] ${subject} – ${fname} ${lname}`);
  const body = encodeURIComponent(
    `Name: ${fname} ${lname}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
  );
  const mailtoLink = `mailto:${to}?subject=${mailSubject}&body=${body}`;

  // Open default mail client
  window.location.href = mailtoLink;

  // Show success state
  setTimeout(() => {
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 600);
}

/* ============================================================
   MUSIC SCORES — DRILL-DOWN NAVIGATION
   ============================================================
   File path pattern:
   assets/Sheet Music/Sheet Music/[Piece folder]/[filename].pdf
   ============================================================ */

const SCORES_DATA = {
  concert1: {
    label: 'Concert I',
    date: 'October 15, 2026',
    pieces: [
      {
        id: 'wagner',
        composer: 'Wagner',
        title: 'Die Meistersinger von Nürnberg – Vorspiel',
        concert: 'Concert 1',
        folder: 'Wagner',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1',         file: 'Woodwinds/Die_Meistersinger_Flute_1.pdf' },
          { family: 'Woodwinds', name: 'Flute 2',         file: 'Woodwinds/Die_Meistersinger_Flute_2.pdf' },
          { family: 'Woodwinds', name: 'Flute 3',         file: 'Woodwinds/Die_Meistersinger_Flute_3.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1',          file: 'Woodwinds/Die_Meistersinger_Oboe_1.pdf' },
          { family: 'Woodwinds', name: 'Oboe 2',          file: 'Woodwinds/Die_Meistersinger_Oboe_2.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1',      file: 'Woodwinds/Die_Meistersinger_Clarinet_1.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2',      file: 'Woodwinds/Die_Meistersinger_Clarinet_2.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1',       file: 'Woodwinds/Die_Meistersinger_Bassoon_1.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 2',       file: 'Woodwinds/Die_Meistersinger_Bassoon_2.pdf' },
          { family: 'Brass',     name: 'Horn 1',          file: 'Brass/Die_Meistersinger_Horn_1.pdf' },
          { family: 'Brass',     name: 'Horn 2',          file: 'Brass/Die_Meistersinger_Horn_2.pdf' },
          { family: 'Brass',     name: 'Horn 3',          file: 'Brass/Die_Meistersinger_Horn_3.pdf' },
          { family: 'Brass',     name: 'Horn 4',          file: 'Brass/Die_Meistersinger_Horn_4.pdf' },
          { family: 'Brass',     name: 'Trumpet 1',       file: 'Brass/Die_Meistersinger_Trumpet_1.pdf' },
          { family: 'Brass',     name: 'Trumpet 2',       file: 'Brass/Die_Meistersinger_Trumpet_2.pdf' },
          { family: 'Brass',     name: 'Trumpet 3',       file: 'Brass/Die_Meistersinger_Trumpet_3.pdf' },
          { family: 'Brass',     name: 'Trombone 1',      file: 'Brass/Die_Meistersinger_Trombone_1.pdf' },
          { family: 'Brass',     name: 'Trombone 2',      file: 'Brass/Die_Meistersinger_Trombone_2.pdf' },
          { family: 'Brass',     name: 'Trombone 3',      file: 'Brass/Die_Meistersinger_Trombone_3.pdf' },
          { family: 'Brass',     name: 'Tuba',            file: 'Brass/Die_Meistersinger_Tuba.pdf' },
          { family: 'Percussion', name: 'Timpani',         file: 'Percussion/Die_Meistersinger_Timpani.pdf' },
          { family: 'Percussion', name: 'Cymbals',         file: 'Percussion/Die_Meistersinger_Cymbals.pdf' },
          { family: 'Percussion', name: 'Triangle',        file: 'Percussion/Die_Meistersinger_Triangle.pdf' },
          { family: 'Strings',    name: 'Harp',            file: 'Strings/Die_Meistersinger_Harp.pdf' },
          { family: 'Strings',    name: 'Violin I',        file: 'Strings/Die Meistersinger Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',       file: 'Strings/Die Meistersinger Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',           file: 'Strings/Die Meistersinger Viola.pdf' },
          { family: 'Strings',    name: 'Cello',           file: 'Strings/Die Meistersinger Cello.pdf' },
          { family: 'Strings',    name: 'Bass',            file: 'Strings/Die Meistersinger Bass.pdf' },
        ]
      },
      {
        id: 'holmes',
        composer: 'Holmès',
        title: 'La nuit et l\'amour',
        concert: 'Concert 1',
        folder: 'Holmes',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1 & 2',     file: 'Woodwinds/Holmes_Flute 1 and 2.pdf' },
          { family: 'Woodwinds', name: 'Piccolo',          file: 'Woodwinds/Holmes_Piccolo.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1 & 2',      file: 'Woodwinds/Holmes_Oboe 1 and 2.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 & 2',  file: 'Woodwinds/Holmes_Clarinet 1 and 2.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1 & 2',   file: 'Woodwinds/Holmes_Bassoon 1 and 2.pdf' },
          { family: 'Brass',     name: 'Horn 1 & 2',      file: 'Brass/Holmes_Horns 1 and 2.pdf' },
          { family: 'Brass',     name: 'Horn 3 & 4',      file: 'Brass/Holmes_Horns 3 and 4.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 & 2',   file: 'Brass/Holmes_Trumpet 1 and 2.pdf' },
          { family: 'Percussion', name: 'Timpani',         file: 'Percussion/Holmes_Timpani.pdf' },
          { family: 'Strings',    name: 'Harp',            file: 'Strings/Holmes_Harp.pdf' },
          { family: 'Strings',    name: 'Violin I',        file: 'Strings/Holmes- Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',       file: 'Strings/Holmes - Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',           file: 'Strings/Holmes - Viola.pdf' },
          { family: 'Strings',    name: 'Cello',           file: 'Strings/Holmes - Cello.pdf' },
          { family: 'Strings',    name: 'Bass',            file: 'Strings/Holmes - Bass.pdf' },
        ]
      },
      {
        id: 'berlioz',
        composer: 'Berlioz',
        title: 'Le carnaval romain, Op. 9',
        concert: 'Concert 1',
        folder: 'Berlioz',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1',                  file: 'Woodwinds/Berlioz-RomanCarnivalOv.Flute 1.pdf' },
          { family: 'Woodwinds', name: 'Flute 2 & Piccolo',        file: 'Woodwinds/Berlioz-RomanCarnivalOv.Flute 2_&_picc.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1',                   file: 'Woodwinds/Berlioz-RomanCarnivalOv.Oboe 1.pdf' },
          { family: 'Woodwinds', name: 'Oboe 2 & English Horn',    file: 'Woodwinds/Berlioz-RomanCarnivalOv.Oboe 2_&_Eng_Horn.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 in A',          file: 'Woodwinds/Berlioz-RomanCarnivalOv.Clarinet 1 in A.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 in Bb',         file: 'Woodwinds/Berlioz-RomanCarnivalOv.Clarinet 1 in Bb.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2 in A',          file: 'Woodwinds/Berlioz-RomanCarnivalOv.Clarinet 2 in A.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2 in Bb',         file: 'Woodwinds/Berlioz-RomanCarnivalOv.Clarinet 2 in Bb.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1',                file: 'Woodwinds/Berlioz-RomanCarnivalOv.Bassoon 1.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 2',                file: 'Woodwinds/Berlioz-RomanCarnivalOv.Bassoon 2.pdf' },
          { family: 'Brass',     name: 'Horn 1 in C',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 1 in C.pdf' },
          { family: 'Brass',     name: 'Horn 1 in F',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 1 in F.pdf' },
          { family: 'Brass',     name: 'Horn 2 in C',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 2 in C.pdf' },
          { family: 'Brass',     name: 'Horn 2 in F',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 2 in F.pdf' },
          { family: 'Brass',     name: 'Horn 3 in E',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 3 in E.pdf' },
          { family: 'Brass',     name: 'Horn 3 in F',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 3 in F.pdf' },
          { family: 'Brass',     name: 'Horn 4 in E',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 4 in E.pdf' },
          { family: 'Brass',     name: 'Horn 4 in F',              file: 'Brass/Berlioz-RomanCarnivalOv.Horn 4 in F.pdf' },
          { family: 'Brass',     name: 'Cornet 1 in A',            file: 'Brass/Berlioz-RomanCarnivalOv.Cornet 1 in A.pdf' },
          { family: 'Brass',     name: 'Cornet 1 in Bb',           file: 'Brass/Berlioz-RomanCarnivalOv.Cornet 1 in Bb.pdf' },
          { family: 'Brass',     name: 'Cornet 2 in A',            file: 'Brass/Berlioz-RomanCarnivalOv.Cornet 2 in A.pdf' },
          { family: 'Brass',     name: 'Cornet 2 in Bb',           file: 'Brass/Berlioz-RomanCarnivalOv.Cornet 2 in Bb.pdf' },
          { family: 'Brass',     name: 'Trombone 1 (Alto Clef)',   file: 'Brass/Berlioz-RomanCarnivalOv.Trombone 1_Alto Clef.pdf' },
          { family: 'Brass',     name: 'Trombone 1 (Bass Clef)',   file: 'Brass/Berlioz-RomanCarnivalOv.Trombone 1_Bass Clef.pdf' },
          { family: 'Brass',     name: 'Trombone 2',               file: 'Brass/Berlioz-RomanCarnivalOv.Trombone 2.pdf' },
          { family: 'Brass',     name: 'Trombone 3',               file: 'Brass/Berlioz-RomanCarnivalOv.Trombone 3.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 in Bb',          file: 'Brass/Berlioz-RomanCarnivalOv.Trumpet 1 in Bb.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 in D',           file: 'Brass/Berlioz-RomanCarnivalOv.Trumpet 1 in D.pdf' },
          { family: 'Brass',     name: 'Trumpet 2 in Bb',          file: 'Brass/Berlioz-RomanCarnivalOv.Trumpet 2 in Bb.pdf' },
          { family: 'Brass',     name: 'Trumpet 2 in D',           file: 'Brass/Berlioz-RomanCarnivalOv.Trumpet 2 in D.pdf' },
          { family: 'Percussion', name: 'Timpani',                  file: 'Percussion/Berlioz-RomanCarnivalOv.Timpani.pdf' },
          { family: 'Percussion', name: 'Cymbals',                  file: 'Percussion/Berlioz-RomanCarnivalOv.Cymbals.pdf' },
          { family: 'Percussion', name: 'Tambourine 1 & 2',         file: 'Percussion/Berlioz-RomanCarnivalOv.Tambourine 1 and 2.pdf' },
          { family: 'Percussion', name: 'Triangle',                 file: 'Percussion/Berlioz-RomanCarnivalOv.Triangle.pdf' },
          { family: 'Strings',    name: 'Violin I',                 file: 'Strings/Berlioz - Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',                file: 'Strings/Berlioz - Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',                    file: 'Strings/Berlioz - Viola.pdf' },
          { family: 'Strings',    name: 'Cello',                    file: 'Strings/Berlioz - Cello.pdf' },
          { family: 'Strings',    name: 'Bass',                     file: 'Strings/Berlioz - Bass.pdf' },
        ]
      },
      {
        id: 'coleridge',
        composer: 'Coleridge-Taylor',
        title: 'The Bamboula, Op. 75',
        concert: 'Concert 1',
        folder: 'Coleridge-Taylor',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1',           file: 'Woodwinds/CT-Bamboula_Flute 1.pdf' },
          { family: 'Woodwinds', name: 'Flute 2',           file: 'Woodwinds/CT-Bamboula_Flute 2.pdf' },
          { family: 'Woodwinds', name: 'Piccolo',           file: 'Woodwinds/CT-Bamboula_Piccolo.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1',            file: 'Woodwinds/CT-Bamboula_Oboe 1.pdf' },
          { family: 'Woodwinds', name: 'Oboe 2',            file: 'Woodwinds/CT-Bamboula_Oboe 2.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 in A',   file: 'Woodwinds/CT-Bamboula_Clarinet 1 in A.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 in Bb',  file: 'Woodwinds/CT-Bamboula_Clarinet 1 in Bb.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2 in A',   file: 'Woodwinds/CT-Bamboula_Clarinet 2 in A.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2 in Bb',  file: 'Woodwinds/CT-Bamboula_Clarinet 2 in Bb.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1',         file: 'Woodwinds/CT-Bamboula_Bassoon 1.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 2',         file: 'Woodwinds/CT-Bamboula_Bassoon 2.pdf' },
          { family: 'Brass',     name: 'Horn 1',            file: 'Brass/CT-Bamboula_Horn 1.pdf' },
          { family: 'Brass',     name: 'Horn 2',            file: 'Brass/CT-Bamboula_Horn 2.pdf' },
          { family: 'Brass',     name: 'Horn 3',            file: 'Brass/CT-Bamboula_Horn 3.pdf' },
          { family: 'Brass',     name: 'Horn 4',            file: 'Brass/CT-Bamboula_Horn 4.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 in Bb',   file: 'Brass/CT-Bamboula_Trumpet 1 in Bb.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 in F',    file: 'Brass/CT-Bamboula_Trumpet 1 in F.pdf' },
          { family: 'Brass',     name: 'Trumpet 2 in Bb',   file: 'Brass/CT-Bamboula_Trumpet 2 in Bb.pdf' },
          { family: 'Brass',     name: 'Trumpet 2 in F',    file: 'Brass/CT-Bamboula_Trumpet 2 in F.pdf' },
          { family: 'Brass',     name: 'Trombone 1',        file: 'Brass/CT-Bamboula_Trombone 1.pdf' },
          { family: 'Brass',     name: 'Trombone 2',        file: 'Brass/CT-Bamboula_Trombone 2.pdf' },
          { family: 'Brass',     name: 'Trombone 3',        file: 'Brass/CT-Bamboula_Trombone 3.pdf' },
          { family: 'Brass',     name: 'Tuba',              file: 'Brass/CT-Bamboula_Tuba.pdf' },
          { family: 'Percussion', name: 'Timpani',           file: 'Percussion/CT_Bamboula_Timpani.pdf' },
          { family: 'Percussion', name: 'Bass Drum & Cymbals', file: 'Percussion/CT_Bamboula_Bass Drums & Cymbals.pdf' },
          { family: 'Percussion', name: 'Triangle',          file: 'Percussion/CT_Bamboula_Triangle.pdf' },
          { family: 'Strings',    name: 'Violin I',          file: 'Strings/CT-Bamboula - Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',         file: 'Strings/CT-Bamboula - Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',             file: 'Strings/CT-Bamboula - Viola.pdf' },
          { family: 'Strings',    name: 'Cello',             file: 'Strings/CT-Bamboula - Cello.pdf' },
          { family: 'Strings',    name: 'Bass',              file: 'Strings/CT-Bamboula - Bass.pdf' },
        ]
      },
      {
        id: 'rimsky',
        composer: 'Rimsky-Korsakov',
        title: 'Russian Easter Festival Overture, Op. 36',
        concert: 'Concert 1',
        folder: 'Korsakov',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1',          file: 'Woodwinds/Rimsky-Op36.Flute 1.pdf' },
          { family: 'Woodwinds', name: 'Flute 2',          file: 'Woodwinds/Rimsky-Op36.Flute 2.pdf' },
          { family: 'Woodwinds', name: 'Flute 3',          file: 'Woodwinds/Rimsky-Op36.Flute 3.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1',           file: 'Woodwinds/Rimsky-Op36.Oboe 1.pdf' },
          { family: 'Woodwinds', name: 'Oboe 2',           file: 'Woodwinds/Rimsky-Op36.Oboe 2.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 in C',  file: 'Woodwinds/Rimsky-Op36.Clarinet 1 in C.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2 in C',  file: 'Woodwinds/Rimsky-Op36.Clarinet 2 in C.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1',        file: 'Woodwinds/Rimsky-Op36.Bassoon 1.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 2',        file: 'Woodwinds/Rimsky-Op36.Bassoon 2.pdf' },
          { family: 'Brass',     name: 'Horn 1',           file: 'Brass/Rimsky-Op36.Horn 1.pdf' },
          { family: 'Brass',     name: 'Horn 2',           file: 'Brass/Rimsky-Op36.Horn 2.pdf' },
          { family: 'Brass',     name: 'Horn 3',           file: 'Brass/Rimsky-Op36.Horn 3.pdf' },
          { family: 'Brass',     name: 'Horn 4',           file: 'Brass/Rimsky-Op36.Horn 4.pdf' },
          { family: 'Brass',     name: 'Trumpet 1',        file: 'Brass/Rimsky-Op36.Trumpet 1.pdf' },
          { family: 'Brass',     name: 'Trumpet 2',        file: 'Brass/Rimsky-Op36.Trumpet 2.pdf' },
          { family: 'Brass',     name: 'Trumpet 3',        file: 'Brass/Rimsky-Op36.Trumpet 3.pdf' },
          { family: 'Brass',     name: 'Trombone 1',       file: 'Brass/Rimsky-Op36.Trombone 1.pdf' },
          { family: 'Brass',     name: 'Trombone 2',       file: 'Brass/Rimsky-Op36.Trombone 2.pdf' },
          { family: 'Brass',     name: 'Tuba',             file: 'Brass/Rimsky-Op36.Tuba.pdf' },
          { family: 'Percussion', name: 'Timpani',          file: 'Percussion/Korsakov_Timpani.pdf' },
          { family: 'Percussion', name: 'Cymbal & Bass Drum', file: 'Percussion/Korsakov_Cymbal_&_B_Drum.pdf' },
          { family: 'Percussion', name: 'Glockenspiel',     file: 'Percussion/Korsakov_Glockenspiel.pdf' },
          { family: 'Percussion', name: 'Tam-tam',          file: 'Percussion/Korsakov_Tam-tam.pdf' },
          { family: 'Percussion', name: 'Triangle',         file: 'Percussion/Korsakov_Triangle.pdf' },
          { family: 'Strings',    name: 'Harp',             file: 'Strings/Russian Easter Festival - Harp.pdf' },
          { family: 'Strings',    name: 'Violin I',         file: 'Strings/Russian Easter Festival - Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',        file: 'Strings/Russian Easter Festival - Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',            file: 'Strings/Russian Easter Festival - Viola.pdf' },
          { family: 'Strings',    name: 'Cello',            file: 'Strings/Russian Easter Festival - Cello.pdf' },
          { family: 'Strings',    name: 'Bass',             file: 'Strings/Russian Easter Festival - Bass.pdf' },
        ]
      },
    ]
  },
  concert2: {
    label: 'Concert II',
    date: 'April 1, 2027',
    pieces: [
      {
        id: 'beethoven',
        composer: 'Beethoven',
        title: 'Egmont Overture, Op. 84',
        concert: 'Concert 2',
        folder: 'Beethoven',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1',          file: 'Woodwinds/Beethoven - Flute 2.pdf' },
          { family: 'Woodwinds', name: 'Flute 2 & piccolo',          file: 'Woodwinds/Beethoven - Flute 2 & picc.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1',           file: 'Woodwinds/Beethoven - Oboe 1.pdf' },
          { family: 'Woodwinds', name: 'Oboe 2',           file: 'Woodwinds/Beethoven - Oboe 2.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1',  file: 'Woodwinds/Beethoven - Clarinet 1.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 2',  file: 'Woodwinds/Beethoven - Clarinet 2.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1',        file: 'Woodwinds/Beethoven - Bassoon 1.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 2',        file: 'Woodwinds/Beethoven - Bassoon 2.pdf' },
          { family: 'Brass',     name: 'Horn 1',           file: 'Brass/Beethoven - Horn 1.pdf' },
          { family: 'Brass',     name: 'Horn 2',           file: 'Brass/Beethoven - Horn 2.pdf' },
          { family: 'Brass',     name: 'Horn 3 in E-flat',           file: 'Brass/Beethoven - Horn 3 in E-flat.pdf' },
          { family: 'Brass',     name: 'Horn 4 in E-flat',           file: 'Brass/Beethoven - Horn 4 in E-flat.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 in F',        file: 'Brass/Beethoven - Trumpet 1 in F.pdf' },
          { family: 'Brass',     name: 'Trumpet 2 in F',        file: 'Brass/Beethoven - Trumpet 2 in F.pdf' },
          { family: 'Percussion', name: 'Timpani',          file: 'Percussion/Beethoven - Timpani.pdf' },
          { family: 'Strings',    name: 'Violin I',         file: 'Strings/Beethoven - Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',        file: 'Strings/Beethoven - Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',            file: 'Strings/Beethoven - Viola.pdf' },
          { family: 'Strings',    name: 'Cello',            file: 'Strings/Beethoven - Cello.pdf' },
          { family: 'Strings',    name: 'Bass',             file: 'Strings/Beethoven - Bass.pdf' },        
        ]  
      },
      {
        id: 'debussy',
        composer: 'Debussy',
        title: 'Petite Suite',
        concert: 'Concert 2',
        folder: 'Debussy',
        parts: [
          { family: 'Woodwinds', name: 'Flute 1 & 2',          file: 'Woodwinds/Debussy - Flute 1 & 2.pdf' },
          { family: 'Woodwinds', name: 'Oboe 1 & 2',           file: 'Woodwinds/Debussy - Oboe 1 & 2.pdf' },
          { family: 'Woodwinds', name: 'Clarinet 1 & 2',  file: 'Woodwinds/Debussy - Clarinet 1 & 2.pdf' },
          { family: 'Woodwinds', name: 'Bassoon 1 & 2',        file: 'Woodwinds/Debussy - Bassoon 1 & 2.pdf' },
          { family: 'Brass',     name: 'Horn 1 & 2',           file: 'Brass/Debussy - Horn 1 & 2.pdf' },
          { family: 'Brass',     name: 'Trumpet 1 & 2 in C',        file: 'Brass/Debussy - Trumpet 1 & 2 in C.pdf' },
          { family: 'Percussion', name: 'Timpani',          file: 'Percussion/Debussy - Timpani.pdf' },
           { family: 'Percussion', name: 'Cymbals',          file: 'Percussion/Debussy - Cymbals.pdf' },
           { family: 'Percussion', name: 'Tambourine',          file: 'Percussion/Debussy - Tambourine.pdf' },
           { family: 'Percussion', name: 'Trinagle',          file: 'Percussion/Debussy - Triangle.pdf' },
          { family: 'Strings',    name: 'Violin I',         file: 'Strings/Debussy - Violin 1.pdf' },
          { family: 'Strings',    name: 'Violin II',        file: 'Strings/Debussy - Violin 2.pdf' },
          { family: 'Strings',    name: 'Viola',            file: 'Strings/Debussy - Viola.pdf' },
          { family: 'Strings',    name: 'Cello',            file: 'Strings/Debussy - Cello.pdf' },
          { family: 'Strings',    name: 'Bass',             file: 'Strings/Debussy - Bass.pdf' },                
        ]  
      },
      {
        id: 'brahms',
        composer: 'Brahms',
        title: 'Symphony No. 1 in C minor, Op. 68',
        concert: 'Concert 2',
        folder: 'Brahms',
        parts: []  // ⚠️ No files uploaded yet for Concert 2 — add when available
      },
    ]
  }
};

function toggleScoresFamily(header) {
  const block = header.closest('.scores-family-block');
  block.classList.toggle('sf-open');
}

/* Scores state */
let scoresState = { concert: null, piece: null };

function scoresNav(level, id) {
  const bc = document.getElementById('scoresBreadcrumb');

  // Hide all levels
  document.querySelectorAll('.scores-level').forEach(el => el.style.display = 'none');

  if (level === 'concerts') {
    scoresState = { concert: null, piece: null };
    bc.innerHTML = `<span class="bc-item bc-active">Concerts</span>`;
    document.getElementById('scoresLevel-concerts').style.display = 'block';

  } else if (level === 'pieces') {
    scoresState.concert = id;
    const concert = SCORES_DATA[id];
    bc.innerHTML = `
      <span class="bc-item" onclick="scoresNav('concerts')">Concerts</span>
      <span class="bc-sep">›</span>
      <span class="bc-item bc-active">${concert.label}</span>`;

    const grid = document.getElementById('scoresLevel-pieces-grid');
    grid.innerHTML = concert.pieces.map(p => `
      <div class="scores-choice-card" onclick="scoresNav('instruments','${p.id}')">
        <div class="sc-info" style="margin-left:0;">
          <span class="sc-composer">${p.composer}</span>
          <span class="sc-label">${p.title}</span>
        </div>
        <span class="sc-arrow">›</span>
      </div>`).join('');
    document.getElementById('scoresLevel-pieces').style.display = 'block';

  } else if (level === 'instruments') {
    scoresState.piece = id;
    const concert = SCORES_DATA[scoresState.concert];
    const piece = concert.pieces.find(p => p.id === id);
    bc.innerHTML = `
      <span class="bc-item" onclick="scoresNav('concerts')">Concerts</span>
      <span class="bc-sep">›</span>
      <span class="bc-item" onclick="scoresNav('pieces','${scoresState.concert}')">${concert.label}</span>
      <span class="bc-sep">›</span>
      <span class="bc-item bc-active">${piece.composer} – ${piece.title.split(',')[0]}</span>`;

    document.getElementById('scoresInstrumentTitle').textContent =
      `${piece.composer} — ${piece.title}`;

    const familyOrder = ['Woodwinds', 'Brass', 'Percussion', 'Strings'];
    const grouped = {};
    piece.parts.forEach(p => {
      if (!grouped[p.family]) grouped[p.family] = [];
      grouped[p.family].push(p);
    });

    const container = document.getElementById('scoresLevel-instruments-grid');

    if (piece.parts.length === 0) {
      container.innerHTML = `<p class="scores-empty">Parts for this piece are not yet available. Check back soon.</p>`;
    } else {
      container.innerHTML = familyOrder
        .filter(fam => grouped[fam])
        .map((fam, i) => {
          const rows = grouped[fam].map(part => {
            const path = `assets/Sheet Music/${piece.concert}/${piece.folder}/${part.file}`;
            return `
              <tr>
                <td>${part.name}</td>
                <td><a href="${encodeURI(path)}" target="_blank" class="scores-pdf-link">Open PDF</a></td>
              </tr>`;
          }).join('');
          const isOpen = i === 0; // first family open by default
          return `
            <div class="scores-family-block ${isOpen ? 'sf-open' : ''}">
              <div class="scores-family-header" onclick="toggleScoresFamily(this)">
                <span class="sf-name">${fam}</span>
                <span class="sf-count">${grouped[fam].length} part${grouped[fam].length !== 1 ? 's' : ''}</span>
                <span class="sf-caret">▾</span>
              </div>
              <div class="scores-family-body">
                <table class="scores-parts-table">
                  <thead>
                    <tr><th>Instrument</th><th>PDF</th></tr>
                  </thead>
                  <tbody>${rows}</tbody>
                </table>
              </div>
            </div>`;
        }).join('');
    }

    document.getElementById('scoresLevel-instruments').style.display = 'block';
  }
}

/* Init scores page when first opened */
const _origShowPage = showPage;
// redefine showPage so scores always resets on entry
window.showPage = function(id) {
  _origShowPage(id);
  if (id === 'scores') scoresNav('concerts');
};

// Start on home page
_origShowPage('home');

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(13,27,42,0.97)';
  } else {
    nav.style.background = 'rgba(13,27,42,0.88)';
  }
});
