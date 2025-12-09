# How to Push Build Files to GitHub - Step by Step

## Good News!
The build files are ready and committed. We just need to push them to GitHub.

---

## Option 1: Push from Emergent (If You Have GitHub Token)

If Emergent supports GitHub authentication, run this:

```bash
cd /app/frontend/build

# Use personal access token
git push https://YOUR_GITHUB_TOKEN@github.com/minaretandquill/classicallibrary.git production -f
```

**To get a GitHub token:**
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Select "repo" permissions
4. Copy the token
5. Replace YOUR_GITHUB_TOKEN in the command above

---

## Option 2: Download & Push from Your Computer (EASIEST)

Since authentication is tricky from Emergent, here's what to do:

### Step 1: Download the Committed Files

The files are ready at `/app/frontend/build/` and already committed to git.

**In Emergent terminal:**
```bash
# Create a bundle file you can download
cd /app/frontend/build
git bundle create ~/build.bundle production
```

Then download `~/build.bundle` from Emergent.

### Step 2: On Your Computer

```bash
# Clone from the bundle
git clone build.bundle islamic-library-build
cd islamic-library-build

# Add GitHub remote
git remote add origin https://github.com/minaretandquill/classicallibrary.git

# Push to GitHub
git push origin production
```

---

## Option 3: Use GitHub Web Interface (NO TERMINAL NEEDED)

This is the easiest if you're not comfortable with command line:

### Step 1: Create Production Branch on GitHub

1. Go to https://github.com/minaretandquill/classicallibrary
2. Click the branch dropdown (says "main" or "master")
3. Type "production" and click "Create branch: production"

### Step 2: Upload Files via GitHub Web

1. Make sure you're on the "production" branch
2. Click "Add file" → "Upload files"
3. Drag and drop these files from `/app/frontend/build/`:
   - `index.html`
   - `asset-manifest.json`
   - `_redirects`
   - The entire `static` folder
4. Commit the upload

### Step 3: Download as ZIP

1. Stay on "production" branch
2. Click green "Code" button
3. Click "Download ZIP"
4. Extract on your computer

### Step 4: Upload to Plesk

1. Log into Plesk
2. File Manager → httpdocs
3. Delete old files
4. Upload all extracted files
5. Done!

---

## What Files to Upload to GitHub (Manual Upload)

If using GitHub web interface, upload these from `/app/frontend/build/`:

```
✅ index.html
✅ asset-manifest.json
✅ _redirects
✅ static/ folder (entire folder with subfolders)
   ├── css/
   │   ├── main.724df8df.css
   │   └── main.724df8df.css.map
   └── js/
       ├── main.8ba24cdb.js
       ├── main.8ba24cdb.js.LICENSE.txt
       └── main.8ba24cdb.js.map
```

**Total: 8 files in this structure**

---

## Current Status

✅ Build files are ready at `/app/frontend/build/`
✅ Files are committed to git locally
✅ Ready to push to GitHub

❓ Just need authentication to push

---

## My Recommendation

**Use Option 3** (GitHub Web Interface) - it's the simplest:

1. Go to your GitHub repo
2. Create "production" branch
3. Manually upload the 8 files listed above
4. Download as ZIP
5. Upload to Plesk

No command line needed!

---

## Files Are Also Available Here

If you can download from Emergent, these files are ready:

- **All files:** `/app/frontend/build/` (individual files)
- **Compressed:** `/app/islamic-library-production.tar.gz` (676 KB)
- **ZIP:** `/app/islamic-library-website.zip` (676 KB)

Just need to get them from Emergent to your computer, then to Plesk.
