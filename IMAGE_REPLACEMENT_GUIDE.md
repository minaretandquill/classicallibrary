# Image Replacement Guide - Islamic Classical Library

## 📍 Where Images Are Stored

**File Location:** `/app/frontend/src/mock.js`

All 15 book cover images are defined in the `coverImage` field of each book object.

---

## 🔍 Current Images (All 15 Books)

| Book ID | Book Title | Current Image URL |
|---------|-----------|-------------------|
| 1 | Al-Mabsut | https://images.unsplash.com/photo-1599493758737-31c5be444eff |
| 2 | Badai' al-Sanai' | https://images.unsplash.com/photo-1744957280831-8d30f63914b8 |
| 3 | Al-Hidaya | https://images.unsplash.com/photo-1622137879013-beaca5144a4b |
| 4 | Al-Ikhtiyar | https://images.unsplash.com/photo-1590720367388-6cdfc716b933 |
| 5 | Kanz al-Daqa'iq | https://images.unsplash.com/photo-1764509422504-f9aee0a1dd76 |
| 6 | Nur al-Idah | https://images.unsplash.com/photo-1597505495109-7fc35bb64d8e |
| 7 | Radd al-Muhtar | https://images.unsplash.com/photo-1627337840960-d55af60bf8e3 |
| 8 | Al-Fiqh al-Islami | https://images.unsplash.com/photo-1641816514743-d264c1481585 |
| 9 | Hashiyat Ibn 'Abidin | https://images.unsplash.com/photo-1724441647620-9fdfb540d968 |
| 10 | Mukhtasar al-Quduri | https://images.unsplash.com/photo-1590720478291-aaabf8d53c49 |
| 11 | Sharh Fath al-Qadir | https://images.unsplash.com/photo-1590720485412-fc0322a7acb2 |
| 12 | Al-Fatawa al-Hindiyya | https://images.unsplash.com/photo-1626092811141-34babe0cb353 |
| 13 | Tabyin al-Haqa'iq | https://images.pexels.com/photos/8164399/pexels-photo-8164399.jpeg |
| 14 | Majma' al-Anhur | https://images.pexels.com/photos/14513945/pexels-photo-14513945.jpeg |
| 15 | Fiqh al-Imam | https://images.pexels.com/photos/27176661/pexels-photo-27176661.jpeg |

**Note:** All current images are from Unsplash and Pexels (free stock images).

---

## ✏️ How to Replace Images

### **Method 1: Direct URL Replacement in mock.js**

1. Open `/app/frontend/src/mock.js`
2. Find the book you want to update
3. Replace the URL:

**Example:**
```javascript
{
  id: 3,
  title: "Al-Hidaya",
  // ... other fields ...
  coverImage: "https://yoursite.com/images/al-hidaya-cover.jpg",  // ← Change this line
  isPlaceholder: false
}
```

### **Method 2: Replace All at Once**

If you have all your book covers ready, you can find and replace:

1. Search for: `coverImage: "https://images.unsplash.com/photo-1622137879013-beaca5144a4b"`
2. Replace with: `coverImage: "https://yoursite.com/images/al-hidaya.jpg"`

Repeat for each book.

---

## 🖼️ Image Hosting Options

### **Option 1: Host on Your Web Server (Recommended)**

**Steps:**
1. Create an images folder: `public_html/images/book-covers/`
2. Upload your book cover images there
3. Use the full URL in mock.js:

```javascript
coverImage: "https://yourwebsite.com/images/book-covers/al-hidaya.jpg"
```

**Pros:**
- ✅ Full control
- ✅ No external dependencies
- ✅ Fast loading
- ✅ Free (uses your hosting)

**Cons:**
- ❌ Uses your bandwidth
- ❌ No automatic optimization

---

### **Option 2: Imgur (Free & Easy)**

**Steps:**
1. Go to https://imgur.com
2. Click "New post" (no account needed)
3. Upload your image
4. Right-click the image → "Copy image address"
5. Paste the URL in mock.js

**Example URL:** `https://i.imgur.com/ABC123.jpg`

**Pros:**
- ✅ Free forever
- ✅ No account required
- ✅ Fast CDN delivery
- ✅ Simple to use

**Cons:**
- ❌ Limited control
- ❌ Images are public

---

### **Option 3: Cloudinary (Free Tier)**

**Steps:**
1. Sign up at https://cloudinary.com (free tier)
2. Upload images to Media Library
3. Copy the public URL
4. Use in mock.js

**Example URL:** `https://res.cloudinary.com/yourname/image/upload/v123/book.jpg`

**Pros:**
- ✅ Free tier (25GB storage)
- ✅ Automatic optimization
- ✅ Image transformations
- ✅ CDN delivery

**Cons:**
- ❌ Requires account
- ❌ Slightly more complex

---

### **Option 4: AWS S3 (Professional)**

For larger scale projects.

**Pros:**
- ✅ Scalable
- ✅ Reliable
- ✅ Professional

**Cons:**
- ❌ Costs money
- ❌ More setup required

---

## 📸 Image Requirements

### **Recommended Specifications:**

- **Format:** JPG or PNG
- **Aspect Ratio:** 3:4 (portrait) - e.g., 600×800px
- **File Size:** Under 500KB per image
- **Resolution:** 600-1000px width is enough
- **Naming:** Use descriptive names: `al-hidaya-cover.jpg`

### **Why These Specs?**

- **3:4 ratio:** Matches the card design
- **Small file size:** Fast loading
- **Moderate resolution:** Good quality without bloat

---

## 🔄 Step-by-Step Replacement Process

### **Replace ONE Image:**

1. **Choose your hosting method** (your server, Imgur, etc.)
2. **Upload the image** to your chosen location
3. **Get the full URL** (e.g., `https://yoursite.com/images/book1.jpg`)
4. **Open mock.js** (`/app/frontend/src/mock.js`)
5. **Find the book:**
   ```javascript
   {
     id: 3,
     title: "Al-Hidaya",
     // ...
     coverImage: "OLD_URL_HERE",  // Find this line
   }
   ```
6. **Replace the URL:**
   ```javascript
   coverImage: "https://yoursite.com/images/al-hidaya.jpg",  // New URL
   ```
7. **Save the file**
8. **Rebuild:** `cd /app/frontend && yarn build`
9. **Upload** the new `build` folder to your host

### **Replace ALL Images at Once:**

1. **Prepare all 15 book covers**
2. **Upload all to your hosting** (name them clearly)
3. **Create a list of URLs:**
   ```
   Book 1: https://yoursite.com/images/al-mabsut.jpg
   Book 2: https://yoursite.com/images/badai-al-sanai.jpg
   Book 3: https://yoursite.com/images/al-hidaya.jpg
   ...and so on
   ```
4. **Open mock.js**
5. **Replace each coverImage URL** one by one
6. **Save, rebuild, upload**

---

## 🎨 Placeholder System

If you don't have all book covers yet:

```javascript
{
  id: 5,
  title: "Kanz al-Daqa'iq",
  // ...
  coverImage: "https://images.unsplash.com/photo-1764509422504-f9aee0a1dd76",  // Temporary
  isPlaceholder: true  // ← Set this to true
}
```

When you get the real cover:
```javascript
{
  id: 5,
  title: "Kanz al-Daqa'iq",
  // ...
  coverImage: "https://yoursite.com/images/kanz-al-daqaiq.jpg",  // Real cover
  isPlaceholder: false  // ← Update this
}
```

**Benefit:** You can track which books still need real covers.

---

## 🔍 Finding the Right Book in mock.js

### **Method 1: Search by Title**
Press Ctrl+F (or Cmd+F on Mac) and search for the book title:
- Search: `"Al-Hidaya"`
- This takes you to that book's entry

### **Method 2: Search by ID**
If you know the book ID:
- Search: `id: 3`

### **Method 3: Line Numbers**
Here are the approximate line numbers for each book:

| Book ID | Title | Approximate Line |
|---------|-------|------------------|
| 1 | Al-Mabsut | Line 10-26 |
| 2 | Badai' al-Sanai' | Line 28-49 |
| 3 | Al-Hidaya | Line 51-72 |
| 4 | Al-Ikhtiyar | Line 74-95 |
| 5 | Kanz al-Daqa'iq | Line 97-118 |
| 6 | Nur al-Idah | Line 120-141 |
| 7 | Radd al-Muhtar | Line 143-164 |
| 8 | Al-Fiqh al-Islami | Line 166-187 |
| 9 | Hashiyat Ibn 'Abidin | Line 189-210 |
| 10 | Mukhtasar al-Quduri | Line 212-233 |
| 11 | Sharh Fath al-Qadir | Line 235-256 |
| 12 | Al-Fatawa al-Hindiyya | Line 258-279 |
| 13 | Tabyin al-Haqa'iq | Line 281-302 |
| 14 | Majma' al-Anhur | Line 304-325 |
| 15 | Fiqh al-Imam | Line 327-348 |

---

## 💡 Pro Tips

### **Batch Renaming Images**
Name your files consistently before uploading:
```
book-01-al-mabsut.jpg
book-02-badai-al-sanai.jpg
book-03-al-hidaya.jpg
...etc
```

### **Test One First**
Replace one image, rebuild, upload, and test before doing all 15.

### **Keep Backups**
Before making changes, save a backup copy of mock.js.

### **Image Optimization**
Use tools like:
- **TinyPNG.com** - Compress images (free)
- **Squoosh.app** - Google's image compressor
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)

### **Fallback Images**
The code has a fallback if an image fails to load:
```javascript
onError={(e) => {
  e.target.src = 'https://images.unsplash.com/photo-1599493758737-31c5be444eff';
}}
```

This prevents broken image icons.

---

## ⚠️ Common Issues & Solutions

### **Image Not Showing:**
- ✅ Check if URL is correct (copy-paste in browser)
- ✅ Ensure URL uses HTTPS (not HTTP)
- ✅ Verify image is publicly accessible
- ✅ Clear browser cache (Ctrl+F5)
- ✅ Check file permissions on your server

### **Image Too Large/Slow:**
- ✅ Compress the image (under 500KB)
- ✅ Resize to max 1000px width
- ✅ Use JPG instead of PNG for photos

### **Wrong Aspect Ratio:**
- ✅ Crop to 3:4 ratio (e.g., 600×800px)
- ✅ Or use CSS object-fit (already handled in code)

---

## 📝 Quick Reference Commands

### View all current image URLs:
```bash
cd /app/frontend/src
grep "coverImage:" mock.js
```

### Count total images:
```bash
grep -c "coverImage:" /app/frontend/src/mock.js
```
*Result: 15 (one for each book)*

---

## 🎯 Summary

**Where:** `/app/frontend/src/mock.js` → Look for `coverImage:` field

**Replace:** Change the URL to your image's location

**Rebuild:** `cd /app/frontend && yarn build`

**Upload:** Upload new `build` folder to your host

---

Need help replacing specific images? Let me know which book and I can help you!
