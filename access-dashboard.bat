@echo off
echo LoyaltyLoop Dashboard Access Tool
echo.

if "%1"=="" (
  echo Usage: access-dashboard [role]
  echo.
  echo Available roles:
  echo   owner     - Business owner dashboard
  echo   customer  - Customer portal
  echo   admin     - Admin dashboard
  echo   staff     - Staff dashboard
  echo.
  echo Example: access-dashboard owner
  exit /b
)

set ROLE=%1
cd project
node access-dashboard.js %ROLE% 