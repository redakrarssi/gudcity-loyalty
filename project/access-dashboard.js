#!/usr/bin/env node

/**
 * LoyaltyLoop Command Line Dashboard Access Tool
 * 
 * This tool opens a browser window directly to the requested dashboard
 * without requiring authentication.
 * 
 * Usage:
 * node access-dashboard.js [dashboard]
 * 
 * Where [dashboard] is one of:
 * - owner (default)
 * - customer
 * - admin
 * - staff
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the dashboard type from command line args
const args = process.argv.slice(2);
const dashboardType = args[0] || 'owner';

// Base URL of the development server
const baseUrl = 'http://localhost:5173';

// Dashboard paths
const dashboardPaths = {
  owner: '/dashboard',
  customer: '/portal',
  admin: '/admin',
  staff: '/dashboard'
};

// Create URL with parameters to set localStorage for bypass login
const routePath = dashboardPaths[dashboardType] || dashboardPaths.owner;
const url = `${baseUrl}${routePath}?bypassLogin=true&role=${dashboardType}`;

// Display info about what's happening
console.log(`
┌────────────────────────────────────────────┐
│ LoyaltyLoop Dashboard Direct Access        │
└────────────────────────────────────────────┘

🔑 Accessing ${dashboardType} dashboard without login
🌐 URL: ${url}
🔄 Opening browser...
`);

// Determine the platform-specific command to open a URL
function getOpenCommand(url) {
  switch (process.platform) {
    case 'darwin': // macOS
      return `open "${url}"`;
    case 'win32': // Windows
      return `start "" "${url}"`;
    default: // Linux and others
      return `xdg-open "${url}"`;
  }
}

// Open the URL in the default browser
const command = getOpenCommand(url);
exec(command, (error) => {
  if (error) {
    console.error(`❌ Error opening browser: ${error.message}`);
    return;
  }
  
  console.log(`✅ Browser opened to ${dashboardType} dashboard`);
  console.log('\n👉 Remember to have your development server running (npm run dev)');
}); 