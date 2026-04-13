# 🏛️ EleganceEstate | Luxury Real Estate Architecture

Welcome to **EleganceEstate**, a premier boutique real estate platform designed for high-performance property discovery. This project utilizes a sophisticated hybrid architecture in Next.js, combining Server-Side Performance with Client-Side interactivity.

---

## 🚀 Getting Started

To launch the EleganceEstate development experience, follow these steps:

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js**: `>= 20.19.0 || >= 22.13.0`
- **npm**: `>= 10`

> Recommended:
>
> - Node.js `v22.12.0`
> - npm `v11.0.0`

### 2. Installation

Clone the repository and install the high-end dependencies:

```bash
npm install
```

### 3. Launch Development Server

Start the Turbopack-powered environment:

```bash
npm run dev
```

The site will be live at `http://localhost:3000`.


For Build - 
```bash
npm run build
npm start
```

The site will be live at `http://localhost:3000`.

---

## 🏗️ Technical Architecture Map

EleganceEstate is built on a **Total Production Model**. Our folder structure and rendering strategies are optimized for enterprise-level scaling:

### 🔥 SSG (Static Site Generation)

_Optimized for SEO and Instant Load times._

- **`app/property/[id]/page.tsx`**: Dynamic Property Detail pages pre-rendered via `generateStaticParams`.

### ⚡ SSR (Server-Side Rendering)

_Optimized for speed, SEO, and lean client bundles._

- **`Header.tsx` & `Footer.tsx`**: Main navigation components are now pure Server Components, ensuring zero hydration overhead.
- **`app/page.tsx`**: The data orchestrator for the property marketplace.
- **`PropertyListing.tsx`**: Core listing engine that processes complex filtering on the server.

### 💎 CSR (Client-Side Rendering)

_Optimized for Boutique Interactivity._

- **`ServerFilters.tsx`**: Debounced search and real-time URL synchronization.
- **`PaginatorBridge.tsx`**: PrimeReact pagination link to server state.
- **`ScheduleVisitForm.tsx`**: High-end PrimeReact form with Toast feedback.
- **`GlobalLoader.tsx`**: High-priority navigation transitions.

---

## 🏛️ Production Folder Structure

- **`types/`**: Centralized TypeScript interfaces for strict type safety.
- **`constants/`**: Extracted static data (Cities, Categories, Options) for clean components.
- **`components/layout/`**: Core SSR architectural wrappers.
- **`components/property/`**: Feature-specific real estate components.
- **`providers/`**: Global PrimeReact and styling context.

---

## 🎨 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: PrimeReact (Exclusively)
- **Styling**: Tailwind CSS (Zinc Boutique Theme)
- **State**: URL-driven (Server Sync)

---

© 2026 Elegance Estate Private Limited. Built for Excellence.
