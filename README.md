# Amazon Clone

A functional Amazon-inspired e-commerce web app built with vanilla JavaScript, HTML, and CSS as a hands-on project to learn JavaScript.

---

## 🌐 Live Preview

> _(https://devhouda.github.io/amazon-clone/)_

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [JavaScript Concepts Practiced](#javascript-concepts-practiced)
- [Author](#author)

---

## About

This project is a front-end clone of the Amazon shopping experience. It covers the full user journey: browsing products, adding items to a cart, reviewing the order at checkout, placing the order, and then tracking it. Built entirely with vanilla JavaScript — no frameworks — to solidify core JS fundamentals.

---

## Features

- 🛍️ **Product listing page** — dynamically rendered products grid from a JavaScript data file
- 🛒 **Shopping cart** — add/remove items, live cart quantity counter in the header
- 💳 **Checkout page** — order summary with item details and payment summary
- 📦 **Orders page** — view past orders with product images, delivery dates, quantities, and totals
- 🔍 **Package tracking page** — track a specific order's delivery status
- 📱 **Responsive layout** — mobile logo support and responsive header

---

## Pages

| Page         | File            | Description                                                              |
| ------------ | --------------- | ------------------------------------------------------------------------ |
| **Home**     | `index.html`    | Product listing grid with search bar and cart icon                       |
| **Checkout** | `checkout.html` | Review order items and payment summary before placing                    |
| **Orders**   | `orders.html`   | History of placed orders with "Buy it again" and "Track package" actions |
| **Tracking** | `tracking.html` | Delivery progress tracker for a specific order                           |

---

## Project Structure

```
amazon-clone/
├── index.html              # Home / product listing page
├── checkout.html           # Checkout page
├── orders.html             # Orders history page
├── tracking.html           # Package tracking page
│
├── scripts/
│   ├── amazon.js           # Renders product grid, handles add-to-cart
│   ├── checkout.js         # Renders order summary and payment details
│   └── ...                 # Additional JS modules
│
├── styles/
│   ├── shared/
│   │   ├── general.css         # Global base styles
│   │   └── amazon-header.css   # Shared header styles
│   └── pages/
│       ├── amazon.css          # Home page styles
│       ├── orders.css          # Orders page styles
│       └── checkout/
│           ├── checkout.css        # Checkout page styles
│           └── checkout-header.css # Checkout header styles
│
├── data/                   # Product and order data (JS modules)
├── backend/                # Backend logic / mock data handling
├── tests/                  # Unit tests
└── images/
    ├── amazon-logo.png
    ├── amazon-logo-white.png
    ├── amazon-mobile-logo.png
    ├── icons/              # cart, search, checkout-lock, buy-again icons
    └── products/           # Product images
```

---

## Technologies Used

- **HTML5** — semantic page structure across multiple pages
- **CSS3** — grid and flexbox layouts, shared and per-page stylesheets
- **JavaScript (ES6+)** — DOM manipulation, ES modules, dynamic rendering
- **Google Fonts** — [Roboto](https://fonts.google.com/specimen/Roboto) (weights 400, 500, 700)

---

## JavaScript Concepts Practiced

Building this project was a practical exercise in core JavaScript skills, including:

- **DOM manipulation** — dynamically generating HTML for products, cart items, and order summaries
- **ES Modules** (`type="module"`) — splitting logic across multiple JS files
- **Array methods** — filtering, mapping, and reducing product/cart data
- **Event handling** — click events for add-to-cart, quantity updates, item removal
- **localStorage** — persisting cart state across page navigation
- **Data-driven rendering** — separating data (`/data`) from presentation logic (`/scripts`)
- **Unit testing** — test files in the `/tests` folder

---

## Author

- **GitHub** — [@devhouda](https://github.com/devhouda)
