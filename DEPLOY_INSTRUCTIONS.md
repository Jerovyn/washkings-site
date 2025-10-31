# Quick Deploy Instructions

## Option 1: Deploy via Vercel Web Interface (Fastest)

1. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Repository name: `washkings-site`
   - Create repository (don't initialize with README)

2. **Upload Code to GitHub**:
   - Download this entire `washkings-site` folder as ZIP
   - Extract and upload to GitHub using their web interface, OR
   - Use GitHub Desktop or other Git GUI

3. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository `washkings-site`
   - Framework Preset: Next.js (auto-detected)
   - Click "Deploy"
   - Wait for deployment to complete

## Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to project:
   ```bash
   cd washkings-site
   ```

3. Deploy:
   ```bash
   vercel
   ```
   Follow the prompts to link your account and deploy.

## Option 3: Deploy via GitHub Actions (Automatic)

Once code is in GitHub:
1. The `.github/workflows/deploy.yml` file is already configured
2. Add Vercel secrets to GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
3. Push to main branch triggers automatic deployment

---

**Your site will be live at**: `https://washkings-site.vercel.app` (or custom domain if configured)

