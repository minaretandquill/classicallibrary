# Easy Way to Upload Your Website to Plesk (No Technical Skills Needed)

## You Need to Upload Files, Not Use Git

Since you're not comfortable with command line, here's the **easiest way**:

---

## Option 1: Direct File Upload Through Plesk (EASIEST)

### Step 1: Get Your Website Files

Your website files are ready in a compressed file: `islamic-library-website.tar.gz` (676 KB)

**Download it from Emergent** using the file export/download feature.

### Step 2: Extract the Files on Your Computer

1. Download and extract the `.tar.gz` file on your computer
2. You'll get a folder called `build`
3. Inside `build` you'll see:
   - `index.html`
   - `static` folder
   - `manifest.json`
   - Other files

### Step 3: Upload to Plesk

1. **Log into Plesk** (your hosting control panel)
2. Go to **Files** → **File Manager**
3. Navigate to your website's folder:
   - Usually called `httpdocs` or `public_html`
   - For `library.minaretandquill.com` it might be:
     - `/httpdocs/` or
     - `/library.minaretandquill.com/httpdocs/`

4. **Delete all files** in that folder (the default "welcome" page files)

5. **Upload all files** from your `build` folder:
   - Click "Upload" button
   - Select ALL files from the `build` folder on your computer
   - Upload them

6. **Done!** Visit https://library.minaretandquill.com

---

## Option 2: Use ZIP File (Even Easier)

### Step 1: I'll Create a ZIP for You

The website files are also available as a regular ZIP file that's easier to work with on Windows/Mac.

### Step 2: Extract ZIP on Your Computer

1. Download `islamic-library.zip`
2. Right-click → Extract All
3. You'll see all the website files

### Step 3: Upload to Plesk

Same as above - use Plesk File Manager to upload all the extracted files.

---

## Plesk File Manager Guide (With Pictures)

### Finding File Manager in Plesk:

1. Log into Plesk
2. Click on your domain: `library.minaretandquill.com`
3. Click **"Files"** in the left menu
4. Click **"File Manager"**

### Finding the Right Folder:

Look for:
- `httpdocs` folder (most common)
- or `public_html` folder
- This is where your website files should go

### Uploading Files:

1. Click **"Upload"** button at the top
2. Select all files from your extracted `build` folder:
   - `index.html`
   - `static` folder
   - `manifest.json`
   - `asset-manifest.json`
   - `favicon.ico`
   - All other files

3. Wait for upload to complete

### What Your Folder Should Look Like After Upload:

```
httpdocs/
├── index.html              ← Main file
├── favicon.ico
├── manifest.json
├── asset-manifest.json
└── static/                 ← Folder with CSS/JS
    ├── css/
    │   └── main.xxx.css
    └── js/
        └── main.xxx.js
```

---

## Alternative: FTP Upload (If You Know FTP)

If you're comfortable with FTP:

1. Get FTP credentials from Plesk:
   - Plesk → Files → FTP Access
   - Note: server, username, password

2. Use FTP client like **FileZilla** (free)

3. Connect to your server

4. Navigate to `httpdocs` folder

5. Delete old files

6. Upload all files from `build` folder

---

## After Upload - Testing

### Test 1: Visit Your Website

Go to: **https://library.minaretandquill.com**

You should see your Islamic library with books, not the default page.

### Test 2: Try Clicking on Books

Click on any book card - should open details modal.

### Test 3: Try Filtering

Use the filters on the left side.

### If You Still See Default Page:

1. **Clear browser cache**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Wait a few minutes** - sometimes takes time to update
3. **Check correct folder** - make sure files are in `httpdocs`, not a subfolder

---

## What Files to Upload

You need to upload **everything inside the `build` folder**, including:

✅ `index.html` - Main page  
✅ `static/` folder - All the CSS and JavaScript  
✅ `manifest.json` - App configuration  
✅ `asset-manifest.json` - File references  
✅ `favicon.ico` - Website icon  
✅ All other files

❌ **Don't upload:**
- `src` folder
- `node_modules` folder  
- `package.json`
- These are source files, not needed on server

---

## Common Mistakes

### Mistake 1: Uploaded to Wrong Folder

**Problem:** Files uploaded to `/library.minaretandquill.com/` instead of `/library.minaretandquill.com/httpdocs/`

**Fix:** Move files into the `httpdocs` subfolder

### Mistake 2: Uploaded a Folder Instead of Files

**Problem:** You have `httpdocs/build/index.html` instead of `httpdocs/index.html`

**Fix:** Move everything up one level - files should be directly in `httpdocs`

### Mistake 3: Didn't Delete Old Files

**Problem:** Default page files still there

**Fix:** Delete everything in `httpdocs` first, then upload your files

---

## Getting Your Files from Emergent

### Method 1: Direct Download

If Emergent has a download feature, download:
- `/app/frontend/build/` folder
- Or the compressed file: `islamic-library-website.tar.gz`

### Method 2: Through GitHub

If you pushed to GitHub:

1. Go to your GitHub repository
2. Click on the `build` folder (if you pushed it)
3. Download files
4. Upload to Plesk

**Note:** GitHub might not have the `build` folder if `.gitignore` excludes it.

---

## Future Updates (Easy Way)

When you want to update your website with new books:

### Option A: Ask Someone to Build

1. Update your `mock.js` file (add/edit books)
2. Push to GitHub
3. Ask someone technical to run `npm run build` for you
4. Download new `build` folder
5. Upload to Plesk again (replace old files)

### Option B: Use Emergent

1. Make changes on Emergent
2. Have Emergent rebuild
3. Download new files
4. Upload to Plesk

---

## Need Help?

**If stuck, tell me:**

1. Can you access Plesk File Manager? (Yes/No)
2. Can you see the `httpdocs` folder? (Yes/No)
3. Do you have the build files downloaded? (Yes/No)

And I'll guide you through it step by step!

---

## Summary: What You Need to Do

1. ✅ Get website files (download `build` folder from Emergent)
2. ✅ Extract files on your computer
3. ✅ Log into Plesk
4. ✅ Go to File Manager
5. ✅ Find `httpdocs` folder
6. ✅ Delete old files
7. ✅ Upload all your website files
8. ✅ Visit https://library.minaretandquill.com

That's it! No command line needed.
