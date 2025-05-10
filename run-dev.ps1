# LoyaltyLoop Development Server Launcher
Write-Host "Starting LoyaltyLoop Development Server..." -ForegroundColor Cyan

# Change to the project directory
Set-Location -Path "$PSScriptRoot\project"

# Run the development server
Write-Host "Running: npm run dev" -ForegroundColor Green
npm run dev 