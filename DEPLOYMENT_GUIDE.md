# Islamic Classical Library - Static Deployment Guide

## 📦 Your Static Files Are Ready!

The production build is located at: `/app/frontend/build/`

---

## 🚀 How to Upload to Your Web Host

### Step 1: Download the Build Files

You have two options:

**Option A: Via Emergent Interface**
- Look for the file download/export option in Emergent
- Download: `/tmp/islamic-library-static.tar.gz` (658 KB)

**Option B: Via Command Line (if you have SSH access)**
```bash
# The build files are at: /app/frontend/build/
```

### Step 2: Upload to Your Web Host

**Using cPanel:**
1. Log into your cPanel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain's directory)
4. Upload all files from the `build` folder
5. Make sure `index.html` is in the root of your domain folder

**Using FTP (FileZilla, etc.):**
1. Connect to your host via FTP
2. Navigate to your website's root directory (usually `public_html` or `www`)
3. Upload all files from the `build` folder
4. Ensure `index.html` is in the root

**File Structure After Upload:**
```
public_html/
├── index.html
├── favicon.ico
├── manifest.json
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── asset-manifest.json
```

### Step 3: Configure (If Needed)

If your site will be in a subdirectory (e.g., `yoursite.com/library/`), you need to rebuild with:

```bash
# Edit /app/frontend/package.json
# Add: "homepage": "/library"
# Then rebuild: cd /app/frontend && yarn build
```

---

## ✏️ How to Update Content (Books, Photos, Details)

Since this is a static build, you'll need to edit the source and rebuild.

### To Add/Edit Books:

1. **Edit the Mock Data File:**
   - File location: `/app/frontend/src/mock.js`
   - This contains all books, categories, authors, etc.

2. **Edit Book Information:**
```javascript
{
  id: 16,
  title: "Your New Book Title",
  arabicTitle: "العنوان بالعربي",
  author: "Author Name",
  authorArabic: "اسم المؤلف",
  authorBirthYear: 500,  // Important for chronological sorting
  category: "Fiqh",
  subject: "Subject Name",
  madhab: "Hanafi",
  language: "Arabic",
  creed: "Maturidi",
  era: "Classical",
  bookType: "Commentary",
  studyLevel: "Intermediate",  // Beginner, Intermediate, Upper Intermediate, Advanced, Specialist
  pages: 1200,
  publicationYear: "600 AH",
  scholarEra: "6th Century Hijri",
  description: "Main description of the book...",
  uniqueAspects: "What makes this book special and unique...",
  coverImage: "https://your-image-url.com/book-cover.jpg",
  isPlaceholder: false
}
```

3. **To Change Book Cover Images:**
   - Upload your image to your web host
   - Use the full URL: `https://yoursite.com/images/book-cover.jpg`
   - OR use external image hosting (Imgur, Cloudinary, etc.)
   - Update the `coverImage` field with the new URL

4. **To Add New Filter Options:**

```javascript
// Add to the appropriate array in mock.js

export const categories = [
  "All",
  "Tafsir",
  "Hadith",
  "Fiqh",
  "YOUR NEW CATEGORY",  // Add here
  // ...
];

export const studyLevels = [
  "All",
  "Beginner",
  "Intermediate",
  "YOUR NEW LEVEL",  // Add here
  // ...
];
```

### After Making Changes:

1. **Rebuild the app:**
```bash
cd /app/frontend
yarn build
```

2. **Re-upload the `build` folder** to your web host
3. Your changes will be live!

---

## 🖼️ Managing Book Cover Images

### Best Practices:

**Option 1: Host on Your Server**
1. Create an `images` folder in your web root
2. Upload book covers there
3. Use relative or absolute URLs: 
   - `https://yoursite.com/images/book1.jpg`

**Option 2: External Image Hosting (Recommended)**
- **Imgur**: Free, simple, fast
- **Cloudinary**: Free tier, optimized delivery
- **AWS S3**: Scalable, pay-as-you-go

**Option 3: Placeholder System**
- Current images use external URLs (Unsplash, Pexels)
- You can replace them one by one as you get proper book covers
- Set `isPlaceholder: true` for books you haven't updated yet

---

## 📝 Quick Reference: Common Edits

### Change Sort Order Default:
File: `/app/frontend/src/components/Home.jsx`
Line: `const [sortBy, setSortBy] = useState('scholarBirthYear');`
Change to: `'title'`, `'studyLevel'`, `'pages'`, etc.

### Add New Sort Option:
File: `/app/frontend/src/mock.js`
```javascript
export const sortOptions = [
  { value: 'scholarBirthYear', label: 'Scholar Birth Year (Default)' },
  { value: 'yourNewSort', label: 'Your New Sort Method' },
];
```

### Change Color Scheme:
File: `/app/frontend/src/index.css`
Look for CSS variables under `:root` section

---

## 🔧 Rebuilding the Site

Whenever you make changes, follow these steps:

1. **Edit the files** (mock.js, components, etc.)
2. **Test locally** (optional): `cd /app/frontend && yarn start`
3. **Build for production**: `cd /app/frontend && yarn build`
4. **Upload the `build` folder** to your web host
5. **Clear browser cache** to see changes

---

## 📂 File Structure Reference

```
/app/frontend/
├── src/
│   ├── mock.js              ← ALL YOUR CONTENT IS HERE
│   ├── components/
│   │   ├── Home.jsx         ← Main page
│   │   ├── BookCard.jsx     ← Book thumbnail cards
│   │   ├── BookDetail.jsx   ← Book detail modal
│   │   └── FilterPanel.jsx  ← Filter sidebar
│   └── App.js
└── build/                   ← UPLOAD THIS TO YOUR HOST
    ├── index.html
    └── static/
```

---

## 🆘 Troubleshooting

**Site shows blank page:**
- Check if `index.html` is in the correct directory
- Clear browser cache (Ctrl+F5)
- Check browser console for errors

**Images not loading:**
- Verify image URLs are correct
- Check if images are publicly accessible
- Ensure HTTPS if your site uses HTTPS

**Filters not working:**
- Rebuild the site: `yarn build`
- Re-upload all files
- Clear browser cache

**Changes not showing:**
- Always clear browser cache after upload
- Some hosts cache files - wait 5-10 minutes
- Check if you uploaded to correct directory

---

## 💡 Future Upgrade Path

If you later want an admin panel to avoid rebuilding:

1. **Keep this Emergent project**
2. **Deploy the backend version** (we can build it anytime)
3. **You'll get:**
   - Web-based admin panel
   - Direct file uploads
   - Edit content without code
   - But you'll need hosting (Emergent, Railway, Render, etc.)

For now, the static version is perfect for low-maintenance needs!

---

## ✅ Summary

**What You Have:**
- Fully functional Islamic library website
- 15 Hanafi books with complete details
- Advanced filtering and sorting
- Mobile-responsive design

**How to Deploy:**
- Upload `/app/frontend/build/` folder to your web host
- Point your domain to it
- Done!

**How to Update:**
- Edit `/app/frontend/src/mock.js`
- Run `yarn build`
- Re-upload `build` folder

**Cost:**
- $0 (just your existing web hosting)

---

Need help with any of these steps? Let me know!
