# EleganceEstate - Luxury Real Estate Boutique

A high-density, premium property listing application built with **Next.js 14**, featuring real-time filtering, architectural design, and SEO-optimized static/server delivery.

![Banner](https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🎯 Project Overview
This project was developed as a production-standard property listing platform. It demonstrates a sophisticated approach to real estate UX, focusing on "Elegance" through architectural geometry, high-contrast typography, and seamless performance.

### Key Features
- **Listing Page**: Real-time multi-dimensional filtering (City, Category, Price, BHK) with integrated PrimeReact Paginator.
- **Detail Page**: Cinematic architectural overview with high-contrast spec cards, connectivity grids, and verified agent profiles.
- **Full Form Validation**: 10-digit mobile enforcement and required field monitoring.
- **Production Pages**: Dedicated 'About Us', 'Contact Us', and 'Privacy Policy' sections with professional boilerplate.

## 🚀 Technical Architecture
The core of this application leverages the latest Next.js paradigms for maximum performance and SEO.

### Speed & Delivery
- **SSG (Static Site Generation)**: The property detail pages (`/property/[id]`) are pre-rendered at build time using `generateStaticParams`. This ensures instant navigation and perfect crawling by search engines.
- **SSR (Server-Side Rendering)**: The main listing and category pages are Server Components by default, ensuring fast initial loads and high core web vitals.
- **SEO Optimization**: Full implementation of Next.js Metadata API, including:
  - Canonical URLs
  - OpenGraph / Twitter Cards
  - Semantic HTML5 structure
  - Robot directives and structured keywords

### Technology Stack
- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI Library**: [PrimeReact](https://primereact.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Server Components & `useState`
- **Icons**: PrimeIcons

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd elegance-property-listing
npm install
```

### 3. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
To build the application for production (generating static pages):
```bash
npm run build
npm run start
```

## 📂 Folder Structure
```bash
├── app/                  # Next.js App Router (SSR/SSG logic)
├── components/           # UI Components (Header, Footer, Cards)
│   ├── layout/           # Shared Layout Elements
│   └── property/         # Core Property Logic
├── data/                 # Property Database (static data)
└── public/               # Static Assets
```

---
**Developed for Excellence by Antigravity**
