# Commentary Relationship System - Guide

## Overview

The library now supports a commentary relationship system that allows students to:
1. **See which books are commentaries on a base text**
2. **Find all commentaries written on a particular work**
3. **View current published editions** with publisher information and links

---

## How It Works

### Three New Fields Added to Each Book:

#### 1. `parentWork` (Number or null)
- **Purpose:** Links a commentary to its base text
- **Value:** Book ID of the parent work, or `null` if it's a base text (matn)
- **Example:** 
  ```javascript
  // Sharh Fath al-Qadir is a commentary on al-Hidaya (ID 3)
  parentWork: 3
  ```

#### 2. `hasCommentaries` (Array of Numbers)
- **Purpose:** Lists all commentaries written on this work
- **Value:** Array of book IDs that are commentaries, or empty array `[]`
- **Example:**
  ```javascript
  // Al-Hidaya has two commentaries in our library
  hasCommentaries: [11, 4]  // IDs for Sharh Fath al-Qadir and Al-Ikhtiyar
  ```

#### 3. `publishedEditions` (Array of Objects)
- **Purpose:** Shows current published editions available
- **Value:** Array of edition objects with publisher details
- **Example:**
  ```javascript
  publishedEditions: [
    {
      publisher: "Dar al-Kotob al-Ilmiyah",  // Publisher name
      location: "Beirut, Lebanon",            // Publishing location
      year: "2000",                           // Publication year
      volumes: 4,                             // Number of volumes
      verified: true,                         // Whether edition is verified
      link: "https://www.sifatusafwa.com"    // Link to publisher (optional)
    }
  ]
  ```

---

## How to Add Relationships to Books

### For a Base Text (Matn):

```javascript
{
  id: 3,
  title: "Al-Hidaya",
  // ... other fields ...
  parentWork: null,              // It's a base text, no parent
  hasCommentaries: [11, 4],      // Has 2 commentaries (list their IDs)
  publishedEditions: [
    {
      publisher: "Dar al-Kotob al-Ilmiyah",
      location: "Beirut, Lebanon",
      year: "2000",
      volumes: 4,
      verified: true,
      link: "https://www.sifatusafwa.com"
    }
  ]
}
```

### For a Commentary:

```javascript
{
  id: 11,
  title: "Sharh Fath al-Qadir",
  bookType: "Commentary",         // Important: mark as Commentary
  // ... other fields ...
  parentWork: 3,                  // This is a commentary on al-Hidaya (ID 3)
  hasCommentaries: [],            // Usually commentaries don't have sub-commentaries
  publishedEditions: [
    {
      publisher: "Dar al-Fikr",
      location: "Beirut, Lebanon",
      year: "1995",
      volumes: 10,
      verified: true,
      link: null                   // No link available
    }
  ]
}
```

### For Books Without Relationships:

```javascript
{
  id: 21,
  title: "Munyat al-Musalli",
  // ... other fields ...
  parentWork: null,               // Not a commentary
  hasCommentaries: [],            // No known commentaries
  publishedEditions: []           // No published editions info yet
}
```

---

## Examples of Commentary Chains

### Example 1: Mukhtasar al-Quduri → Al-Hidaya → Fath al-Qadir

```javascript
// Base text
{
  id: 10,
  title: "Mukhtasar al-Quduri",
  parentWork: null,
  hasCommentaries: [3, 32],  // Al-Hidaya and Al-Lubab
}

// First level commentary
{
  id: 3,
  title: "Al-Hidaya",
  parentWork: 10,             // Commentary on Quduri
  hasCommentaries: [11, 4],   // Fath al-Qadir and Al-Ikhtiyar
}

// Second level commentary
{
  id: 11,
  title: "Sharh Fath al-Qadir",
  parentWork: 3,              // Commentary on al-Hidaya
  hasCommentaries: [],
}
```

### Example 2: Nur al-Idah → Maraqi al-Falah → Hashiyat al-Tahtawi

```javascript
// Base text
{
  id: 6,
  title: "Nur al-Idah",
  parentWork: null,
  hasCommentaries: [27, 30],  // Maraqi al-Falah and Hashiyat al-Tahtawi
}

// Commentary
{
  id: 27,
  title: "Maraqi al-Falah Sharh Nur al-Idah",
  parentWork: 6,
  hasCommentaries: [30],      // Has a supercommentary
}

// Supercommentary (hashiya)
{
  id: 30,
  title: "Hashiyat al-Tahtawi 'ala Maraqi al-Falah",
  parentWork: 27,             // Actually commenting on Maraqi, not directly Nur
  hasCommentaries: [],
}
```

---

## Published Editions Fields Explained

### Required Fields:
- **publisher** (string): Name of the publishing house
- **location** (string): City and country
- **year** (string): Year of publication (can be Hijri or Gregorian)
- **volumes** (number): Number of volumes in the set
- **verified** (boolean): Whether this edition is verified/authentic

### Optional Fields:
- **link** (string or null): URL to publisher website or book purchase page

### Example Entries:

```javascript
publishedEditions: [
  // High quality verified edition with link
  {
    publisher: "Dar al-Kotob al-Ilmiyah",
    location: "Beirut, Lebanon",
    year: "2000",
    volumes: 4,
    verified: true,
    link: "https://www.sifatusafwa.com"
  },
  
  // Good edition but no link
  {
    publisher: "Dar al-Arqam",
    location: "Pakistan",
    year: "2010",
    volumes: 2,
    verified: true,
    link: null
  },
  
  // Contemporary edition
  {
    publisher: "Dar Ibn Hazm",
    location: "Beirut, Lebanon",
    year: "1430 AH",
    volumes: 8,
    verified: true,
    link: "https://darulkutub.com"
  }
]
```

---

## How Students See This

### In the Book Detail Modal:

#### 1. **Related Works Section** (Blue box)
Shows:
- **If it's a commentary:** "📖 Commentary on: Book ID #X"
- **If it has commentaries:** "📚 Has 2 Commentaries:" with list of IDs

#### 2. **Published Editions Section** (Green box)
Shows:
- Publisher name and location
- Publication year and volumes
- Verified badge (✓ Verified)
- "Visit Publisher →" link (if available)

---

## Adding Relationships to Your Books

### Step 1: Identify Commentary Chains

For each important work, research and list:
1. What is it a commentary on? (if anything)
2. What commentaries exist on it?

### Step 2: Edit mock.js

Open `/app/frontend/src/mock.js` and find the book entry.

Add the three fields:

```javascript
{
  id: X,
  title: "Book Title",
  // ... existing fields ...
  parentWork: Y,              // ID of parent work, or null
  hasCommentaries: [Z, W],    // Array of commentary IDs, or []
  publishedEditions: [        // Array of editions, or []
    {
      publisher: "...",
      location: "...",
      year: "...",
      volumes: 0,
      verified: true,
      link: "..." or null
    }
  ]
}
```

### Step 3: Rebuild and Upload

```bash
cd /app/frontend
yarn build
```

Upload the new `build` folder to your host.

---

## Common Relationships to Add

### Quduri Family:
- Mukhtasar al-Quduri (base)
  - Al-Hidaya (commentary)
    - Sharh Fath al-Qadir (supercommentary)
    - Al-Ikhtiyar (commentary)
  - Al-Lubab (commentary)

### Kanz al-Daqa'iq Family:
- Kanz al-Daqa'iq (base)
  - Tabyin al-Haqa'iq (commentary)
  - Al-Bahr al-Ra'iq (commentary)

### Nur al-Idah Family:
- Nur al-Idah (base)
  - Maraqi al-Falah (commentary)
    - Hashiyat al-Tahtawi (supercommentary)

### Al-Wiqayah Family:
- Al-Wiqayah (base)
  - Sharh al-Wiqayah (commentary)
  - Mukhtasar al-Wiqayah (abridgment)

### Tanwir al-Absar Family:
- Tanwir al-Absar (base)
  - Al-Durr al-Mukhtar (commentary)
    - Radd al-Muhtar (supercommentary - Ibn 'Abidin)

---

## Tips for Finding Publisher Information

### Reliable Islamic Publishers:

1. **Dar al-Kotob al-Ilmiyah** (Beirut)
   - Major classical texts
   - High quality editions

2. **Dar al-Fikr** (Beirut)
   - Classical and contemporary works
   - Wide distribution

3. **Dar Ibn Hazm** (Beirut)
   - Scholarly verified editions
   - Good tahqiq (critical editions)

4. **Muassasah al-Risalah** (Beirut)
   - Classical manuscripts
   - Academic standards

5. **Dar al-Arqam** (Pakistan)
   - Hanafi works
   - Affordable editions

6. **Maktabah al-Bushra** (Pakistan)
   - Deobandi editions
   - Contemporary fatwas

### How to Find Edition Info:

1. Visit **Sifatusafwa.com** - search for the book
2. Check **Islamic bookstores** online
3. Look at **library catalogs**
4. Ask **scholars** which editions they recommend

---

## Future Enhancements

You could add:
- **Edition notes:** Brief notes about quality
- **Translator:** For translated works
- **Tahqiq by:** Name of the scholar who verified the text
- **ISBN:** For easy ordering
- **Price:** Current pricing
- **Availability:** In print vs. out of print

Example:
```javascript
{
  publisher: "Dar al-Kotob al-Ilmiyah",
  location: "Beirut, Lebanon",
  year: "2000",
  volumes: 4,
  verified: true,
  link: "https://www.sifatusafwa.com",
  tahqiq: "Sheikh Muhammad Abdul Qadir 'Ata",
  isbn: "978-2-7451-XXXX-X",
  notes: "Excellent tahqiq with detailed footnotes"
}
```

---

## Current Status

**Books with relationships added:**
1. Al-Hidaya (ID 3) - has 2 commentaries, 2 published editions
2. Sharh Fath al-Qadir (ID 11) - commentary on al-Hidaya, 1 published edition

**Remaining books:** Need relationships and editions added (36 books remain without these fields)

---

## Quick Reference

### Syntax Check:
```javascript
// Always use this structure
parentWork: 3,                    // Number or null (no quotes)
hasCommentaries: [11, 4],         // Array of numbers
publishedEditions: [              // Array of objects
  {
    publisher: "Name",            // String with quotes
    location: "City, Country",    // String
    year: "2000",                 // String
    volumes: 4,                   // Number (no quotes)
    verified: true,               // Boolean (no quotes)
    link: "https://..."          // String or null
  }
]
```

### Common Mistakes:
```javascript
// ❌ WRONG
parentWork: "3",                  // Don't use quotes for numbers
hasCommentaries: [11, 4,],        // Don't end with comma
publishedEditions: [{
  verified: "true",               // Don't quote booleans
  volumes: "4"                    // Don't quote numbers
}]

// ✅ CORRECT
parentWork: 3,
hasCommentaries: [11, 4],
publishedEditions: [{
  verified: true,
  volumes: 4
}]
```

---

Need help adding relationships to your books? Let me know which books you want to connect!
