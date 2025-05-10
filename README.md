# LoyaltyLoop - Customer Loyalty Platform

## Quick Start Guide

The easiest way to start is to use the interactive launcher:

### Interactive Launcher (Recommended)

Simply double-click `start.bat` and select what you want to do from the menu:
- Start the development server
- Access any dashboard (Business Owner, Customer, Admin, Staff)

### Run the Development Server

Alternatively, you can use one of these methods:

- **Windows users**: 
  - Double-click `run-dev.cmd` or `start-dev.bat`
  - Run the PowerShell script: `.\run-dev.ps1`
  - From command line: `npm run dev`

- **Command line**: 
  ```
  cd project
  npm run dev
  ```

### Access Dashboards Without Login

The system is configured to bypass login credentials for easier development:

#### Method 1: Quick Access Scripts

Run one of these commands in the project root:

- **Using batch files:**
  - Business Owner Dashboard: `access-dashboard.bat owner`
  - Customer Portal: `access-dashboard.bat customer` 
  - Admin Dashboard: `access-dashboard.bat admin`
  - Staff Dashboard: `access-dashboard.bat staff`

- **Using PowerShell:**
  - Business Owner Dashboard: `.\access-dashboard.ps1 owner`
  - Customer Portal: `.\access-dashboard.ps1 customer`
  - Admin Dashboard: `.\access-dashboard.ps1 admin`
  - Staff Dashboard: `.\access-dashboard.ps1 staff`

- **Using npm commands:**
  - Business Owner Dashboard: `npm run owner`
  - Customer Portal: `npm run customer`
  - Admin Dashboard: `npm run admin`
  - Staff Dashboard: `npm run staff`

#### Method 2: Via Web Interface

1. Start the development server using any method above
2. Open your browser to http://localhost:5173
3. Use the Quick Access panel on the home page to access any dashboard

#### Method 3: Direct URLs

Access these URLs directly (after starting the dev server):

- Business Dashboard: `http://localhost:5173/dashboard?bypassLogin=true&role=owner`
- Customer Portal: `http://localhost:5173/portal?bypassLogin=true&role=customer`
- Admin Dashboard: `http://localhost:5173/admin?bypassLogin=true&role=admin`

## Development Information

For more detailed information on running and developing the application, see [project/README.md](project/README.md).