# LoyaltyLoop Dashboard Access Tool
param (
    [Parameter(Position=0)]
    [ValidateSet("owner", "customer", "admin", "staff")]
    [string]$Role = "owner"
)

Write-Host "LoyaltyLoop Dashboard Access Tool" -ForegroundColor Cyan
Write-Host ""

# Dashboard paths
$dashboardPaths = @{
    "owner" = "/dashboard"
    "customer" = "/portal"
    "admin" = "/admin"
    "staff" = "/dashboard"
}

# Base URL
$baseUrl = "http://localhost:5173"
$routePath = $dashboardPaths[$Role]
$url = "${baseUrl}${routePath}?bypassLogin=true&role=${Role}"

Write-Host "Accessing $Role dashboard without login" -ForegroundColor Yellow
Write-Host "URL: $url" -ForegroundColor Yellow
Write-Host "Opening browser..." -ForegroundColor Green

# Open the URL in the default browser
Start-Process $url

Write-Host "✅ Browser opened to $Role dashboard" -ForegroundColor Green
Write-Host ""
Write-Host "👉 Remember to have your development server running (npm run dev)" -ForegroundColor Yellow 