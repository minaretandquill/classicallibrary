# Here are your Instructions

# Book Data Collection Format

## Use This Template for AI Tools

Give this template to ChatGPT/Claude along with book information:

---

## Template for AI:

"Please format this book information in JSON following this exact structure:"

```json
{
  "id": 43,
  "title": "Book Title in English",
  "arabicTitle": "العنوان بالعربية",
  "author": "Author Name",
  "authorArabic": "اسم المؤلف",
  "authorBirthYear": 400,
  "category": "Fiqh",
  "subject": "Comprehensive",
  "madhab": "Hanafi",
  "language": "Arabic",
  "creed": "Maturidi",
  "era": "Classical",
  "bookType": "Commentary",
  "studyLevel": "Intermediate",
  "pages": 1200,
  "publicationYear": "500 AH",
  "scholarEra": "5th Century Hijri",
  "description": "Main description of the book - what it covers, why it's important",
  "uniqueAspects": "What makes this book special and different from others",
  "coverImage": "https://bookshop-url.com/image.jpg",
  "isPlaceholder": false,
  "commentaryOf": null,
  "hasCommentaries": [],
  "publishedEditions": [
    {
      "publisher": "Dar al-Kotob al-Ilmiyah",
      "location": "Beirut, Lebanon",
      "year": "2000",
      "volumes": 4,
      "verified": true,
      "link": "https://bookshop-url.com"
    }
  ]
}
```

---

## Field Reference for AI:

### Required Fields:
- **id**: Unique number (start from 43, your next available)
- **title**: English title
- **arabicTitle**: Arabic title (use Arabic script)
- **author**: Author name in English
- **authorArabic**: Author name in Arabic
- **authorBirthYear**: Birth year in Hijri (number only, no "AH")



- export const categories = [
    "All",
    "Tafsir",
    "Hadith",
    "Aqeedah",
    "Fiqh",
    "Seerah",
    "Tassawuf",
    "Arabic Language",
    "Usul al-Fiqh",
    "Usul al-Hadith",
    "Ulum al-Qur'an",
    "History",
    "Miscellaneous",
    "Reference"
];

export const authors = [
    "All",
    "Imam al-Sarakhsi",
    "Imam al-Kasani",
    "Imam al-Marghinani",
    "Imam Abdullah ibn Mahmud al-Mawsili",
    "Imam al-Nasafi",
    "Imam al-Shurunbulali",
    "Ibn 'Abidin",
    "Dr. Wahbah al-Zuhayli",
    "Imam al-Quduri",
    "Ibn al-Humam",
    "Multiple Scholars (Commissioned)",
    "Imam al-Zayla'i",
    "Shaykh Zada (Damad Afandi)",
    "Imam Muhammad al-Shaybani",
    "Imam al-Bukhari",
    "Imam Muslim ibn al-Hajjaj",
    "Imam al-Qurtubi",
    "Imam al-Shafi'i",
    "Ibn Rushd al-Hafid (Averroes)"
];

// Subjects organized by category
export const subjectsByCategory = {
    "Fiqh": [
        "All",
        "Comprehensive",
        "Evidences",
        "Concise Text",
        "Encyclopedia",
        "Selected Topics",
        "Advanced Commentary",
        "Ritual Worship",
        "Muamalaat",
        "Other",
        "Contemporary Issues"
    ],
    "Hadith": [
        "All",
        "Sahih Siita",
        "Other Collections",
        "Hadith Commentary",
        "Hadith with Fiqh"
    ],
    "Tafsir": [
        "All",
        "Comprehensive",
        "bil-Riwaya",
        "bil-Dirayah",
        "Linguistic",
        "Juridical",
        "Mystical"
    ],
    "Usul al-Fiqh": [
        "All",
        "Legal Theory",
        "Legal Maxims",
        "Ifta"
    ],
    "Aqeedah": [
        "All",
        "Creed",
        "Kalaam",
        "Usul ad-din"
    ],
    "Seerah": [
        "All",
        "Prophetic Biography",
        "Prophetic Descriptions",
        "Prophetic Maghazi"
    ],
    "History": [
        "All",
        "Islamic History",
        "Biographical Works"
    ],
    "Arabic Language": [
        "All",
        "Sarf",
        "Nahv",
        "Balagha",
        "Mantiq",
        "Dictionary",
        "Kalaam",
        "Qiraa'"
    ],
    "Tassawuf": [
        "All",
        "Purification",
        "Mysticism"
    ],
    "Usul al-Hadith": [
        "All",
        "Principles",
        "Asma Rijaal",
        "Classification"
    ],
    "Usul al-Hadith": [
        "All",
        "Principles",
        "Asma Rijaal",
        "Classification"
    ],
    "Miscellaneous": [
        "All",
        "Principles"
    ],
    "Reference": [
        "All",
        "Dictionary"
    ]
};


// Legacy flat list for backwards compatibility
export const subjects = [
    "All",
    "Hanafi Jurisprudence - Comprehensive",
    "Hanafi Jurisprudence - Evidences",
    "Hanafi Jurisprudence - Concise Text",
    "Hanafi Jurisprudence - Ritual Worship",
    "Hanafi Jurisprudence - Muamalaat",
    "Hanafi Jurisprudence - Encyclopedia",
    "Hanafi Jurisprudence - Selected Topics",
    "Hanafi Jurisprudence - Advanced Commentary",
    "Comparative Jurisprudence - Contemporary",
    "Prophetic Traditions - Most Authentic",
    "Prophetic Traditions - Authentic Collection",
    "Quranic Exegesis - Jurisprudential Focus",
    "Shafi'i Jurisprudence - Foundational Text",
    "Comparative Jurisprudence"
];

// Commentary base texts for filtering
export const commentaryOfOptions = [
    "All",
    "Mukhtasar al-Quduri",
    "Al-Hidaya",
    "Kanz al-Daqa'iq",
    "Nur al-Idah",
    "Maraqi al-Falah",
    "Al-Wiqayah",
    "Tanwir al-Absar"
];

export const madhabs = [
    "All",
    "Hanafi",
    "Maliki",
    "Shafi'i",
    "Hanbali",
    "Comparative",
    "Independent",
    "Salafi",
    "N/A"
];

export const languages = [
    "All",
    "Arabic",
    "English",
    "Urdu",
    "Persian",
    "Turkish"
];

export const creeds = [
    "All",
    "Athari",
    "Ash'ari",
    "Maturidi",
    "N/A"
];

export const eras = [
    "All",
    "Salaf",
    "Khalaf",
    "Classical",
    "Post-Classical",
    "Modern"
];

export const bookTypes = [
    "All",
    "Core text (Matn)",
    "Commentary (Sharh)",
    "Gloss (Haashiya)",
    "Summary (Mukhtasar)",
    "Risala (Epistle)",
    "Takhreej (Referenced Edition)",
    "Tahqeeq (Critical Edition)",
    "Fatawa (Legal Verdicts)",
    "Tarjama (Translation)",
    "Majmu (Collection)",
    "Mawsua (Reference)"
];

export const studyLevels = [
    "All",
    "Elementary",
    "Beginner",
    "Intermediate",
    "Upper Intermediate",
    "Advanced",
    "Specialist"
];

export const sortOptions = [
    { value: 'scholarBirthYear', label: 'Scholar Birth Year (Default)' },
    { value: 'publicationYear', label: 'Publication Year' },
    { value: 'title', label: 'Title (A-Z)' },
    { value: 'author', label: 'Author Name' },
    { value: 'studyLevel', label: 'Study Level' }
];



### Category Options (choose one):
- Fiqh
- Hadith
- Tafsir
- Aqeedah
- Seerah
- Arabic Language
- Usul al-Fiqh
- History
- Sufism & Spirituality

### Subject (choose based on category):

**If Fiqh:**
- Comprehensive
- Systematic
- Intermediate Text
- Foundational Text
- Advanced Commentary
- Ritual Worship
- Transactions
- Women's Issues
- Contemporary Issues

**If Hadith:**
- Most Authentic
- Authentic Collection
- Hadith Commentary
- Ethics & Spirituality

**If Tafsir:**
- Comprehensive Exegesis
- Hadith-based Exegesis
- Jurisprudential Focus

### Madhab Options:
- Hanafi
- Maliki
- Shafi'i
- Hanbali
- Comparative
- Independent
- N/A

### Language Options:
- Arabic
- English
- Urdu
- Turkish
- Persian
- Malay

### Creed Options:
- Athari
- Ash'ari
- Maturidi
- N/A

### Era Options:
- Salaf (1st-3rd century Hijri)
- Khalaf (4th-5th century)
- Classical (4th-7th century)
- Post-Classical (8th-10th century)
- Modern (11th+ century)

### Book Type Options:
- Matn (primary text)
- Commentary
- Translation
- Epistle
- Compilation
- Reference

### Study Level Options:
- Beginner
- Intermediate
- Upper Intermediate
- Advanced
- Specialist

---

## Example Prompt for AI:

"I have information about an Islamic classical book. Please format it in JSON following this structure:

**Book Information:**
- Title: Al-Fatawa al-Hindiyyah
- Arabic: الفتاوى الهندية
- Author: Multiple scholars commissioned by Aurangzeb
- Born: Various (use 1000 as estimate)
- Category: Fiqh
- Madhab: Hanafi
- Pages: 6000
- Published: 1092 AH
- Description: [paste description]
- Publisher: Dar al-Kotob al-Ilmiyah, Beirut
- Cover image: https://bookshop.com/image.jpg

Please use the JSON template I provided and fill in all fields appropriately."

---

## Batch Collection Template

For multiple books, use this format:

```json
[
  {
    "id": 43,
    "title": "Book 1",
    ...
  },
  {
    "id": 44,
    "title": "Book 2",
    ...
  },
  {
    "id": 45,
    "title": "Book 3",
    ...
  }
]
```

---

## What to Extract from Bookshop Website:

### Essential Information:
1. ✅ **Book title** (English and Arabic)
2. ✅ **Author name** (English and Arabic)
3. ✅ **Cover image URL** (right-click image → Copy image address)
4. ✅ **Number of pages**
5. ✅ **Number of volumes**
6. ✅ **Publisher** name and location
7. ✅ **Publication year**

### Additional (if available):
8. Description or summary
9. Category/subject
10. Author's era/birth year
11. Book type (matn, sharh, hashiya)

### For Images:
- Copy the image URL directly from the bookshop
- Format: `"coverImage": "https://bookshop.com/images/book.jpg"`
- No need to download - direct URL works!

---

## Simple Workflow:

### Step 1: Collect Raw Data
Use AI or manual notes to gather:
- Screenshot bookshop page OR
- Copy-paste text information OR
- Use ChatGPT with bookshop URL

### Step 2: Format with AI
Give ChatGPT:
```
"Format this book info in JSON using the template from BOOK_DATA_FORMAT.md:

[paste raw information]
"
```

### Step 3: Give Me the JSON
Send me the formatted JSON, and I'll:
- Add it to mock.js
- Rebuild the site
- Create new website-files for you to upload

---

## Example: Complete Workflow

### You:
```
ChatGPT, format this book:

Title: Sharh Maani al-Athar
Author: Imam al-Tahawi
Pages: 2500
Publisher: Dar al-Kotob al-Ilmiyah
Volumes: 4
Image: https://sifatusafwa.com/12345.jpg
Description: Comprehensive hadith commentary...
```

### ChatGPT gives you:
```json
{
  "id": 43,
  "title": "Sharh Ma'ani al-Athar",
  ...
}
```

### You send me:
"Here's a new book to add: [paste JSON]"

### I do:
- Add to mock.js
- Rebuild
- Update website-files folder
- Tell you "Ready to download and upload to Plesk!"

---

## Tips for Image URLs:

### From Bookshop Website:
1. Right-click on book cover image
2. Select "Copy image address"
3. Paste directly as coverImage URL

### Advantages:
- ✅ No download/upload needed
- ✅ Images hosted by bookshop (free CDN)
- ✅ Usually high quality
- ✅ Automatic updates if they improve image

### Note:
Make sure bookshop allows hotlinking. Most Islamic bookshops do, but if images break later, we can replace with your own hosted images.

---

## Quality Check Prompt for AI:

After AI formats the JSON, ask:

"Please verify this JSON is valid and includes:
- All required fields filled
- Correct category/subject pairing
- Era matches scholar's time period
- Study level appropriate for book type
- Publisher information complete"

---

## My Role - I Can Help With:

✅ **Adding formatted JSON to mock.js**
✅ **Rebuilding the site**
✅ **Creating downloadable files**
✅ **Fixing any formatting issues**
✅ **Suggesting study levels based on book type**
✅ **Organizing books by category**

❌ **Won't cost credits:**
- You collecting data
- ChatGPT formatting JSON
- Me adding your data to code

✅ **Might cost minimal credits:**
- Me searching for specific book information
- Me generating descriptions

---

## Start Small:

Try with 5 books first:
1. Collect info from bookshop
2. Format with ChatGPT
3. Send me the JSON
4. I'll add and rebuild
5. You upload to Plesk

Once this works smoothly, scale up to more books!

---

**Ready to start?** Send me your first book in JSON format and I'll add it immediately!


# Nested Filtering & Commentary System Guide

## New Features Overview

Three major improvements have been implemented:

1. **Commentary Of Filter** - Find all commentaries on a specific base text
2. **Nested Subject Filtering** - Subjects organized under categories
3. **Book Names in Related Works** - Show actual titles instead of IDs

---

## 1. Commentary Of Filter

### What It Does:
Allows students to filter books that are commentaries on a specific work.

### How It Works:
- New filter dropdown at the bottom of the filter panel
- Lists major base texts that have commentaries
- Selecting a text shows all its commentaries

### Example Usage:
```
Select "Commentary Of" → "Al-Hidaya"
Result: Shows only books that are commentaries on Al-Hidaya:
  - Sharh Fath al-Qadir
  - Al-Ikhtiyar li Ta'lil al-Mukhtar
```

### Available Options:
- All (shows everything)
- Mukhtasar al-Quduri
- Al-Hidaya
- Kanz al-Daqa'iq
- Nur al-Idah
- Maraqi al-Falah
- Al-Wiqayah
- Tanwir al-Absar

### How to Add Books to This Filter:

In `/app/frontend/src/mock.js`:

```javascript
{
  id: 11,
  title: "Sharh Fath al-Qadir",
  // ... other fields ...
  commentaryOf: "Al-Hidaya",  // ← Add this field
}
```

Then add the base text name to the options list:

```javascript
export const commentaryOfOptions = [
  "All",
  "Mukhtasar al-Quduri",
  "Al-Hidaya",
  "Your New Base Text",  // ← Add here
];
```

---

## 2. Nested Subject Filtering

### What It Does:
Organizes subjects under their parent categories, preventing irrelevant options from showing.

### How It Works:
- Subjects are now organized by category in `subjectsByCategory`
- When you select "Fiqh", only Fiqh subjects appear
- When you select "Hadith", only Hadith subjects appear
- Subject filter is disabled until a category is selected

### Example:

**Before (Old System):**
```
Category: Hadith
Subject dropdown shows:
  - Hanafi Jurisprudence - Comprehensive  ❌ (irrelevant)
  - Hanafi Jurisprudence - Systematic     ❌ (irrelevant)
  - Most Authentic                        ✓ (relevant)
  - Authentic Collection                  ✓ (relevant)
```

**After (New System):**
```
Category: Hadith
Subject dropdown shows:
  - All
  - Most Authentic                        ✓
  - Authentic Collection                  ✓
  - Hadith Commentary                     ✓
  - Ethics & Spirituality                 ✓
```

### Subject Organization:

Location: `/app/frontend/src/mock.js`

```javascript
export const subjectsByCategory = {
  "Fiqh": [
    "All",
    "Comprehensive",
    "Systematic",
    "Intermediate Text",
    // ... more Fiqh subjects
  ],
  "Hadith": [
    "All",
    "Most Authentic",
    "Authentic Collection",
    "Hadith Commentary",
    // ... more Hadith subjects
  ],
  "Tafsir": [
    "All",
    "Comprehensive Exegesis",
    "Hadith-based Exegesis",
    "Jurisprudential Focus"
  ],
  // ... more categories
};
```

### How to Add New Subjects:

**Step 1:** Add to the appropriate category:

```javascript
export const subjectsByCategory = {
  "Fiqh": [
    "All",
    "Comprehensive",
    "Your New Fiqh Subject",  // ← Add here
  ],
  "Hadith": [
    "All",
    "Most Authentic",
    "Your New Hadith Subject",  // ← Add here
  ],
};
```

**Step 2:** Use the subject in your books:

```javascript
{
  id: 43,
  title: "New Book",
  category: "Fiqh",
  subject: "Your New Fiqh Subject",  // ← Must match exactly
}
```

### Important Notes:

1. **Subject must match category:** If book is "Fiqh", subject must be from Fiqh list
2. **Use simple names:** Subjects are now simplified (e.g., "Comprehensive" instead of "Hanafi Jurisprudence - Comprehensive")
3. **Category prefix automatically added:** The system understands "Comprehensive" belongs to "Fiqh"

---

## 3. Book Names in Related Works

### What Changed:

**Before:**
```
Related Works:
📚 Has 2 Commentaries:
  • Book ID #11
  • Book ID #4
```

**After:**
```
Related Works:
📚 Commentaries on this work (2):
  ┌─────────────────────────────────┐
  │ Sharh Fath al-Qadir             │
  │ by Ibn al-Humam                  │
  └─────────────────────────────────┘
  ┌─────────────────────────────────┐
  │ Al-Ikhtiyar li Ta'lil al-Mukhtar│
  │ by Imam Abdullah ibn Mahmud...   │
  └─────────────────────────────────┘
```

### How It Works:

The `hasCommentaries` field now stores objects with title and author:

```javascript
{
  id: 3,
  title: "Al-Hidaya",
  hasCommentaries: [
    { 
      id: 11, 
      title: "Sharh Fath al-Qadir", 
      author: "Ibn al-Humam" 
    },
    { 
      id: 4, 
      title: "Al-Ikhtiyar li Ta'lil al-Mukhtar", 
      author: "Imam Abdullah ibn Mahmud al-Mawsili" 
    }
  ],
}
```

### How to Add Commentary Relationships:

**For the Base Text (e.g., Al-Hidaya):**

```javascript
{
  id: 3,
  title: "Al-Hidaya",
  // ... other fields ...
  commentaryOf: null,              // It's a base text, not a commentary
  hasCommentaries: [
    { 
      id: 11,                      // ID of the commentary book
      title: "Sharh Fath al-Qadir",
      author: "Ibn al-Humam" 
    },
    { 
      id: 4, 
      title: "Al-Ikhtiyar li Ta'lil al-Mukhtar",
      author: "Imam Abdullah ibn Mahmud al-Mawsili" 
    }
  ],
}
```

**For the Commentary (e.g., Sharh Fath al-Qadir):**

```javascript
{
  id: 11,
  title: "Sharh Fath al-Qadir",
  // ... other fields ...
  commentaryOf: "Al-Hidaya",       // Name of the base text
  hasCommentaries: [],             // Usually empty for commentaries
}
```

---

## Complete Example: Adding a New Commentary Chain

Let's say you want to add:
- Base text: "Mukhtasar al-Quduri"
- Commentary 1: "Al-Hidaya" (commentary on Quduri)
- Commentary 2: "Al-Lubab" (also commentary on Quduri)

### Step 1: The Base Text

```javascript
{
  id: 10,
  title: "Mukhtasar al-Quduri",
  arabicTitle: "مختصر القدوري",
  author: "Imam al-Quduri",
  category: "Fiqh",
  subject: "Foundational Text",
  bookType: "Matn",
  // ... other fields ...
  
  commentaryOf: null,              // It's a base text
  hasCommentaries: [
    { 
      id: 3, 
      title: "Al-Hidaya", 
      author: "Imam al-Marghinani" 
    },
    { 
      id: 32, 
      title: "Al-Lubab fi Sharh al-Kitab", 
      author: "Imam al-Maydani" 
    }
  ],
}
```

### Step 2: The Commentaries

```javascript
// Al-Hidaya
{
  id: 3,
  title: "Al-Hidaya",
  // ... other fields ...
  commentaryOf: "Mukhtasar al-Quduri",
  hasCommentaries: [
    // Al-Hidaya itself has commentaries
    { id: 11, title: "Sharh Fath al-Qadir", author: "Ibn al-Humam" }
  ],
}

// Al-Lubab
{
  id: 32,
  title: "Al-Lubab fi Sharh al-Kitab",
  // ... other fields ...
  commentaryOf: "Mukhtasar al-Quduri",
  hasCommentaries: [],             // No sub-commentaries
}
```

### Step 3: Add to Commentary Filter Options

```javascript
export const commentaryOfOptions = [
  "All",
  "Mukhtasar al-Quduri",  // ← Add this
  "Al-Hidaya",
  // ... other options
];
```

---

## Field Reference

### New/Modified Fields:

| Field | Type | Purpose | Example |
|-------|------|---------|---------|
| `commentaryOf` | String or null | Name of the work this book comments on | `"Al-Hidaya"` or `null` |
| `hasCommentaries` | Array of Objects | List of commentaries on this work | `[{id: 11, title: "...", author: "..."}]` |
| `subject` | String | Simplified subject name | `"Comprehensive"` (not "Hanafi - Comprehensive") |

### Object Structure for hasCommentaries:

```javascript
{
  id: number,        // Book ID of the commentary
  title: string,     // Full title of the commentary
  author: string     // Author name of the commentary
}
```

---

## Common Patterns

### Pattern 1: Simple Commentary Relationship

```javascript
// Base text
{
  commentaryOf: null,
  hasCommentaries: [
    { id: X, title: "Commentary Title", author: "Author Name" }
  ]
}

// Commentary
{
  commentaryOf: "Base Text Name",
  hasCommentaries: []
}
```

### Pattern 2: Multi-Level Commentary Chain

```javascript
// Level 1: Original Matn
{
  commentaryOf: null,
  hasCommentaries: [{ id: 2, title: "First Commentary", author: "..." }]
}

// Level 2: Commentary on Matn
{
  commentaryOf: "Original Matn",
  hasCommentaries: [{ id: 3, title: "Super Commentary", author: "..." }]
}

// Level 3: Super Commentary (Hashiya)
{
  commentaryOf: "First Commentary",
  hasCommentaries: []
}
```

### Pattern 3: Multiple Commentaries

```javascript
// Base text with many commentaries
{
  commentaryOf: null,
  hasCommentaries: [
    { id: 11, title: "Commentary 1", author: "Author 1" },
    { id: 12, title: "Commentary 2", author: "Author 2" },
    { id: 13, title: "Commentary 3", author: "Author 3" },
    { id: 14, title: "Commentary 4", author: "Author 4" }
  ]
}
```

---

## UI Display Reference

### Filter Panel:
- **Commentary Of filter:** Located at bottom of filter panel, after "Type of Book"
- **Subject filter:** Shows "(Category Name)" when category is selected
- **Subject disabled state:** Grayed out with "Select category first" placeholder

### Book Detail Modal:
- **Commentary on:** Blue box with white card showing base text name
- **Has commentaries:** Blue box with white cards showing commentary titles and authors
- **Published Editions:** Green box (below Related Works)

---

## Updating Existing Books

To update all your existing 42 books with these new features:

### Minimal Update (Just Commentary Of):

For books that are commentaries, add:
```javascript
commentaryOf: "Base Text Name"
```

For books that aren't commentaries:
```javascript
commentaryOf: null
```

### Full Update (All Features):

1. Set `commentaryOf` field
2. Update `hasCommentaries` to object format
3. Simplify `subject` names to match category organization

---

## Tips

1. **Start with major works:** Add relationships for well-known commentary chains first
2. **Be consistent:** Use exact same spelling for base text names
3. **Check both directions:** If Book A is commentary on Book B, make sure both books reflect this
4. **Test filtering:** After adding, test the "Commentary Of" filter to ensure it works
5. **Keep it simple:** Not every book needs commentary relationships - focus on important ones

---

## Current Status

**Books with full relationships:**
- Al-Hidaya (ID 3) - has 2 commentaries listed with names
- Sharh Fath al-Qadir (ID 11) - marked as commentary of Al-Hidaya

**Remaining work:**
- Add `commentaryOf` field to remaining books
- Update `hasCommentaries` format for other base texts
- Ensure all subjects match category organization

---

Need help implementing these features for your books? Let me know!
