# SmartCompare - Product Comparison Web App

**Compare products and find the best deals with AI-powered recommendations**

## Overview

SmartCompare is a modern, responsive web application that helps users compare products side-by-side and receive AI-generated recommendations to make informed purchasing decisions. Built with React, Vite, and TailwindCSS for a seamless user experience.

## Features

### 🔍 Smart Search
- Intuitive search interface with real-time product discovery
- Support for various product categories (smartphones, laptops, headphones, etc.)
- Popular search suggestions for quick access

### 🤖 AI-Powered Recommendations
- Intelligent analysis of product features, pricing, and user needs
- Clear explanations of why one product might be better than another
- Personalized suggestions based on search context

### 📱 Responsive Design
- Mobile-first approach with adaptive layouts
- Smooth hover effects and animations
- Sticky action buttons for mobile users
- Beautiful gradient design with blue primary theme

### 🛍️ Side-by-Side Comparison
- Clean product cards with high-quality images
- Detailed specifications and feature breakdowns
- Pros and cons analysis for each product
- Direct links to purchase from trusted retailers

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom design system
- **Routing**: React Router for seamless navigation
- **UI Components**: Radix UI with shadcn/ui
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── AISummary.tsx   # AI recommendation display
│   ├── ProductCard.tsx # Product comparison cards
│   └── ProductSearchBar.tsx # Search functionality
├── pages/              # Route components
│   ├── Home.tsx        # Landing page with search
│   ├── Compare.tsx     # Product comparison page
│   └── NotFound.tsx    # 404 error page
├── types/              # TypeScript type definitions
│   └── product.ts      # Product and comparison interfaces
├── data/               # Demo data and mock APIs
│   └── demoProducts.ts # Sample product data
└── App.tsx            # Main application component
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smartcompare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

## Usage

1. **Search Products**: Enter product names or categories in the search bar
2. **View Comparisons**: Browse side-by-side product comparisons with detailed specs
3. **Read AI Recommendations**: Get personalized suggestions based on your search
4. **Make Informed Decisions**: Use the comprehensive analysis to choose the best product

## Demo Data

The app currently includes demo data for smartphone comparisons:
- Samsung Galaxy A15 vs Xiaomi Redmi 12
- Complete specifications, pricing, and feature analysis
- AI-generated recommendation explaining the better choice

## Deployment

Ready for deployment on:
- **GitHub Pages**: Static hosting for the frontend
- **Vercel/Netlify**: Automatic deployments with git integration
- **Lovable**: Simply open your project and click Share -> Publish

## Original Lovable Project

**URL**: https://lovable.dev/projects/8de3e3cd-45cf-4aa6-b41e-4dde5ec6f17a

## How to Edit This Code

**Use Lovable**
Simply visit the [Lovable Project](https://lovable.dev/projects/8de3e3cd-45cf-4aa6-b41e-4dde5ec6f17a) and start prompting.

**Use your preferred IDE**
If you want to work locally, clone this repo and push changes:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

## Technologies Used

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using modern web technologies for the best user experience.
