# Automatic Deployment Script for washkings-site
# This script automates all deployment steps when npm and git are available

param(
    [string]$GitHubUsername = "",
    [string]$RepoName = "washkings-site"
)

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot

Write-Host "=== Auto Deployment Script ===" -ForegroundColor Cyan
Write-Host "Project Directory: $ProjectDir" -ForegroundColor Gray

# Step 1: Install dependencies
Write-Host "`n[1/5] Installing dependencies..." -ForegroundColor Yellow
Set-Location $ProjectDir
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm install failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Step 2: Initialize git
Write-Host "`n[2/5] Initializing git repository..." -ForegroundColor Yellow
if (-not (Test-Path .git)) {
    git init
    git checkout -b main 2>$null
    git branch -M main
}
git add -A
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: git add failed!" -ForegroundColor Red
    exit 1
}
git commit -m "Initial commit: Staten Island Wash Kings website" 2>$null
if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne 1) {
    Write-Host "WARNING: git commit returned non-zero exit code" -ForegroundColor Yellow
}
Write-Host "✓ Git repository initialized and committed" -ForegroundColor Green

# Step 3: Create GitHub repo and push
if ($GitHubUsername) {
    Write-Host "`n[3/5] Creating GitHub repository..." -ForegroundColor Yellow
    $repoUrl = "https://github.com/$GitHubUsername/$RepoName.git"
    
    # Check if remote exists
    $remoteExists = git remote get-url origin 2>$null
    if (-not $remoteExists) {
        git remote add origin $repoUrl
        Write-Host "✓ Remote added: $repoUrl" -ForegroundColor Green
    } else {
        Write-Host "✓ Remote already exists: $remoteExists" -ForegroundColor Green
    }
    
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "WARNING: git push failed. You may need to create the repo on GitHub first." -ForegroundColor Yellow
        Write-Host "Create repo at: https://github.com/new" -ForegroundColor Yellow
        Write-Host "Repository name: $RepoName" -ForegroundColor Yellow
    } else {
        Write-Host "✓ Code pushed to GitHub" -ForegroundColor Green
    }
} else {
    Write-Host "`n[3/5] Skipping GitHub push (no username provided)" -ForegroundColor Yellow
    Write-Host "To push manually:" -ForegroundColor Gray
    Write-Host "  1. Create repo at https://github.com/new (name: $RepoName)" -ForegroundColor Gray
    Write-Host "  2. Run: git remote add origin https://github.com/YOUR_USERNAME/$RepoName.git" -ForegroundColor Gray
    Write-Host "  3. Run: git push -u origin main" -ForegroundColor Gray
}

# Step 4: Deploy to Vercel
Write-Host "`n[4/5] Deploying to Vercel..." -ForegroundColor Yellow
$vercelCmd = Get-Command vercel -ErrorAction SilentlyContinue
if ($vercelCmd) {
    Write-Host "Vercel CLI found, deploying..." -ForegroundColor Gray
    vercel --prod --yes
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Deployed to Vercel" -ForegroundColor Green
    } else {
        Write-Host "WARNING: Vercel deployment had issues. Check output above." -ForegroundColor Yellow
    }
} else {
    Write-Host "Vercel CLI not found. Deploy manually:" -ForegroundColor Yellow
    Write-Host "  1. Go to https://vercel.com/new" -ForegroundColor Gray
    Write-Host "  2. Import your GitHub repository: $RepoName" -ForegroundColor Gray
    Write-Host "  3. Click Deploy" -ForegroundColor Gray
}

# Step 5: Generate deployment report
Write-Host "`n[5/5] Generating deployment report..." -ForegroundColor Yellow
# Report will be generated separately

Write-Host "`n=== Deployment Script Complete ===" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. If GitHub repo was created, verify at: https://github.com/$GitHubUsername/$RepoName" -ForegroundColor White
Write-Host "  2. If Vercel deployment succeeded, check your Vercel dashboard" -ForegroundColor White
Write-Host "  3. Verify all pages return HTTP 200" -ForegroundColor White

