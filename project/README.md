# LoyaltyLoop - Customer Loyalty Platform

## Development Access (No Login Required)

This application has been configured with a development mode that allows you to access all dashboards without login credentials.

### Running the application

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm run dev
```

3. Open your browser and go to the URL shown in the terminal (typically http://localhost:5173)

### Accessing Dashboards Without Login

There are three ways to access dashboards without login credentials:

#### 1. Quick Access Panel on Homepage
The homepage contains a "Quick Access" panel with buttons to directly access all dashboards:
- Business Owner Dashboard
- Customer Portal 
- Admin Dashboard

#### 2. Via Login Page Bypass
Go to the login page and use the "Development Mode: Bypass Authentication" checkbox. This will reveal options to log in as:
- Business Owner
- Customer
- Staff 
- Admin

#### 3. Direct URL Access
With bypass mode enabled, you can directly access any of these URLs:
- Business Dashboard: `/dashboard`
- Customer Portal: `/portal`
- Admin Dashboard: `/admin`

## Features

- Multiple loyalty program types (points, punch cards, tiered)
- Customer management
- Transaction tracking
- Rewards redemption
- Reporting and analytics
- Customer portal for checking points and rewards 