# Plesk Deployment - Exact Fix for library.minaretandquill.com

## Your Specific Setup:

- **Git Repository:** `/library.minaretandquill.com`
- **Web Root:** `/var/www/html/`
- **Server:** Plesk with Apache

---

## Quick Fix - Run These Commands

SSH into your server and run these commands **exactly**:

```bash
# 1. Navigate to your git repository
cd /library.minaretandquill.com

# 2. Check what's there
ls -la

# 3. If you see src/ and package.json, you need to build
# Install dependencies (if not already done)
npm install
# or
yarn install

# 4. Build the production files
npm run build
# or
yarn build

# 5. Check build folder was created
ls -la build/

# 6. Clear the default page in web root
sudo rm -rf /var/www/html/*

# 7. Copy your built files to web root
sudo cp -r build/* /var/www/html/

# 8. Fix permissions
sudo chown -R apache:apache /var/www/html/
sudo chmod -R 755 /var/www/html/

# 9. Verify files are there
ls -la /var/www/html/
```

---

## Alternative: Plesk Specific Paths

Plesk usually has domain-specific paths. Your actual web root might be:

```bash
/var/www/vhosts/minaretandquill.com/httpdocs/
```

or

```bash
/var/www/vhosts/minaretandquill.com/library.minaretandquill.com/httpdocs/
```

**To find your exact web root:**

```bash
# Check Plesk domain configuration
sudo grep -r "library.minaretandquill.com" /var/www/vhosts/
```

Once you find it, use that path instead of `/var/www/html/`

---

## Step-by-Step (If Above Doesn't Work)

### Step 1: Find Your Web Root in Plesk

1. Log into **Plesk Panel**
2. Go to **Domains** → `library.minaretandquill.com`
3. Click **Hosting Settings**
4. Look for **Document root** - note this path

### Step 2: SSH and Navigate

```bash
# SSH to server
ssh your-username@your-server-ip

# Go to git repository
cd /library.minaretandquill.com

# Confirm you're in the right place
pwd
# Should output: /library.minaretandquill.com

# Check what's here
ls -la
# You should see: src/, public/, package.json, etc.
```

### Step 3: Build Your Site

```bash
# Still in /library.minaretandquill.com

# Install dependencies (first time or after updates)
npm install

# Build production files
npm run build

# Verify build folder exists
ls -la build/

# Check what's inside build folder
ls -la build/
# Should see: index.html, static/, manifest.json, etc.
```

### Step 4: Copy to Web Root

**If web root is `/var/www/html/`:**

```bash
# Backup current content (just in case)
sudo cp -r /var/www/html/ /var/www/html.backup

# Remove default page
sudo rm -rf /var/www/html/*

# Copy your files
sudo cp -r /library.minaretandquill.com/build/* /var/www/html/

# Fix ownership
sudo chown -R apache:apache /var/www/html/

# Fix permissions
sudo find /var/www/html/ -type f -exec chmod 644 {} \;
sudo find /var/www/html/ -type d -exec chmod 755 {} \;
```

**If web root is Plesk's httpdocs:**

```bash
# Find your domain's httpdocs
cd /var/www/vhosts/minaretandquill.com/

# List to see structure
ls -la

# Look for library.minaretandquill.com or httpdocs
# Once found, use that path. Example:
WEB_ROOT="/var/www/vhosts/minaretandquill.com/library.minaretandquill.com/httpdocs"

# Backup
sudo cp -r $WEB_ROOT/ ${WEB_ROOT}.backup

# Clear
sudo rm -rf $WEB_ROOT/*

# Copy
sudo cp -r /library.minaretandquill.com/build/* $WEB_ROOT/

# Fix ownership and permissions
sudo chown -R $USER:psaserv $WEB_ROOT/
sudo find $WEB_ROOT/ -type f -exec chmod 644 {} \;
sudo find $WEB_ROOT/ -type d -exec chmod 755 {} \;
```

### Step 5: Verify Deployment

```bash
# Check files are in web root
ls -la /var/www/html/
# or
ls -la /var/www/vhosts/minaretandquill.com/library.minaretandquill.com/httpdocs/

# You should see:
# index.html
# static/ folder
# manifest.json
# asset-manifest.json
```

### Step 6: Test in Browser

1. Visit: `https://library.minaretandquill.com`
2. You should see your Islamic library, not the default page
3. Try clicking on books to make sure everything works

---

## Common Plesk Issues & Fixes

### Issue 1: Permission Denied

If you get "Permission denied":

```bash
# Use sudo
sudo cp -r /library.minaretandquill.com/build/* /var/www/html/

# Fix ownership
sudo chown -R apache:apache /var/www/html/
# or for Plesk
sudo chown -R your-username:psaserv /var/www/html/
```

### Issue 2: npm/yarn not found

If `npm` or `yarn` command not found:

```bash
# Check if Node.js is installed
node -v

# If not, install it (on CentOS/RHEL)
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs

# Then try building again
cd /library.minaretandquill.com
npm install
npm run build
```

### Issue 3: Build folder is empty or missing

```bash
# Make sure you're in the right directory
cd /library.minaretandquill.com

# Check if package.json exists
cat package.json

# If it says "react-scripts", then build with:
npm run build

# If build fails, check error messages
npm run build 2>&1 | tee build-error.log
cat build-error.log
```

### Issue 4: Still seeing default page after copying

**Clear cache:**
- Browser: Ctrl+F5 (hard refresh)
- Server: `sudo systemctl restart httpd` or `sudo systemctl restart apache2`

**Check Apache is reading correct directory:**
```bash
# Check Apache config
sudo grep -r "DocumentRoot" /etc/httpd/conf*/
# or
sudo grep -r "DocumentRoot" /etc/apache2/

# Make sure it points to where you copied files
```

---

## Create Automatic Deployment Script

Once it works, create this script for easy updates:

**File: `/library.minaretandquill.com/deploy.sh`**

```bash
#!/bin/bash

echo "=== Deploying Islamic Library ==="

# Navigate to repository
cd /library.minaretandquill.com

# Pull latest from git
echo "Pulling latest changes..."
git pull origin master

# Install/update dependencies
echo "Installing dependencies..."
npm install

# Build
echo "Building production files..."
npm run build

# Check build succeeded
if [ ! -d "build" ]; then
    echo "ERROR: Build failed!"
    exit 1
fi

# Copy to web root
echo "Copying to web root..."
sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/

# Fix permissions
echo "Fixing permissions..."
sudo chown -R apache:apache /var/www/html/
sudo find /var/www/html/ -type f -exec chmod 644 {} \;
sudo find /var/www/html/ -type d -exec chmod 755 {} \;

# Restart Apache (optional)
echo "Restarting web server..."
sudo systemctl restart httpd

echo "=== Deployment Complete! ==="
echo "Visit: https://library.minaretandquill.com"
```

**Make it executable:**
```bash
chmod +x /library.minaretandquill.com/deploy.sh
```

**Use it:**
```bash
# After you push changes to git, just run:
/library.minaretandquill.com/deploy.sh
```

---

## Troubleshooting Checklist

If it still doesn't work, check these:

```bash
# 1. Verify files in git repo
ls -la /library.minaretandquill.com/
# Should see: src/, public/, package.json

# 2. Verify build folder exists and has content
ls -la /library.minaretandquill.com/build/
ls -la /library.minaretandquill.com/build/static/

# 3. Verify files in web root
ls -la /var/www/html/
# Should see: index.html, static/, manifest.json

# 4. Check index.html content
head -20 /var/www/html/index.html
# Should see React app HTML, not "Welcome to..."

# 5. Check Apache is running
sudo systemctl status httpd
# or
sudo systemctl status apache2

# 6. Check Apache error log
sudo tail -50 /var/log/httpd/error_log
# or
sudo tail -50 /var/log/apache2/error_log

# 7. Check file permissions
ls -la /var/www/html/index.html
# Should be readable by web server

# 8. Test with curl
curl -I https://library.minaretandquill.com
# Should return 200 OK
```

---

## Quick Command Summary

**Most likely fix (run all these):**

```bash
cd /library.minaretandquill.com
npm install
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/
sudo chown -R apache:apache /var/www/html/
sudo chmod -R 755 /var/www/html/
sudo systemctl restart httpd
```

Then visit: https://library.minaretandquill.com

---

Let me know if you get any errors when running these commands!
