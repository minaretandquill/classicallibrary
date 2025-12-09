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
