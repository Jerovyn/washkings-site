# Deployment script for washkings-site
# This script handles git initialization, GitHub repo creation, and Vercel deployment

Write-Host "Starting deployment process..." -ForegroundColor Green

# Check for required tools
$gitAvailable = Get-Command git -ErrorAction SilentlyContinue
$npmAvailable = Get-Command npm -ErrorAction SilentlyContinue

if (-not $gitAvailable) {
    Write-Host "Git is not available in PATH. Please install Git or add it to PATH." -ForegroundColor Yellow
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

if (-not $npmAvailable) {
    Write-Host "npm is not available in PATH. Please install Node.js or add it to PATH." -ForegroundColor Yellow
    Write-Host "Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Get current directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed!" -ForegroundColor Red
    exit 1
}

# Initialize git if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
    git checkout -b main 2>$null
    git branch -M main
}

# Add all files
Write-Host "Staging files..." -ForegroundColor Cyan
git add -A

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Committing changes..." -ForegroundColor Cyan
    git commit -m "Initial commit: Staten Island Wash Kings website"
}

Write-Host "Git setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Create a GitHub repository named 'washkings-site' at https://github.com/new" -ForegroundColor White
Write-Host "2. Add remote: git remote add origin https://github.com/YOUR_USERNAME/washkings-site.git" -ForegroundColor White
Write-Host "3. Push: git push -u origin main" -ForegroundColor White
Write-Host "4. Deploy to Vercel: Connect the GitHub repo at https://vercel.com" -ForegroundColor White

