# Staten Island Wash Kings Website

A modern Next.js website for Staten Island Wash Kings, featuring services for Power Washing, Holiday Lights, General Contracting, and Roofing.

## Features

- 🏠 Homepage with 4 service boxes (Holiday Lights, Power Washing, General Contracting, Roofing)
- 📄 8 landing pages (Residential and Commercial for each service)
- 📝 Lead form component that posts to `/api/lead`
- 🔄 Automatic redirects from old URLs
- 🗺️ Sitemap for SEO
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
washkings-site/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # Lead form API endpoint
│   ├── power-washing/
│   │   ├── residential/
│   │   └── commercial/
│   ├── holiday-lights/
│   │   ├── residential/
│   │   └── commercial/
│   ├── general-contracting/
│   │   ├── residential/
│   │   └── commercial/
│   ├── roofing/
│   │   ├── residential/
│   │   └── commercial/
│   ├── layout.tsx
│   ├── page.tsx                  # Homepage
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceBox.tsx
│   ├── ServiceLandingPage.tsx
│   └── LeadForm.tsx
└── ...
```

## API Endpoints

### POST /api/lead

Submit a lead form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "message": "I need a quote",
  "serviceType": "Power Washing",
  "clientType": "Residential"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully",
  "data": { ... }
}
```

## Environment Variables

No environment variables are required for basic functionality. The lead form currently logs submissions to the console. In production, you may want to:

1. Add environment variables for email service (SendGrid, Mailgun, etc.)
2. Add database connection strings
3. Add CRM integration credentials

## Deployment

This project is configured for Vercel deployment. Simply push to GitHub and connect your repository to Vercel.

## License

© 2024 Staten Island Wash Kings. All rights reserved.

