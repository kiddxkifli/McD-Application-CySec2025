# Deploy Your Portfolio to GitHub Pages (Free)

## What's Changed for GitHub Pages
✅ **CV Download**: Now uses static file instead of backend  
✅ **Contact Form**: Uses mailto links to open email client  
✅ **GitHub Actions**: Automated deployment workflow created  
✅ **Vite Config**: Special configuration for GitHub Pages  

## Quick Deployment Steps

### 1. Create GitHub Repository
```bash
# In your terminal
git init
git add .
git commit -m "Initial commit - cybersecurity portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Update Repository Name in Config
Edit `vite.config.github.ts` and change this line:
```javascript
base: "/", // Change this to "/your-repo-name/"
```
For example, if your repo is `portfolio`, change to:
```javascript
base: "/portfolio/",
```

### 3. Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Set **Source** to "GitHub Actions"
5. Click **Save**

### 4. Manual Build Commands (Alternative)
If you prefer manual deployment:
```bash
# Build for GitHub Pages
npx vite build --config vite.config.github.ts

# Deploy using gh-pages
npx gh-pages -d dist
```

## Your Site Will Be Live At:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## How It Works
- **Automatic**: Every time you push to `main` branch, GitHub Actions builds and deploys your site
- **Free**: GitHub Pages is completely free for public repositories
- **Fast**: Updates appear within minutes of pushing changes

## Contact Form Behavior
Instead of backend submission, the contact form now:
1. Opens user's default email client (Gmail, Outlook, etc.)
2. Pre-fills recipient (kiddkifli@gmail.com)
3. Includes subject and message content
4. User clicks send in their email client

## Troubleshooting
**Blank page?** - Make sure the `base` path in `vite.config.github.ts` matches your repo name exactly

**404 errors?** - Verify your repository is public (required for free GitHub Pages)

**Need help?** - Check the Actions tab in GitHub for build errors