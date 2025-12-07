# Content Editing Guide - Islamic Classical Library

## 📚 Quick Start: How to Add/Edit Books

All your content is in ONE file: `/app/frontend/src/mock.js`

---

## Example: Adding a New Book

### Step 1: Open mock.js

Find the `export const books = [` section.

### Step 2: Copy this template and add to the array:

```javascript
{
  id: 16,  // ⚠️ Make sure this is unique! Increment from last book
  
  // Book Names
  title: "Your Book Title in English",
  arabicTitle: "عنوان الكتاب بالعربية",
  
  // Author Information
  author: "Imam Full Name",
  authorArabic: "الإمام الاسم الكامل",
  authorBirthYear: 450,  // 🔴 IMPORTANT: Used for default chronological sorting
  scholarEra: "5th Century Hijri",
  
  // Classification
  category: "Fiqh",  // Choose: Fiqh, Tafsir, Hadith, Aqeedah, Seerah, Arabic Language, Usul al-Fiqh, History, Sufism & Spirituality
  subject: "Hanafi Jurisprudence - Your Specific Topic",
  madhab: "Hanafi",  // Choose: Hanafi, Maliki, Shafi'i, Hanbali, Comparative, Independent, N/A
  creed: "Maturidi",  // Choose: Athari, Ash'ari, Maturidi, N/A
  era: "Classical",  // Choose: Salaf, Khalaf, Classical, Post-Classical, Modern
  bookType: "Commentary",  // Choose: Matn, Commentary, Translation, Epistle, Compilation, Reference
  
  // Study Information
  studyLevel: "Intermediate",  // Choose: Beginner, Intermediate, Upper Intermediate, Advanced, Specialist
  
  // Publication Details
  pages: 1500,
  publicationYear: "550 AH",
  language: "Arabic",  // Choose: Arabic, English, Urdu, Turkish, Persian, Malay
  
  // Descriptions
  description: "Main description of the book. What is it about? What topics does it cover? Why is it important?",
  
  uniqueAspects: "What makes THIS book special and different from others? Why should students choose this book? What's its unique contribution to Islamic scholarship?",
  
  // Image
  coverImage: "https://your-image-url.com/book-cover.jpg",  // URL to book cover image
  isPlaceholder: false  // Set to true if using temporary image
}
```

### Step 3: Don't forget the comma!

```javascript
export const books = [
  {
    id: 1,
    title: "Existing Book",
    // ... existing book details
  },  // ← Comma here!
  {
    id: 16,
    title: "Your New Book",  // Your new book starts here
    // ... your new book details
  }  // ← Last book doesn't need comma
];
```

---

## 🎨 Changing Book Cover Images

### Option 1: Upload to Your Web Host

1. Upload image to your server: `/public_html/images/book-covers/`
2. Use URL: `https://yoursite.com/images/book-covers/book1.jpg`

### Option 2: Use Free Image Hosting

**Imgur (Easiest):**
1. Go to imgur.com
2. Upload image (no account needed)
3. Right-click image → Copy image address
4. Paste URL in `coverImage` field

**Cloudinary:**
1. Sign up for free account
2. Upload images
3. Copy public URL
4. Paste in `coverImage` field

### Option 3: Keep Using Stock Images

Current images are from Unsplash/Pexels. You can:
- Keep them as placeholders
- Replace gradually as you get real book covers
- Mark with `isPlaceholder: true`

---

## 🏷️ Adding New Filter Options

### Add New Category:

```javascript
export const categories = [
  "All",
  "Tafsir",
  "Hadith",
  "Fiqh",
  "Aqeedah",
  "Seerah",
  "Your New Category Here",  // ← Add here
];
```

### Add New Study Level:

```javascript
export const studyLevels = [
  "All",
  "Beginner",
  "Intermediate",
  "Upper Intermediate",
  "Advanced",
  "Specialist",
  "Expert Level",  // ← Add here
];
```

### Add New Madhab:

```javascript
export const madhabs = [
  "All",
  "Hanafi",
  "Maliki",
  "Shafi'i",
  "Hanbali",
  "Comparative",
  "Independent",
  "Zahiri",  // ← Add here
  "N/A"
];
```

### Add New Subject:

```javascript
export const subjects = [
  "All",
  "Hanafi Jurisprudence - Comprehensive",
  "Your New Subject Topic",  // ← Add here
];
```

**⚠️ Important:** After adding new options, make sure to use them in your books!

---

## ✏️ Editing Existing Books

Find the book by searching for its title in mock.js:

```javascript
// Search for: title: "Al-Hidaya"
{
  id: 3,
  title: "Al-Hidaya",  // Change this
  arabicTitle: "الهداية",  // Change this
  // ... edit any field you want
  description: "Your new description here",
  // ...
}
```

---

## 🗑️ Removing a Book

Simply delete the entire book object (including the curly braces):

```javascript
export const books = [
  {
    id: 1,
    title: "Keep This Book",
    // ...
  },
  // DELETE FROM HERE ↓
  {
    id: 2,
    title: "Remove This Book",
    // ...
  },
  // TO HERE ↑
  {
    id: 3,
    title: "Keep This Book Too",
    // ...
  }
];
```

---

## 🎯 Study Level Guide

Choose the appropriate level for each book:

| Level | Description | Example Books |
|-------|-------------|---------------|
| **Beginner** | First texts for students | Mukhtasar al-Quduri, Nur al-Idah |
| **Intermediate** | Standard seminary texts | Al-Hidaya, Kanz al-Daqa'iq |
| **Upper Intermediate** | Detailed study texts | Badai' al-Sanai', Al-Ikhtiyar |
| **Advanced** | In-depth analysis | Al-Mabsut, Sharh Fath al-Qadir |
| **Specialist** | Reference for scholars | Radd al-Muhtar, Al-Fatawa al-Hindiyya |

---

## 🔍 Field Reference

### Required Fields:
- `id` - Unique number
- `title` - English title
- `arabicTitle` - Arabic title
- `author` - Author name
- `authorBirthYear` - Birth year (for sorting)
- `category` - Main category
- `studyLevel` - Difficulty level
- `coverImage` - Image URL

### Optional but Recommended:
- `subject` - Specific topic
- `description` - What the book is about
- `uniqueAspects` - What makes it special
- `pages` - Number of pages
- `publicationYear` - When published

### All Available Fields:
```javascript
{
  // Identity
  id: number,
  title: string,
  arabicTitle: string,
  
  // Author
  author: string,
  authorArabic: string,
  authorBirthYear: number,
  scholarEra: string,
  
  // Classification
  category: string,
  subject: string,
  madhab: string,
  language: string,
  creed: string,
  era: string,
  bookType: string,
  studyLevel: string,
  
  // Details
  pages: number,
  publicationYear: string,
  description: string,
  uniqueAspects: string,
  
  // Image
  coverImage: string,
  isPlaceholder: boolean
}
```

---

## 🎨 Color Coding for Study Levels

The system automatically color-codes study levels:

| Level | Color | Badge |
|-------|-------|-------|
| Beginner | Green | 🟢 |
| Intermediate | Blue | 🔵 |
| Upper Intermediate | Indigo | 🟣 |
| Advanced | Purple | 🟪 |
| Specialist | Red | 🔴 |

---

## ⚠️ Common Mistakes to Avoid

### 1. Missing Comma
```javascript
// ❌ WRONG
{
  id: 1,
  title: "Book 1"
}  // ← Missing comma!
{
  id: 2,
  title: "Book 2"
}

// ✅ CORRECT
{
  id: 1,
  title: "Book 1"
},  // ← Comma here!
{
  id: 2,
  title: "Book 2"
}
```

### 2. Duplicate IDs
```javascript
// ❌ WRONG
{ id: 5, title: "Book A" },
{ id: 5, title: "Book B" },  // Same ID!

// ✅ CORRECT
{ id: 5, title: "Book A" },
{ id: 6, title: "Book B" },  // Unique IDs
```

### 3. Using Option Not in List
```javascript
// ❌ WRONG
studyLevel: "Expert",  // This option doesn't exist!

// ✅ CORRECT
studyLevel: "Specialist",  // Use existing option
// OR add "Expert" to studyLevels array first
```

### 4. Broken Image URL
```javascript
// ❌ WRONG
coverImage: "my-image.jpg",  // Relative path won't work

// ✅ CORRECT
coverImage: "https://yoursite.com/images/my-image.jpg",  // Full URL
```

---

## 🔄 After Making Changes

1. **Save mock.js**
2. **Rebuild:** `cd /app/frontend && yarn build`
3. **Upload** the new `build` folder to your web host
4. **Clear browser cache** to see changes

---

## 💡 Pro Tips

### Organizing Books
- Keep books sorted by ID for easy management
- Use consistent naming conventions
- Group similar books together with comments:

```javascript
export const books = [
  // === FOUNDATIONAL TEXTS ===
  { id: 1, title: "...", studyLevel: "Beginner" },
  { id: 2, title: "...", studyLevel: "Beginner" },
  
  // === INTERMEDIATE TEXTS ===
  { id: 3, title: "...", studyLevel: "Intermediate" },
  { id: 4, title: "...", studyLevel: "Intermediate" },
  
  // === ADVANCED WORKS ===
  { id: 5, title: "...", studyLevel: "Advanced" },
];
```

### Testing Before Upload
Before rebuilding and uploading:
1. Save your changes
2. Run `yarn start` to test locally
3. Check if everything looks correct
4. Then run `yarn build` and upload

### Backup
- Keep a backup copy of mock.js before making major changes
- Save different versions with dates: `mock-2024-12-07.js`

---

## 📞 Need Help?

If you get stuck:
1. Check the syntax (commas, brackets, quotes)
2. Verify field names match exactly
3. Test locally before uploading
4. Compare with existing books as examples

---

**Remember:** You only need to edit ONE file (`mock.js`) to manage all content!
