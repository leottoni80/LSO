# Lee University Symphony Orchestra — Project Notes

> **Purpose:** Internal documentation for continuity across development sessions.  
> This site is a **private member portal** — not a public-facing marketing site.  
> Audience: Orchestra members who need access to scores, recordings, calendar, and contact.

---

## 1. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| HTML | Vanilla HTML5 | Single `index.html`, no build step |
| CSS | Vanilla CSS3 | Single `style.css`, CSS custom properties throughout |
| JavaScript | Vanilla ES6+ | Single `app.js`, no frameworks or libraries |
| Fonts | Google Fonts (CDN) | Cormorant Garamond + Outfit — loaded via `<link>` in `<head>` |
| Assets | Local files only | No CDN for images or PDFs; all paths are relative |
| Hosting | Static file server | Intended for local/institutional hosting (no backend, no CMS) |
| Email | `mailto:` protocol | Contact form opens native mail client; no server-side processing |

**No npm, no bundler, no framework.** Open `index.html` directly in a browser or serve from any static host.

---

## 2. Folder Structure

```
Orchestra Website/               ← root (local: C:\Users\leott\Documents\Lee University\Orchestra Website)
├── index.html                   ← entire site; all pages live here as hidden <div>s
├── style.css                    ← all styles; no external CSS except Google Fonts
├── app.js                       ← all JavaScript; navigation, calendar, scores drill-down, contact form
├── project-notes.md             ← this file
└── assets/
    ├── Symphony-Orchestra.webp  ← hero background image (loaded lazily via JS)
    └── Sheet Music/
        └── Sheet Music/         ← double-nested; matches original folder structure exactly
            ├── Holmes/          ← one subfolder per piece, named after composer
            │   ├── Holmes_Flute_1_and_2.pdf
            │   ├── Holmes_Piccolo.pdf
            │   ├── Holmes_Oboe_1_and_2.pdf
            │   ├── Holmes_Clarinet_1_and_2.pdf
            │   ├── Holmes_Bassoon_1_and_2.pdf
            │   ├── Holmes_Horns_1_and_2.pdf
            │   ├── Holmes_Horns_3_and_4.pdf
            │   ├── Holmes_Trumpet_1_and_2.pdf
            │   ├── Holmes_Timpani.pdf
            │   ├── Holmes_Harp.pdf
            │   ├── Holmes-_Violin_1.pdf     ← note: dash-underscore, not double-dash
            │   ├── Holmes_-_Violin_2.pdf
            │   ├── Holmes_-_Viola.pdf
            │   ├── Holmes_-_Cello.pdf
            │   └── Holmes_-_Bass.pdf
            ├── Wagner/
            ├── Berlioz/
            ├── Coleridge-Taylor/
            ├── Rimsky-Korsakov/
            ├── Beethoven/
            ├── Debussy/
            └── Brahms/
```

> **Note on the Holmes Violin I filename:** The actual uploaded file is `Holmes-_Violin_1.pdf` (dash then underscore), while all other strings in that piece use `Holmes_-_` (underscore dash underscore). This inconsistency is already accounted for in `app.js`. Do not "correct" it without renaming the actual file.

---

## 3. Page Architecture

All six pages are `<div id="page-[name]">` elements inside a single HTML file. Pages are shown/hidden by toggling the `.active` class via `showPage(id)` in JavaScript. There is **no routing, no URL change, no history push.** The page always loads at `index.html`.

| Page ID | Nav Label | Status |
|---|---|---|
| `home` | Home | ✅ Complete |
| `calendar` | Calendar 2026/27 | ✅ Complete — needs real data from PDF |
| `recordings` | Recordings | ✅ Complete |
| `scores` | Music Scores | ✅ Complete — filename accuracy depends on actual files |
| `schedule` | Schedule of Service | ⏳ TBA placeholder |
| `contact` | Contact | ✅ Complete |

---

## 4. Design Rules

### Aesthetic Direction
Refined dark luxury — navy and gold. Serious enough for a professional ensemble, clean enough to feel functional for a member portal. No marketing language. No catchphrases.

### Color Palette — Do Not Change These Values

```css
--gold:        #C9A84C   /* primary accent; borders, icons, labels */
--gold-light:  #E8C97A   /* hover states, <em> text, hero italic */
--gold-dark:   #9A7A2E   /* reserved; not actively used yet */
--cream:       #F5F0E8   /* primary text color on dark backgrounds */
--cream-dark:  #EAE3D5   /* reserved; not actively used yet */
--navy:        #0D1B2A   /* page background */
--navy-mid:    #1A2D42   /* section backgrounds, card hover states */
--navy-light:  #243E5A   /* page-hero-small background, event panel */
--text-light:  #F0EBE0   /* body text base */
--text-muted:  rgba(240,235,224,0.6)
--radius:      12px       /* all card border-radius */
--transition:  0.3s cubic-bezier(0.4,0,0.2,1)
```

### Card / Surface Pattern
All interactive cards follow the same three-layer system:
1. **Resting:** `background: rgba(255,255,255,0.03)` + `border: 1px solid rgba(255,255,255,0.07)`
2. **Hover:** `background: rgba(201,168,76,0.08–0.12)` + `border-color: rgba(201,168,76,0.35)`
3. **Active/selected:** gold border at full opacity

Never use solid background colors on cards — always semi-transparent overlays against the navy base.

### Spacing
- Section padding: `5rem 0` to `7rem 0` on desktop
- Container max-width: `1100px` (nav uses `1200px`)
- Container padding: `0 2rem` (collapses to `0 1rem` below 480px)

---

## 5. Typography Rules

### Font Pairing — Do Not Change

| Font | Use | Weights Used |
|---|---|---|
| **Cormorant Garamond** (serif) | All headings `h1–h3`, logo bottom, large numerals, decorative text | 300, 400, 500, 600, italic variants |
| **Outfit** (sans-serif) | Body copy, nav links, labels, buttons, UI text, logo top | 200, 300, 400, 500, 600 |

### Scale

```css
h1: clamp(2.5rem, 5vw, 4rem)       /* page titles */
h2: clamp(1.8rem, 3.5vw, 2.8rem)
h3: clamp(1.2rem, 2vw, 1.6rem)
p:  font-weight 300, line-height 1.75
```

### Special Rules
- `<em>` tags are **always gold-light** (`#E8C97A`) — this is a global rule, not just italics
- Section eyebrow labels: `0.65rem`, `letter-spacing: 0.3em`, uppercase, gold
- Nav links: `0.8rem`, `letter-spacing: 0.08em`, uppercase
- Buttons: `0.85rem`, `letter-spacing: 0.08em`, uppercase, Outfit font explicitly set
- Never use Inter, Roboto, Arial, or system-ui anywhere in this project

---

## 6. Hero Section Constraints

**This section is intentionally minimal.** The owner confirmed: no taglines, no description copy, no eyebrow text.

```html
<!-- ONLY THESE ELEMENTS BELONG IN .hero-content -->
<h1 class="hero-title">Lee Symphony<br/><em>Orchestra</em></h1>
<div class="hero-buttons">
  <button class="btn-primary" onclick="showPage('calendar')">Season Calendar</button>
  <button class="btn-ghost" onclick="showPage('scores')">Music Scores</button>
</div>
```

- Hero is **full viewport height** (`height: 100vh`, `min-height: 600px`)
- Background image: `assets/Symphony-Orchestra.webp`, loaded lazily via JS IIFE
- If image fails to load, fallback is `linear-gradient(135deg, #0D1B2A, #1A2D42)`
- Overlay: `linear-gradient(135deg, rgba(13,27,42,0.92) 0%, ..0.4) 100%)` — left-heavy, fades right
- `bg-loaded` class is added by JS after image confirms loaded; CSS `background-size: cover` only activates then
- **Do not add** marketing copy, taglines, statistics, or decorative elements back to the hero

---

## 7. Animation Rules

### Permitted Animations

| Animation | Where | Trigger |
|---|---|---|
| `heroReveal` | `.hero-content` | Page load; `opacity 0→1` + `translateY(30px→0)`, 1s ease |
| `fadeIn` | Every `.page` | On `.active` class added; `opacity 0→1` + `translateY(12px→0)`, 0.4s ease |
| Hover lift | Cards, buttons | `translateY(-2px)` to `-4px`; 0.2s transition |
| Hover slide | List items, score cards | `translateX(5–6px)`; `var(--transition)` |
| Arrow nudge | `›` and `→` arrows in cards | `translateX(4–5px)` on parent hover |

### Rules
- All transitions use `var(--transition)` (`0.3s cubic-bezier(0.4,0,0.2,1)`) unless a specific override is noted
- Hover `transform` uses `0.2s` (slightly snappier than color transitions)
- No scroll-triggered animations — this is a functional portal, not a portfolio site
- No looping animations except the old `scrollPulse` keyframe (which is in the CSS but the element it was attached to has been removed — it is harmless dead code)
- **Do not add** parallax, GSAP, Motion, or any third-party animation library

---

## 8. Calendar System

### Data Source
Events are defined in the `SEASON_EVENTS` array in `app.js`. Each event object:

```js
{
  date: 'YYYY-MM-DD',   // required
  title: 'string',       // required
  type: 'concert' | 'rehearsal' | 'audition',  // required; controls dot color
  details: 'string',     // shown in detail panel; supports \n for line breaks
  time: 'string',        // optional
  location: 'string',    // optional
  note: 'string',        // optional; rendered in gold below details
}
```

### ⚠️ Current Data is Placeholder
The calendar events were AI-generated as placeholders. They must be replaced with actual dates from `Lee Orchestra Season 26-27.pdf`. The PDF has not yet been uploaded to the project. When the real schedule is available, edit only the `SEASON_EVENTS` array — no HTML or CSS changes needed.

### Calendar Behavior
- Opens to October 2026 by default
- Prev/Next buttons navigate by month; year rolls over automatically
- Clicking a day with events opens a detail panel below the grid
- The "All Season Events" list below the grid always reflects the current month
- On mobile (<768px), event text pills are hidden; a gold dot appears instead

---

## 9. Music Scores — Drill-Down System

### Navigation Flow
```
Concert (I or II)  →  Piece  →  Instrument Part  →  PDF opens in new tab
```

Breadcrumb trail at top of page allows navigation back to any level.

### Data Structure in `app.js`

All score data lives in the `SCORES_DATA` object:

```js
SCORES_DATA = {
  concert1: {
    label, date,
    pieces: [
      {
        id,          // unique string key
        composer,    // display name
        title,       // full work title
        folder,      // subfolder name under assets/Sheet Music/Sheet Music/
        parts: [
          { family, icon, name, file }
          // family: 'Woodwinds' | 'Brass' | 'Percussion' | 'Harp' | 'Strings'
          // file: exact filename including extension
        ]
      }
    ]
  },
  concert2: { ... }
}
```

### PDF Path Construction
```js
`assets/Sheet Music/Sheet Music/${piece.folder}/${part.file}`
```

Parts are rendered in this family order: Woodwinds → Brass → Percussion → Harp → Strings.

### ⚠️ Filename Accuracy
Only the Holmes parts have been confirmed against real uploaded files. All other pieces (Wagner, Berlioz, Coleridge-Taylor, Rimsky-Korsakov, Beethoven, Debussy, Brahms) use **assumed filenames** following the Holmes naming convention. These must be verified against actual files before the site goes live. Update only the `file` property for each part in `SCORES_DATA`.

---

## 10. Contact Form

- Submitting the form constructs a `mailto:` link and opens the user's native mail client
- Recipient: `lrosario@leeuniversity.edu` (hardcoded in `submitForm()` in `app.js`)
- Subject line format: `[Orchestra Website] {subject} – {First} {Last}`
- Body includes: name, email, subject, and message
- After submit, form is hidden and a success state is shown
- **No backend, no email API.** This is a mailto-only solution. If server-side email sending is needed in the future, a service like Formspree or EmailJS should be integrated

---

## 11. Do Not Change

These things must not be altered without explicit instruction:

- ❌ **Font families** — Cormorant Garamond and Outfit are permanent choices
- ❌ **Color tokens** — the navy/gold/cream palette is locked
- ❌ **Hero copy** — no taglines, descriptions, or eyebrow text; only the `h1` and two buttons
- ❌ **"Our Story" / about section** — was deliberately removed; do not restore it
- ❌ **Holmes filename `Holmes-_Violin_1.pdf`** — the dash-underscore inconsistency matches the real file; correcting it will break the link
- ❌ **`mailto:` form recipient** — always `lrosario@leeuniversity.edu`
- ❌ **The double-nested sheet music path** — `assets/Sheet Music/Sheet Music/` is intentional; it mirrors the user's actual local folder structure
- ❌ **No-framework constraint** — do not introduce React, Vue, jQuery, Tailwind, or any build tool

---

## 12. Known Issues & Dead Code

| Item | Status | Notes |
|---|---|---|
| `scrollPulse` keyframe + `.scroll-line` / `.hero-scroll-hint` CSS | Dead code | The HTML elements were removed; CSS remains but is harmless |
| `.home-about`, `.about-grid`, `.stat-card` CSS blocks | Dead code | The about section was removed from HTML; CSS still present |
| Calendar events are placeholder | Must fix | Real schedule from PDF not yet entered |
| Non-Holmes score filenames | Unverified | Must be checked against actual files before go-live |
| Schedule of Service page | Placeholder | Content TBA from director |
| `recordings-intro` copy | Mildly public-facing in tone | Revisit if copy needs to be more neutral/functional |

---

## 13. Next Tasks

**Priority 1 — Data**
- [ ] Upload `Lee Orchestra Season 26-27.pdf` and replace all placeholder events in `SEASON_EVENTS` (in `app.js`)
- [ ] Verify all score filenames for Wagner, Berlioz, Coleridge-Taylor, Rimsky-Korsakov, Beethoven, Debussy, and Brahms against actual files in the Sheet Music folders

**Priority 2 — Content**
- [ ] Complete the Schedule of Service page once the director provides the content
- [ ] Confirm whether the Recordings page intro copy is appropriate for a member-only portal, or should be reworded

**Priority 3 — Cleanup**
- [ ] Remove dead CSS blocks (`.home-about`, `.about-grid`, `.stat-card`, `.hero-scroll-hint`, `.scroll-line`, `scrollPulse`) to keep `style.css` clean

**Priority 4 — Enhancements (future)**
- [ ] Add a password/access-code gate if the site needs to be kept private from non-members
- [ ] Consider linking Recordings page directly to specific YouTube URLs (rather than search results) once the director confirms the exact videos
- [ ] Add a print stylesheet so score instrument cards print cleanly
- [ ] Evaluate whether the contact form should be upgraded from `mailto:` to a proper form submission service (e.g., Formspree) for reliability

---

## 14. Context Notes

- This site replaces what would normally be done in **Moodle** — the platform was unavailable due to community members needing access
- The audience includes both **enrolled students** and **community members** in the orchestra
- The tone is **functional, not promotional** — no marketing language, no mission statements
- The director's email is `lrosario@leeuniversity.edu` — the `L` stands for the director's last name (Rosario); do not anonymize or redact this
- Season: **2026/27** (Fall 2026 + Spring 2027)
- Institution: **Lee University**, Cleveland, Tennessee
