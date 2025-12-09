# Deploy Build Folder via GitHub

Since downloading from Emergent is difficult, use GitHub as an intermediary.

## Step 1: Push Build Folder to GitHub

In Emergent terminal or use GitHub web interface:

```bash
cd /app/frontend/build

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Islamic Library - Production Build"

# Add your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/islamic-library-build.git

# Push
git push -u origin main
```

## Step 2: Download from GitHub

1. Go to your GitHub repository
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract on your computer

## Step 3: Upload to Plesk

1. Log into Plesk
2. File Manager → httpdocs folder
3. Delete old files
4. Upload all extracted files
5. Done!

---

## Or Use GitHub Pages (Easier!)

Instead of Plesk, just enable GitHub Pages:

1. In your GitHub repo → Settings → Pages
2. Source: Deploy from branch
3. Branch: main
4. Save

Your site will be live at: `yourusername.github.io/islamic-library-build`

Then point your custom domain `library.minaretandquill.com` to it.
