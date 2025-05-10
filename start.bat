@echo off
color 0A

:menu
cls
echo.
echo ====================================================
echo    GUDCITY LOYALTY SYSTEM - QUICK START LAUNCHER
echo ====================================================
echo.
echo Choose an option:
echo.
echo [1] Start Development Server
echo [2] Access Business Owner Dashboard
echo [3] Access Customer Portal
echo [4] Access Admin Dashboard
echo [5] Access Staff Dashboard 
echo [6] Exit
echo.

set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" (
    echo.
    echo Starting development server...
    start cmd /k "cd project && npm run dev"
    timeout /t 5 > nul
    goto menu
)

if "%choice%"=="2" (
    echo.
    echo Opening Business Owner Dashboard...
    call access-dashboard.bat owner
    goto menu
)

if "%choice%"=="3" (
    echo.
    echo Opening Customer Portal...
    call access-dashboard.bat customer
    goto menu
)

if "%choice%"=="4" (
    echo.
    echo Opening Admin Dashboard...
    call access-dashboard.bat admin
    goto menu
)

if "%choice%"=="5" (
    echo.
    echo Opening Staff Dashboard...
    call access-dashboard.bat staff
    goto menu
)

if "%choice%"=="6" (
    echo.
    echo Exiting...
    exit /b
)

echo.
echo Invalid choice. Please try again.
timeout /t 2 > nul
goto menu 