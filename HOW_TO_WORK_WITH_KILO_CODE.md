# How to Work with Antigravity & Kilo Code Hand-in-Hand

This workspace is now configured for dual-agent collaboration between **Antigravity** and **Kilo Code**.

Both agents share the same project files, standards, and task board:
- [`AGENTS.md`](file:///c:/Users/USER/Desktop/Perfume%20website/AGENTS.md) — Universal architectural rules and agent instructions.
- [`TASK_BOARD.md`](file:///c:/Users/USER/Desktop/Perfume%20website/TASK_BOARD.md) — Live task status board.
- [`.kilo/rules/velora-rules.md`](file:///c:/Users/USER/Desktop/Perfume%20website/.kilo/rules/velora-rules.md) & [`.clinerules`](file:///c:/Users/USER/Desktop/Perfume%20website/.clinerules) — Native configuration files read automatically by Kilo Code.

---

## 🚀 Recommended Workflow

### 1. Building Features & Fixing Bugs (Lead: Antigravity)
Give Antigravity tasks involving design, UX, multi-file features, and visual polish:
> *"Antigravity, execute BUG-01 through BUG-08 on `TASK_BOARD.md`."*

Antigravity will implement the changes, verify the code across all pages, and update `TASK_BOARD.md` to `Review`.

---

### 2. Reviewing & Red-Teaming (Reviewer: Kilo Code)

#### Prompt for Kilo Code to review Sprint 1 (Bug Fixes & Mobile Nav):
> *"Kilo Code, read `AGENTS.md` and `TASK_BOARD.md`. Antigravity just completed Sprint 1 (BUG-01 through BUG-08). Review `app.js`, `styles.css`, and all HTML pages for syntax issues, unhandled null checks, or edge cases."*

#### Prompt for Kilo Code to review Sprint 2 (Luxury Features):
> *"Kilo Code, read `AGENTS.md` and `TASK_BOARD.md`. Antigravity just implemented all 6 Sprint 2 Luxury Features (FEAT-01 through FEAT-06):
> 1. Signature Scent Finder Quiz (`#scentQuizModal`, `QUIZ_STATE`, `openScentQuiz()`)
> 2. Floating 1-Click WhatsApp Concierge Pill & VIP Panel (`#veloraConciergePanel`, `toggleConciergePanel()`)
> 3. Live Order Tracker Modal (`#orderTrackerModal`, `trackOrderLookup()`)
> 4. Complimentary Flacon Engraving Customizer (preview overlay & cart integration)
> 5. The Scent Layering Lab (`#layeringLabModal`, `updateLayeringSimulation()`)
> 6. Bespoke Discovery Set Builder (`#discoverySetModal`, `DISCOVERY_STATE`)
> Please inspect `app.js`, `styles.css`, and the HTML files. Verify defensive null-checks, localStorage persistence, and mobile responsiveness."*

#### Prompt for Kilo Code to review Sprint 3 (Client Experience, VIP Privé & Connoisseur Features):
> *"Kilo Code, read `AGENTS.md` and `TASK_BOARD.md`. Antigravity just completed all 6 Sprint 3 Features (FEAT-07 through FEAT-12):
> 1. Universal Modal Accessibility & ESC / Backdrop Dismissal (`closeAllModals()`, Escape keydown listener, `.modal-overlay` click handler)
> 2. Maison Velora Privé VIP Client Drawer (`#priveDrawer`, `openPriveDrawer()`, `renderPriveDrawer()`, tier progression, multi-order history in `velora_all_orders`, 1-click re-ordering)
> 3. Printable Luxury VIP Concierge Pass & Certificate of Authenticity (`#conciergePassModal`, `openConciergePassModal()`, `printConciergePass()`, `@media print` clean formatting)
> 4. Interactive Connoisseur Reviews & Olfactory Form (`#modalReviewsSection`, `SEED_REVIEWS`, `renderProductReviews()`, star picker, longevity/sillage voting, and `velora_user_reviews` persistence)
> 5. Interactive Fragrance Pyramid (`.pyramid-accord-tag` chips for Top, Heart, and Base notes in `#productModal`)
> 6. International Currency Preview Converter (`.velora-currency-select`, `changeCurrency()`, live preview in USD, EUR, GBP while keeping Ghana Cedis GH₵ for checkout)
> Please inspect `app.js`, `styles.css`, and the 5 HTML pages. Verify defensive null-checks, clean CSS variables, and seamless mobile drawer integration."*

---

### 3. Iterating Back
If Kilo Code flags any issues or suggestions, simply paste them back to Antigravity:
> *"Antigravity, Kilo Code recommended [feedback]. Please integrate this into the code."*

This creates an unstoppable workflow where you get **Antigravity's high-level design, aesthetics, and architectural execution** combined with **Kilo Code's precision editor inspection and terminal tooling**!
