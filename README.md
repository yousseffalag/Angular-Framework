# 🛒 Angular Product Manager

> A frontend product management web application built with **Angular**, connected to a separate **Spring Boot REST API** backend.

---

## 🌐 Overview

**Angular Product Manager** is a clean, component-based Angular application that lets users manage a product catalog through a responsive interface. It communicates with a dedicated Spring Boot backend via REST API calls.

**Core capabilities:**
- Browse and list all products
- Navigate between pages with Angular Router
- Delete products with a single action

> 🔗 **Backend Repository:** The Spring Boot REST API that powers this app is available here → [web-mvc-products backend](https://github.com/yousseffalag/Spring-MVC)

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Angular (NgModule) | Component-based UI framework |
| TypeScript | Typed JavaScript superset |
| Angular Router | Client-side navigation |
| Angular HttpClient | HTTP communication with the backend API |
| Bootstrap | Responsive UI styling |

---

## 📁 Project Structure

```
src/
└── app/
    ├── app-module.ts              # Root module
    ├── app-routing-module.ts      # Route definitions
    ├── app.html / app.css         # Root component template
    │
    ├── home/                      # Home page component
    │   ├── home.ts
    │   ├── home.html
    │   ├── home.css
    │   └── home.spec.ts
    │
    ├── product/                   # Product listing component
    │   ├── product.ts
    │   ├── product.html
    │   ├── product.css
    │   └── product.spec.ts
    │
    └── services/                  # API communication layer
        ├── productService.ts
        └── product.spec.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Angular CLI](https://angular.io/cli) — `npm install -g @angular/cli`
- The backend app must be running — see the [backend repository](https://github.com/yousseffalag/Angular-Framework)

### Installation & Run

```bash
npm install
ng serve
```

> ✅ The app will be available at **http://localhost:4200**  
> ⚠️ Make sure the backend is running on **http://localhost:8083** before launching the frontend.

---

## ✨ Features

- 🏠 **Home page** — welcoming landing component
- 📦 **Product listing** — view all products fetched from the REST API
- 🔄 **Client-side routing** — smooth navigation via Angular Router
- 🌐 **REST API integration** — powered by Angular's `HttpClient`
- ❌ **Delete products** — remove entries directly from the UI
- 🎨 **Bootstrap styling** — clean and responsive layout

---

## 🔀 Routes

| Path | Component | Description |
|---|---|---|
| `/home` | `HomeComponent` | Landing / welcome page |
| `/prods` | `ProductComponent` | Full product listing |

---

## 🧪 Running Tests

```bash
ng test
```

Tests are powered by [Karma](https://karma-runner.github.io/) and [Jasmine](https://jasmine.github.io/).

---

## 📝 Notes

- The app uses the **NgModule** architecture (not standalone components).
- `HttpClient` is provided through `HttpClientModule` in `app-module.ts`.
- Routing is fully configured in `app-routing-module.ts`.
- CORS must be enabled on the backend to allow requests from `http://localhost:4200`.

---

## 👤 Author

**Youssef Falag**  
GitHub: [@yousseffalag](https://github.com/yousseffalag)
