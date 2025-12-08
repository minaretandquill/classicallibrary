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
