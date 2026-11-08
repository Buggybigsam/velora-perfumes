# AGENTS.md — Velora Perfumes Multi-Agent Operating System
> **Standardized Agent Directive for Antigravity & Kilo Code**  
> *Last Updated: October 2026*

---

## 1. Project Overview & Philosophy
* **Project Name:** VELORA PERFUMES (Haute Parfumerie Boutique)
* **Target Audience:** Luxury perfume connoisseurs and discerning buyers in Ghana (and worldwide).
* **Currency:** **Ghana Cedis (GH₵)** strictly formatted as `GH₵ X,XXX` (e.g. `formatGHC(amount)`).
* **Payment Model:** **Concierge Order Flow** (Cash on Delivery & Mobile Money / MoMo on delivery). There are **NO online card gateways / Stripe / PayPal**. Orders generate a reference `VEL-XXXXXX` and prompt WhatsApp confirmation to `+233 24 555 0192`.
* **Technology Stack:**
  - **HTML5:** Semantic, accessible markup.
  - **CSS3:** Pure Vanilla CSS in `styles.css`. No TailwindCSS, no external CSS frameworks.
  - **JavaScript:** Pure Vanilla modern ES6+ in `app.js`. No React, no Vue, no bundler needed.
  - **Storage:** Client-side `localStorage` for `velora_cart`, `velora_wishlist`, and `velora_last_order`.

---

## 2. Dual-Agent Collaboration Protocol (Antigravity + Kilo Code)

Antigravity and Kilo Code operate as a **co-pilot pair** on this repository. To maintain high code quality and prevent regressions, both agents adhere to the following division of responsibility:

```
┌─────────────────────────────────────────────────────────────┐
│                       HUMAN (USER)                          │
└───────────────┬─────────────────────────────┬───────────────┘
                │                             │
                ▼                             ▼
┌───────────────────────────────┐   ┌───────────────────────────────┐
│          ANTIGRAVITY          │   │           KILO CODE           │
│  - Architecture & Design      │   │  - In-Editor Review & Polish  │
│  - Major Interactive Features │   │  - Unit Testing & Validation  │
│  - Visual & CSS Aesthetics    │   │  - Terminal Command Exec      │
│  - Macro Bug Fixes across DOM │   │  - Secondary Code Review      │
└───────────────┬───────────────┘   └───────────────┬───────────────┘
                │                                   │
                └───────────────► ◄─────────────────┘
                                  │
                                  ▼
                   SHARED CODEBASE & TASK_BOARD.md
```

### Collaboration Rules:
1. **Never Overwrite Concurrently:** Only one agent should write to a file at any given moment.
2. **Consult TASK_BOARD.md:** Check `TASK_BOARD.md` before starting a task to see what is `In Progress`, `Done`, or `Pending`.
3. **Preserve Design Tokens:** Never introduce ad-hoc colors or inline styling when CSS variables exist:
   - `--gold-accent`, `--gold-metallic`, `--gold-light`, `--gold-dark`
   - `--nav-bg`, `--bestsellers-bg`, `--bg-main`
   - `--font-serif` (`Playfair Display`), `--font-display` (`Cinzel`), `--font-sans` (`Plus Jakarta Sans`)
4. **Defensive DOM Access:** All JavaScript functions interacting with DOM elements MUST check for null (e.g. `const el = document.getElementById(...); if (el) { ... }`) because `app.js` runs across 5 separate pages (`index.html`, `shop.html`, `about.html`, `collections.html`, `contact.html`).

---

## 3. Core Pages & Component Architecture

| Page | Purpose | Key Modals & Elements |
| :--- | :--- | :--- |
| `index.html` | Brand home, bestsellers, story, why us, private circle newsletter | `productModal`, `cartDrawer`, `checkoutModal`, `confirmationModal`, `searchModal`, `wishlistDrawer` |
| `shop.html` | Full 14-perfume catalog, category pills, price & scent filters, sorting | Same modals + full catalog grid |
| `collections.html` | Curated collections (Her, Him, Unisex, Floral, Woody, Fresh) | Same modals + collection cards |
| `about.html` | Maison heritage, Grasse atelier craftsmanship, brand metrics | Same modals + editorial copy |
| `contact.html` | Concierge inquiries, WhatsApp support, location, business hours | Same modals + contact form |

---

## 4. Key JavaScript Functions & API Contract (`app.js`)

* `formatGHC(amount)`: Formats number to `GH₵ X,XXX`.
* `openProductModal(productId)`: Opens flacon modal. On non-product pages without the modal, redirects to `shop.html#product-{id}`.
* `closeProductModal()`: Closes modal and resets scroll.
* `openCartDrawer()` / `closeCartDrawer()`: Toggles sliding bag drawer and re-renders items.
* `openCheckoutModal()` / `closeCheckoutModal()`: Concierge delivery checkout form.
* `submitOrderForm(event)`: Validates form, creates order `VEL-XXXXXX`, saves to `localStorage`, and triggers confirmation.
* `showOrderConfirmation(order)`: Populates confirmation modal with safe null checks and sets WhatsApp message link.
* `toggleWishlist(productId, event)`: Adds/removes from wishlist and updates badges.
* `openSearchModal()` / `closeSearchModal()` / `handleLiveSearch(event)`: Instant live search across notes, titles, families.
* `toggleMobileNav()` / `closeMobileNav()`: Controls the responsive slide-out mobile drawer on screens < 768px.

---

## 5. Handoff Commands & Prompts for the User

### To Hand Off Work from Antigravity to Kilo Code:
> *"Kilo Code, read `AGENTS.md` and `TASK_BOARD.md`. Antigravity just completed [Task]. Please review the changes in `app.js` and `styles.css` for any lint issues, syntax errors, or missed edge cases."*

### To Hand Off Work from Kilo Code to Antigravity:
> *"Antigravity, review the changes Kilo Code made to [File]. Ensure the visual aesthetics, responsive behavior, and luxury design match the Velora design system."*
