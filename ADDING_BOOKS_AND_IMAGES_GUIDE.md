# Complete Guide: Adding New Books with Images

This guide will walk you through the process of manually adding new books to your Islamic Classical Library website and managing book cover images.

## Table of Contents
1. [Understanding Image Storage](#understanding-image-storage)
2. [Method 1: Using External URLs (Easiest)](#method-1-using-external-urls-easiest)
3. [Method 2: Hosting Images on Your Server](#method-2-hosting-images-on-your-server)
4. [Adding a New Book Step-by-Step](#adding-a-new-book-step-by-step)
5. [Rebuilding and Deploying](#rebuilding-and-deploying)

---

## Understanding Image Storage

Currently, **all book cover images are stored as URLs** (either external links or local paths). There are two approaches:

### Current Setup:
- **External URLs**: Most images use direct links to image hosting services (e.g., Unsplash, Sifatusafwa.com)
- **Local Storage**: You can also upload images to your Plesk server and reference them with relative paths

**Advantages of Each:**
| External URLs | Local Storage |
|--------------|---------------|
| ✅ No storage used on your server | ✅ Full control over images |
| ✅ Fast CDN delivery | ✅ Images won't disappear if source goes down |
| ❌ Images may be removed by host | ✅ Can optimize image sizes |
| ❌ Dependent on external services | ❌ Uses your server storage |

---

## Method 1: Using External URLs (Easiest)

This is the simplest method - just use image URLs from any online source.

### Step 1: Find Your Book Cover Image
Find a book cover image online (from a book store, library catalog, or image site).

**Example sources:**
- Sifatusafwa.com
- IslamicBookstore.com  
- Unsplash.com (for placeholder images)
- Any image hosting service

### Step 2: Get the Direct Image URL
Right-click on the image and select "Copy Image Address" or "Copy Image URL"

**Example URL:**
```
https://www.sifatusafwa.com/21756-large_default/al-asl-al-mabsoot.jpg
```

### Step 3: Add Book Entry
Open `/app/frontend/src/mock.js` and add your new book object:

```javascript
{
  id: 58,  // Use next available ID number
  title: "Sharh Sahih Muslim",
  arabicTitle: "شرح صحيح مسلم",
  author: "Imam al-Nawawi",
  authorArabic: "الإمام النووي",
  authorBirthYear: 631,
  category: "Hadith",
  subject: "Hadith Commentary",
  madhab: "Shafi'i",
  language: "Arabic",
  creed: "Ash'ari",
  era: "Classical",
  bookType: "Commentary",
  studyLevel: "Upper Intermediate",
  pages: 6500,
  publicationYear: "676 AH",
  scholarEra: "7th Century Hijri",
  description: "One of the most important commentaries on Sahih Muslim...",
  uniqueAspects: "Known for its clarity and depth of explanation...",
  coverImage: "https://www.example.com/path/to/book-cover.jpg",  // YOUR IMAGE URL HERE
  isPlaceholder: false,  // Set to true if using a generic placeholder image
  commentaryOf: null,  // Or name of base text if this is a commentary
  hasCommentaries: [],
  publishedEditions: []
}
```

**Important:**
- Add a comma (`,`) after the previous book entry
- The `coverImage` field should contain the full URL to the image
- Set `isPlaceholder: false` for actual book covers
- Set `isPlaceholder: true` if using a generic/placeholder image

---

## Method 2: Hosting Images on Your Server

This method gives you full control but requires uploading images to your Plesk server.

### Step 1: Create an Images Folder on Your Server

1. Log into Plesk
2. Navigate to your domain: `library.minaretandquill.com`
3. Go to **File Manager**
4. Navigate to `httpdocs/` (or your document root)
5. Create a new folder called `book-covers`

Your path should look like:
```
httpdocs/
  ├── index.html
  ├── static/
  └── book-covers/    ← Create this folder
```

### Step 2: Upload Book Cover Images

1. Click on the `book-covers` folder
2. Click **Upload Files**
3. Upload your book cover images (JPG, PNG, or WebP format recommended)
4. Name them clearly, e.g., `sahih-bukhari.jpg`, `al-hidaya.jpg`

**Image Guidelines:**
- **Recommended size**: 400x600 pixels (2:3 aspect ratio)
- **File format**: JPG or PNG
- **File size**: Keep under 500KB for fast loading
- **Naming**: Use lowercase, hyphens for spaces, no special characters

### Step 3: Reference Local Images in mock.js

When adding a book, use a **relative path** to your uploaded image:

```javascript
{
  id: 58,
  title: "Sharh Sahih Muslim",
  arabicTitle: "شرح صحيح مسلم",
  // ... other fields ...
  coverImage: "/book-covers/sharh-sahih-muslim.jpg",  // Relative path to your uploaded image
  isPlaceholder: false
}
```

**Path Format:**
- Start with `/book-covers/`
- Follow with your exact filename
- Example: `/book-covers/al-hidaya.jpg`

---

## Adding a New Book Step-by-Step

### Full Example: Adding "Ihya Ulum al-Din"

1. **Locate the mock.js file**
   - Path: `/app/frontend/src/mock.js`
   - Open in a text editor

2. **Find the books array**
   - Search for: `export const books = [`
   - Scroll to the end of the array (look for the last book entry)

3. **Add your book entry**
   
```javascript
  // ... previous book entry ends here
  },
  {
    id: 58,
    title: "Ihya Ulum al-Din",
    arabicTitle: "إحياء علوم الدين",
    author: "Imam al-Ghazali",
    authorArabic: "الإمام الغزالي",
    authorBirthYear: 450,
    category: "Sufism & Spirituality",
    subject: "Spiritual Purification",
    madhab: "Shafi'i",
    language: "Arabic",
    creed: "Ash'ari",
    era: "Classical",
    bookType: "Commentary",
    studyLevel: "Intermediate",
    pages: 4000,
    publicationYear: "505 AH",
    scholarEra: "5th-6th Century Hijri",
    description: "A masterpiece on Islamic spirituality, covering purification of the heart, worship, social relations, and the path to salvation.",
    uniqueAspects: "Combines fiqh, theology, and spirituality in a comprehensive framework. Revived interest in inner dimensions of Islam.",
    coverImage: "https://example.com/ihya-cover.jpg",
    isPlaceholder: false,
    commentaryOf: null,
    hasCommentaries: [],
    publishedEditions: [
      {
        publisher: "Dar al-Minhaj",
        location: "Jeddah, Saudi Arabia",
        year: "2011",
        volumes: 4,
        verified: true,
        link: null
      }
    ]
  }
  // Don't forget the closing bracket and semicolon for the array
];
```

4. **Update the authors list** (if adding a new author)
   
Scroll down in `mock.js` to find:
```javascript
export const authors = [
  "All",
  // ... existing authors ...
  "Imam al-Ghazali"  // Add your new author here
];
```

5. **Save the file**

---

## Image URL Examples

### Using External URLs (Various Sources):

```javascript
// From Islamic bookstore
coverImage: "https://www.sifatusafwa.com/21756-large_default/al-mabsut.jpg"

// From Unsplash (generic Islamic book images)
coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"

// From any CDN or image hosting
coverImage: "https://cdn.example.com/books/my-book.jpg"
```

### Using Local Server Images:

```javascript
// Image uploaded to your Plesk server in book-covers folder
coverImage: "/book-covers/sahih-bukhari.jpg"

// Image in a subfolder
coverImage: "/book-covers/hadith/sahih-muslim.jpg"
```

---

## Rebuilding and Deploying

After adding books to `mock.js`, you must rebuild the website:

### Option 1: Manual Rebuild (Using Emergent)

1. Come back to this Emergent chat
2. Ask: "Please rebuild the website with the new books"
3. The agent will:
   - Run `yarn build` 
   - Copy files to `/app/website-files/`
   - You download and upload to Plesk

### Option 2: Connect Plesk to GitHub (Automated) - Recommended!

If you've set up GitHub integration:

1. Edit `/app/frontend/src/mock.js` with your new books
2. Commit changes to your GitHub repository
3. Plesk automatically pulls changes and rebuilds (if configured)

**Note**: Ask the agent for help setting up GitHub integration if needed.

---

## Quick Reference: Book Object Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ | Unique number | `58` |
| `title` | ✅ | English title | `"Al-Hidaya"` |
| `arabicTitle` | ✅ | Arabic title | `"الهداية"` |
| `author` | ✅ | Author name | `"Imam al-Marghinani"` |
| `authorArabic` | ✅ | Author in Arabic | `"الإمام المرغيناني"` |
| `authorBirthYear` | ✅ | Birth year (Hijri) | `511` |
| `category` | ✅ | Main category | `"Fiqh"` |
| `subject` | ✅ | Specific subject | `"Hanafi Jurisprudence"` |
| `madhab` | ✅ | School of law | `"Hanafi"` |
| `language` | ✅ | Book language | `"Arabic"` |
| `creed` | ✅ | Theological school | `"Maturidi"` |
| `era` | ✅ | Time period | `"Classical"` |
| `bookType` | ✅ | Type of work | `"Matn"`, `"Commentary"`, etc. |
| `studyLevel` | ✅ | Difficulty level | `"Beginner"` to `"Specialist"` |
| `pages` | ✅ | Page count | `2000` |
| `publicationYear` | ✅ | Publication date | `"593 AH"` |
| `scholarEra` | ✅ | Author's era | `"6th Century Hijri"` |
| `description` | ✅ | Brief description | Long text |
| `uniqueAspects` | ✅ | What makes it special | Long text |
| `coverImage` | ✅ | Image URL/path | See examples above |
| `isPlaceholder` | ✅ | Is image generic? | `true` or `false` |
| `commentaryOf` | ⭕ | Base text name (if commentary) | `"Al-Hidaya"` or `null` |
| `hasCommentaries` | ⭕ | List of commentaries | `[]` or array of objects |
| `publishedEditions` | ⭕ | Available editions | `[]` or array of objects |

**Legend:**
- ✅ Required field
- ⭕ Optional field

---

## Troubleshooting

### Problem: Image doesn't appear
**Solutions:**
1. Check the URL is correct and accessible
2. Try opening the image URL in your browser
3. Ensure the image format is supported (JPG, PNG, WebP)
4. Check for HTTPS (some browsers block HTTP images on HTTPS sites)

### Problem: Image is too large or slow to load
**Solutions:**
1. Use an image optimizer tool (TinyPNG, Squoosh)
2. Resize to 400x600 pixels maximum
3. Save as JPG with 80% quality
4. Consider using a CDN for faster delivery

### Problem: Book added but not showing on website
**Solutions:**
1. Make sure you saved the `mock.js` file
2. Check for syntax errors (missing commas, brackets)
3. Rebuild the website (`yarn build`)
4. Clear your browser cache
5. Upload new files to Plesk

---

## Need Help?

If you need assistance:
1. Return to the Emergent chat
2. Describe the issue you're facing
3. The agent can help troubleshoot or rebuild the site

**For structural changes (new features, design changes, etc.):**
- Return to Emergent for development assistance
- The agent can implement complex modifications

---

## Summary Workflow

### Adding Books with External Images:
```
1. Find book cover image online
   ↓
2. Copy image URL
   ↓
3. Edit /app/frontend/src/mock.js
   ↓
4. Add book entry with image URL
   ↓
5. Save file
   ↓
6. Rebuild website (ask agent or run yarn build)
   ↓
7. Upload to Plesk
```

### Adding Books with Local Images:
```
1. Upload image to Plesk book-covers folder
   ↓
2. Note the filename
   ↓
3. Edit /app/frontend/src/mock.js
   ↓
4. Add book entry with path: /book-covers/filename.jpg
   ↓
5. Save file
   ↓
6. Rebuild website
   ↓
7. Upload to Plesk
```

---

**Document Version**: 1.0  
**Last Updated**: December 2024  
**Website**: library.minaretandquill.com
