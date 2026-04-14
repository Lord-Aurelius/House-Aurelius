# House Aurelius (HA) - Unified Business Platform

## Overview
A React + Vite web dashboard that serves as a central gateway for a suite of specialized business applications targeting African institutions and businesses:

- **HAES** - House Aurelius Education System (school management)
- **HAPOS** - House Aurelius Point of Sale (beauty shops, salons, spas)
- **HARE** - House Aurelius Real Estate (property management)
- **Church-lib** - Church administration operations

## Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router DOM v7
- **Package Manager:** npm
- **Mobile:** Capacitor (Android wrapper) + separate Expo app in `hapos-app/`

## Project Structure
```
/                   - Root: React + Vite web dashboard
  src/              - React source (pages, components, data, services)
  public/           - Static assets
  android/          - Native Android project (Capacitor)
  hapos-app/        - Standalone Expo mobile app for HAPOS
  vite.config.js    - Vite config (host: 0.0.0.0, port: 5000)
```

## Development
- **Workflow:** "Start application" runs `npm run dev` on port 5000
- **Dev server:** http://0.0.0.0:5000 with `allowedHosts: true` for Replit proxy

## Deployment
- **Target:** Static site
- **Build command:** `npm run build`
- **Public directory:** `dist`
