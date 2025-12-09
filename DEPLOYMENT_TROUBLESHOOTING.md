# Deployment Troubleshooting - Default Page Showing

## Problem: You see hosting's default page instead of your website

This happens because files are in the git repository, but not in the web root.

---

## Quick Fix Guide

### Step 1: Find Your Web Root

Your web root is where hosting looks for website files. Common locations:

- `/home/username/public_html/`
- `/home/username/www/`
- `/var/www/html/`
- `/home/username/domains/yourdomain.com/public_html/`

**Check your hosting control panel for the exact path.**

### Step 2: Find Your Git Repository

Your git repository is probably at:

- `/home/username/repositories/library/`
- `/home/username/repository/`
- `/home/username/git/library/`

### Step 3: Copy Built Files to Web Root

**SSH into your server:**

```bash
ssh username@yourhost.com
```

**Option A: If you built on the server**

```bash
# Navigate to your repository
cd /home/username/repositories/library

# Check if build folder exists
ls -la build/

# If build folder exists, copy to web root
cp -r build/* /home/username/public_html/

# Or copy everything
cp -r build/. /home/username/public_html/
```

**Option B: If you need to build first**

```bash
# Go to repository
cd /home/username/repositories/library

# Install dependencies (first time only)
yarn install
# or
npm install

# Build the production files
yarn build
# or
npm run build

# Copy to web root
cp -r build/* /home/username/public_html/
```

### Step 4: Verify Files Are in Web Root

```bash
# Check web root
cd /home/username/public_html/

# List files
ls -la

# You should see:
# - index.html
# - static/ folder
# - asset-manifest.json
# - manifest.json
# - favicon.ico
```

**Expected structure in public_html:**
```
public_html/
├── index.html              ← Must be here!
├── favicon.ico
├── manifest.json
├── asset-manifest.json
├── static/
│   ├── css/
│   │   └── main.xxx.css
│   └── js/
│       └── main.xxx.js
└── (other files)
```

---

## Detailed Troubleshooting Steps

### Check 1: Are files in git repository?

```bash
# SSH to server
ssh username@host

# Find your repository
cd /home/username/repositories
ls -la

# Go into repository
cd library  # or your repo name

# Check what's there
ls -la

# You should see:
# - src/ folder
# - package.json
# - public/ folder
# Maybe build/ folder
```

### Check 2: Is there a build folder?

```bash
cd /home/username/repositories/library

# Check for build folder
ls -la build/

# If it doesn't exist, build it:
yarn install
yarn build

# Now check again
ls -la build/
```

### Check 3: What's in public_html?

```bash
cd /home/username/public_html/

# List all files
ls -la

# Is index.html there?
cat index.html

# If you see "Welcome to hosting" or similar = wrong files
# If you see React code = correct files but something else is wrong
```

### Check 4: Copy files correctly

```bash
# Make sure you're in the right place
cd /home/username/repositories/library/build

# Copy ALL files including hidden ones
cp -r . /home/username/public_html/

# Or remove old files first
cd /home/username/public_html/
rm -rf *  # ⚠️ Careful! This deletes everything
cd /home/username/repositories/library/build
cp -r . /home/username/public_html/
```

---

## Common Mistakes & Solutions

### Mistake 1: Copied src/ folder instead of build/ folder

**Problem:**
```bash
public_html/
├── src/          ❌ Wrong! This is source code
├── package.json  ❌ Wrong!
└── node_modules/ ❌ Wrong!
```

**Solution:**
```bash
# Remove wrong files
rm -rf /home/username/public_html/*

# Copy correct files
cp -r /home/username/repositories/library/build/* /home/username/public_html/
```

### Mistake 2: Files in subdirectory

**Problem:**
```bash
public_html/
└── library/          ❌ Files in subfolder
    ├── index.html
    └── static/
```

Your site is at: `yourdomain.com/library/` instead of `yourdomain.com/`

**Solution A:** Move files up
```bash
mv /home/username/public_html/library/* /home/username/public_html/
rm -rf /home/username/public_html/library/
```

**Solution B:** Configure domain to point to subdirectory (in hosting control panel)

### Mistake 3: No build folder

**Problem:**
```bash
cd /home/username/repositories/library/build
# bash: cd: build: No such file or directory
```

**Solution:**
```bash
cd /home/username/repositories/library

# Install dependencies
yarn install

# Build the site
yarn build

# Now the build folder should exist
ls -la build/
```

### Mistake 4: Wrong permissions

**Problem:** Files copied but showing 403 Forbidden or blank page

**Solution:**
```bash
# Fix permissions
cd /home/username/public_html/
chmod 755 .
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
```

---

## cPanel Specific Instructions

If using cPanel:

### Method 1: File Manager

1. Log into cPanel
2. Go to **File Manager**
3. Navigate to `public_html/`
4. **Delete all default files** (index.html, cgi-bin, etc.)
5. Go to your git repository folder (usually in `repositories/`)
6. Enter the `build/` folder
7. **Select all files** (including hidden files - enable "Show Hidden Files")
8. **Copy** (or Cut)
9. Navigate back to `public_html/`
10. **Paste**

### Method 2: Terminal in cPanel

1. Log into cPanel
2. Go to **Terminal**
3. Run these commands:

```bash
# Check where you are
pwd

# Go to repository
cd ~/repositories/library

# Check if build exists
ls -la build/

# If not, build it:
npm install
npm run build

# Remove old files from public_html
rm -rf ~/public_html/*

# Copy new files
cp -r build/* ~/public_html/

# Check result
ls -la ~/public_html/
```

---

## Testing Your Deployment

After copying files:

### Test 1: Check index.html exists

Visit: `https://yourdomain.com/`

You should see your library, not a default page.

### Test 2: Check static files

Visit: `https://yourdomain.com/static/js/main.xxxxx.js`

Should show JavaScript code, not 404.

### Test 3: Check browser console

Press F12 → Console tab

Should NOT show errors like:
- "Failed to load resource: 404"
- "Uncaught SyntaxError"

### Test 4: Clear cache

- Press Ctrl+F5 (hard refresh)
- Or Ctrl+Shift+Delete → Clear cache
- Then reload

---

## Complete Deployment Checklist

```bash
# 1. Connect via SSH
ssh username@host

# 2. Navigate to repository
cd ~/repositories/library

# 3. Pull latest changes (if you pushed updates)
git pull origin master

# 4. Install dependencies (if first time or package.json changed)
yarn install

# 5. Build production files
yarn build

# 6. Verify build folder exists and has files
ls -la build/
ls -la build/static/

# 7. Backup current public_html (optional)
tar -czf ~/backup-public_html-$(date +%Y%m%d).tar.gz ~/public_html/

# 8. Clear public_html
rm -rf ~/public_html/*

# 9. Copy build files to public_html
cp -r build/* ~/public_html/

# 10. Verify files in public_html
ls -la ~/public_html/
cat ~/public_html/index.html | head -20

# 11. Set correct permissions
cd ~/public_html/
chmod 755 .
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;

# 12. Test in browser
# Visit your domain
```

---

## Still Not Working?

### Check .htaccess file

React apps need this in `public_html/.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

Create it:
```bash
nano ~/public_html/.htaccess
# Paste the above content
# Save: Ctrl+X, Y, Enter
```

### Check paths in code

If site loads but assets missing:

In `/app/frontend/package.json`, add:
```json
{
  "homepage": ".",
  "name": "frontend",
  ...
}
```

Then rebuild:
```bash
cd /home/username/repositories/library
yarn build
cp -r build/* ~/public_html/
```

---

## Need More Help?

Tell me:
1. **Hosting provider:** (cPanel, Plesk, etc.)
2. **What you see:** (exact page content or error)
3. **Repository location:** (run `pwd` when in your repo folder)
4. **Web root location:** (run `pwd` when in public_html)
5. **Output of:** `ls -la ~/public_html/`

I'll give you exact commands to fix it!
