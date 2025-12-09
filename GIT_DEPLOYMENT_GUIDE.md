# Git Deployment Guide - Islamic Classical Library

## Overview

Your hosting supports Git deployment! This is much better than manual uploads.

---

## Two Deployment Options

### **Option A: Push Source + Build on Server** ⭐ Recommended
- Push your source code to git repository
- Server automatically builds the production files
- Better for ongoing updates

### **Option B: Push Built Files Only**
- Build locally (`yarn build`)
- Push only the `build` folder
- Simpler but less flexible

---

## Option A: Full Git Deployment (Recommended)

### Step 1: Initialize Git Repository

```bash
cd /app/frontend

# Initialize git (if not already done)
git init

# Check current status
git status
```

### Step 2: What Files to Include

**Include (Push to Git):**
```
frontend/
├── src/                    ✅ All source code
│   ├── components/         ✅
│   ├── hooks/              ✅
│   ├── mock.js             ✅ Your book data
│   ├── App.js              ✅
│   ├── App.css             ✅
│   └── index.css           ✅
├── public/                 ✅ Public assets
├── package.json            ✅ Dependencies list
├── yarn.lock               ✅ Exact versions
├── craco.config.js         ✅ Build config
├── tailwind.config.js      ✅ Styling config
└── README.md               ✅ Documentation
```

**Exclude (Don't Push):**
```
node_modules/               ❌ Too large (130+ MB)
build/                      ❌ Generated files
.env.local                  ❌ Local settings
```

### Step 3: Connect to Your Hosting Git

Your hosting provider should give you a Git URL. It looks like:

**cPanel Git:**
```
ssh://user@yourserver.com:port/home/user/repositories/your-repo.git
```

**Other Hosts:**
```
https://yourhost.com/git/your-repo.git
or
git@yourhost.com:your-repo.git
```

**Add remote:**
```bash
cd /app/frontend
git remote add hosting YOUR_GIT_URL_HERE
```

### Step 4: Make Your First Commit

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - Islamic Classical Library"

# Push to hosting
git push hosting master
# or
git push hosting main
```

### Step 5: Build on Server

**After pushing, SSH into your server:**

```bash
# SSH to your server
ssh user@yourserver.com

# Navigate to your repository
cd /path/to/your/repo

# Install dependencies (first time only)
yarn install

# Build the production files
yarn build

# Copy build folder to web root
cp -r build/* /public_html/
# or wherever your web root is
```

---

## Option B: Push Only Built Files

If you prefer to build locally and push only the final files:

### Step 1: Build Locally

```bash
cd /app/frontend
yarn build
```

### Step 2: Create Separate Git Repo for Build

```bash
cd /app/frontend/build

# Initialize git in build folder
git init

# Create .gitignore
echo "# Keep all files" > .gitignore

# Add all files
git add .

# Commit
git commit -m "Production build"

# Add your hosting remote
git remote add hosting YOUR_GIT_URL_HERE

# Push
git push hosting master -f
```

### Step 3: On Server

The files should appear in your repository path. If not automatically in web root:

```bash
# Copy to web root
cp -r /path/to/repo/* /public_html/
```

---

## Common Git Hosting Setups

### 1. cPanel Git Version Control

**Setup:**
1. Log into cPanel
2. Go to "Git™ Version Control"
3. Click "Create Repository"
4. Get the clone URL

**Deploy:**
```bash
git remote add cpanel ssh://user@host:port/home/user/repositories/library.git
git push cpanel master
```

**After push:**
- Go to cPanel → Git Version Control
- Click "Manage" on your repository
- Click "Pull or Deploy" → "Update from Remote"
- Then manually copy files to `public_html`

### 2. Cloudways/GridPane/Other Modern Hosts

**Setup:**
1. They usually provide git integration in dashboard
2. Add your SSH key
3. Connect repository

**Deploy:**
- Usually automatic deployment after push
- Or use their deployment webhook

### 3. Traditional Shared Hosting with Git

**Setup:**
```bash
# Create bare repo on server
ssh user@host
cd ~
git init --bare library.git

# Set up post-receive hook
cd library.git/hooks
nano post-receive
```

**post-receive script:**
```bash
#!/bin/bash
GIT_WORK_TREE=/home/user/public_html git checkout -f
cd /home/user/public_html
yarn install
yarn build
```

Make it executable:
```bash
chmod +x post-receive
```

**From local:**
```bash
git remote add hosting ssh://user@host/~/library.git
git push hosting master
```

---

## Update Workflow (After Initial Setup)

### When You Make Changes:

**Option A (Source Code Push):**

```bash
cd /app/frontend

# Make your changes to mock.js or components
# ...

# Stage changes
git add .

# Commit
git commit -m "Added new books and updated covers"

# Push to hosting
git push hosting master

# Then SSH to server and rebuild:
ssh user@host
cd /path/to/repo
yarn build
cp -r build/* /public_html/
```

**Option B (Built Files Push):**

```bash
cd /app/frontend

# Make changes
# ...

# Build locally
yarn build

# Go to build folder
cd build

# Commit and push
git add .
git commit -m "Updated content"
git push hosting master -f
```

---

## Automatic Deployment (Advanced)

If your host supports it, set up automatic deployment:

### Create deploy script on server:

**File: `/home/user/deploy.sh`**

```bash
#!/bin/bash

# Navigate to repository
cd /home/user/repositories/library

# Pull latest changes
git pull origin master

# Install dependencies
yarn install

# Build
yarn build

# Copy to web root
cp -r build/* /home/user/public_html/

# Clear cache (if applicable)
# Add any cache clearing commands here

echo "Deployment complete!"
```

**Make executable:**
```bash
chmod +x /home/user/deploy.sh
```

**Run after each push:**
```bash
ssh user@host "/home/user/deploy.sh"
```

Or set up a webhook if your hosting supports it.

---

## Important Files for Git

### Files You MUST Include:

1. **package.json** - Lists all dependencies
   ```json
   {
     "dependencies": {
       "react": "^19.0.0",
       // ... all packages
     }
   }
   ```

2. **yarn.lock** or **package-lock.json** - Locks exact versions

3. **All source files** in `src/` folder

4. **Configuration files:**
   - `craco.config.js`
   - `tailwind.config.js`
   - `.env` (if any, but NOT `.env.local`)

### Files to EXCLUDE:

1. **node_modules/** - Can be 100+ MB
2. **build/** - Generated files (if using Option A)
3. **.env.local** - Local configuration
4. **.DS_Store** - Mac system files

---

## Troubleshooting

### Problem: "build folder is empty after building on server"

**Solution:**
```bash
# Make sure you're in the right directory
pwd

# Check if package.json exists
ls -la package.json

# Try building with verbose output
yarn build --verbose

# Check for errors
echo $?
```

### Problem: "yarn command not found on server"

**Solution:**
```bash
# Install yarn globally
npm install -g yarn

# Or use npm instead
npm install
npm run build
```

### Problem: "Out of memory during build"

**Solution:**
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 yarn build

# Or build locally and push built files (Option B)
```

### Problem: "Git push rejected"

**Solution:**
```bash
# Force push (be careful!)
git push hosting master -f

# Or pull first
git pull hosting master
git push hosting master
```

---

## Best Practices

### 1. Use Branches

```bash
# Create development branch
git checkout -b development

# Make changes
# ...

# Commit
git commit -m "Testing new feature"

# Test locally
yarn start

# When ready, merge to master
git checkout master
git merge development

# Push to hosting
git push hosting master
```

### 2. Tag Releases

```bash
# Tag a release
git tag -a v1.0 -m "Version 1.0 - Initial release"
git push hosting v1.0

# Tag after updates
git tag -a v1.1 -m "Version 1.1 - Added 22 new books"
git push hosting v1.1
```

### 3. Keep Commits Clean

```bash
# Good commit messages
git commit -m "Added Sharh Fath al-Qadir with authentic cover"
git commit -m "Fixed: Commentary relationships for Al-Hidaya"
git commit -m "Updated: Nested subject filtering"

# Bad commit messages
git commit -m "changes"
git commit -m "asdf"
git commit -m "fixed stuff"
```

### 4. Regular Backups

```bash
# Clone your repo regularly as backup
git clone YOUR_GIT_URL backup-2024-12-08

# Or export as archive
git archive --format=tar.gz --output=library-backup.tar.gz master
```

---

## Quick Reference Commands

### Initial Setup:
```bash
cd /app/frontend
git init
git remote add hosting YOUR_GIT_URL
git add .
git commit -m "Initial commit"
git push hosting master
```

### Update Workflow:
```bash
# Make changes to files
git add .
git commit -m "Description of changes"
git push hosting master
# Then build on server or deploy script
```

### Check Status:
```bash
git status                    # What's changed
git log --oneline            # Commit history
git diff                     # See changes
git remote -v                # See remotes
```

### Undo Changes:
```bash
git checkout -- filename     # Undo changes to file
git reset HEAD filename      # Unstage file
git reset --hard HEAD        # Undo all changes (dangerous!)
```

---

## What To Do Next

1. **Get your Git URL from hosting:**
   - Check cPanel → Git Version Control
   - Or ask your hosting support

2. **Choose your approach:**
   - Option A: Push source + build on server (better)
   - Option B: Build locally + push files (easier)

3. **Set up remote:**
   ```bash
   cd /app/frontend
   git remote add hosting YOUR_GIT_URL
   ```

4. **Make first push:**
   ```bash
   git add .
   git commit -m "Islamic Classical Library - Initial version"
   git push hosting master
   ```

5. **Deploy:**
   - Either build on server
   - Or copy build files to web root

---

Need help with your specific hosting setup? Let me know your hosting provider and I can give you exact steps!
