# GudCity Loyalty System

A customer loyalty platform that helps businesses manage their loyalty programs, track customer points, and offer rewards.

## Features

- Multiple loyalty program types (points, punch cards, tiered rewards)
- Customer management
- Transaction tracking
- Rewards redemption
- Reporting and analytics
- Customer portal

## Quick Start

This project includes convenient scripts to make development easier:

### Interactive Launcher (Recommended for Windows)

Run `start.bat` to use the interactive menu for:
- Starting the development server
- Accessing different dashboards (Business Owner, Customer, Admin)

### Manual Setup

#### 1. Install dependencies:
```
cd project
npm install
```

#### 2. Start the development server:
```
npm run dev
```

#### 3. Access the application:
- Open `http://localhost:5173` in your browser
- Use the Quick Access panel on the homepage to access dashboards

## Development Modes

The system supports a bypass mode that allows access to protected dashboards without login:

### Direct URL Access

Access these URLs after starting the server:
- Business Dashboard: `http://localhost:5173/dashboard?bypassLogin=true&role=owner`
- Customer Portal: `http://localhost:5173/portal?bypassLogin=true&role=customer`
- Admin Dashboard: `http://localhost:5173/admin?bypassLogin=true&role=admin`

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Firebase (Auth & Firestore)
- React Router
- React Hook Form
- Chart.js
- Lucide React icons

## Project Structure

- `/project` - Main application code
- `/scripts` - Utility scripts
- `/docs` - Documentation

## License

This project is licensed under the ISC License. 