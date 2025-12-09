# Quick Start: Git Deployment

## Your Files Are Ready for Git!

Everything in `/app/frontend/` is ready to push to your hosting git repository.

---

## Current Status:

✅ Source code ready  
✅ `.gitignore` configured  
✅ Production build tested (`/app/frontend/build/`)  
✅ 42 books with all features  

---

## Step-by-Step: Get Your Site Online

### Step 1: Get Your Git URL

**From your hosting, you'll get a URL like:**
```
ssh://username@yourhost.com:port/home/username/repositories/library.git
```

**OR**
```
https://yourhost.com/git/library.git
```

### Step 2: Connect Your Repository

Open terminal in `/app/frontend/`:

```bash
cd /app/frontend

# Add your hosting as remote
git remote add production YOUR_GIT_URL_HERE

# Example:
# git remote add production ssh://user@host.com:2222/home/user/repos/library.git
```

### Step 3: Commit Your Code

```bash
# Check what will be committed
git status

# Add everything
git add .

# Make your first commit
git commit -m "Islamic Classical Library - 42 books with filtering"

# Check remote is set
git remote -v
```

### Step 4: Push to Your Hosting

```bash
# Push to your hosting
git push production master

# If that doesn't work, try:
git push production main

# If forced push needed:
git push production master --force
```

### Step 5: Build on Server

**Option A: Build on Server (Recommended)**

SSH into your server:
```bash
ssh username@yourhost.com
cd /path/to/your/repository
yarn install
yarn build
cp -r build/* /path/to/public_html/
```

**Option B: Built Files Already Ready**

Your build folder is at `/app/frontend/build/` and ready to copy.

---

## When You Make Updates Later

### Updating Books or Content:

```bash
# 1. Edit your files (e.g., /app/frontend/src/mock.js)
# 2. Test locally
cd /app/frontend
yarn start   # Test at http://localhost:3000

# 3. Rebuild
yarn build

# 4. Commit changes
git add .
git commit -m "Added 5 new books to Hadith section"

# 5. Push to hosting
git push production master

# 6. On server, rebuild
ssh username@host
cd /path/to/repo
yarn build
cp -r build/* /public_html/
```

---

## Quick Deploy Commands

Save these for easy deployment:

```bash
# Quick deploy script
cd /app/frontend
yarn build
git add .
git commit -m "Update: $(date)"
git push production master
```

Or create a deploy script:

**File: `/app/frontend/deploy.sh`**
```bash
#!/bin/bash
echo "Building..."
yarn build

echo "Committing..."
git add .
git commit -m "Deploy: $(date)"

echo "Pushing..."
git push production master

echo "Done! Now build on server."
```

Make executable:
```bash
chmod +x deploy.sh
```

Use it:
```bash
./deploy.sh
```

---

## Alternative: Deploy Only Build Folder

If you prefer to push only the built files:

```bash
cd /app/frontend/build

# Initialize git in build folder
git init

# Add remote
git remote add production YOUR_GIT_URL

# Commit
git add .
git commit -m "Production build"

# Push
git push production master --force
```

This pushes only the final HTML/CSS/JS files, not source code.

---

## What's Included in Your Repository?

When you push, these files go to git:

```
frontend/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookDetail.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── Home.jsx
│   │   └── ui/           (all 30+ shadcn components)
│   ├── hooks/
│   │   └── use-toast.js
│   ├── mock.js           ← Your 42 books data
│   ├── App.js
│   ├── App.css
│   └── index.css
├── public/
│   ├── index.html
│   └── manifest.json
├── package.json          ← Dependencies
├── yarn.lock            ← Version lock
├── craco.config.js
├── tailwind.config.js
└── .gitignore
```

**Size:** ~2-3 MB (without node_modules)

---

## Hosting-Specific Tips

### cPanel Git:
1. cPanel → Git Version Control → Create
2. Get clone URL
3. After push: cPanel → Git → Manage → Deploy
4. Copy to public_html manually

### Cloudways:
1. Application → Deployment Via Git
2. Add repository
3. Auto-deploys after push

### SiteGround:
1. Site Tools → Git
2. Create repository
3. Deploy from UI

### Traditional Hosting:
1. SSH access required
2. Create bare repo manually
3. Set up post-receive hook

---

## Need Your Specific Hosting Steps?

Tell me your hosting provider and I can give you exact commands:
- cPanel
- Plesk  
- Cloudways
- SiteGround
- DigitalOcean
- Other

---

## Files Already on Emergent:

Your complete website is at:
- **Source Code:** `/app/frontend/src/`
- **Built Files:** `/app/frontend/build/`
- **Ready to Push:** Yes ✅

**Next step:** Get your Git URL from hosting and push!
