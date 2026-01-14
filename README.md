# CHG Healthcare Homepage

A responsive homepage for CHG Healthcare built with HTML, CSS, and JavaScript.

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub first:**
   - Create a new repository on [github.com](https://github.com)
   - In Terminal, run:
     ```bash
     cd /Users/mstevens/Desktop/chg-homepage
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in (you can use your GitHub account)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"
   - Your site will be live at a URL like: `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/mstevens/Desktop/chg-homepage
   vercel
   ```
   - Follow the prompts (it's interactive)
   - For production deployment, run `vercel --prod`

### Option 3: Drag and Drop (Quick Test)

- Go to [vercel.com](https://vercel.com)
- Drag and drop your project folder
- Note: This won't connect to Git, so updates require re-deploying

## Features

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on Git push (if connected to GitHub)
- ✅ Custom domain support
- ✅ Free tier available

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling
- `script.js` - JavaScript functionality
- `assets/` - Images and graphics
- `vercel.json` - Vercel configuration (optional, for routing if needed)
# chg-homepage
