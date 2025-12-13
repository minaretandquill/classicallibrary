import React, { useState, useMemo } from 'react';
import { Search, Library, ArrowUpDown } from 'lucide-react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import BookCard from './BookCard';
import BookDetail from './BookDetail';
import FilterPanel from './FilterPanel';
import { 
  books, 
  categories, 
  authors, 
  subjects,
  subjectsByCategory,
  madhabs, 
  languages, 
  creeds, 
  eras, 
  bookTypes,
  studyLevels,
  sortOptions,
  commentaryOfOptions
} from '../mock';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [sortBy, setSortBy] = useState('scholarBirthYear');
  const [filters, setFilters] = useState({
    category: 'Fiqh',
    author: 'All',
    subject: 'All',
    madhab: 'Hanafi',
    language: 'All',
    creed: 'All',
    era: 'All',
    bookType: 'All',
    studyLevel: 'All',
    commentaryOf: 'All'
  });

  // Get subjects based on selected category
  const availableSubjects = useMemo(() => {
    if (filters.category === 'All') {
      return ['All'];
    }
    return subjectsByCategory[filters.category] || ['All'];
  }, [filters.category]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setFilters({
        category: 'All',
        author: 'All',
        subject: 'All',
        madhab: 'All',
        language: 'All',
        creed: 'All',
        era: 'All',
        bookType: 'All',
        studyLevel: 'All',
        commentaryOf: 'All'
      });
    } else if (filterType === 'category') {
      // When category changes, reset subject to 'All'
      setFilters(prev => ({ ...prev, category: value, subject: 'All' }));
    } else {
      setFilters(prev => ({ ...prev, [filterType]: value }));
    }
  };

  const filteredAndSortedBooks = useMemo(() => {
    // First filter
    let result = books.filter(book => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.arabicTitle.includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.authorArabic.includes(searchQuery);

      // Category filter
      const matchesCategory = filters.category === 'All' || book.category === filters.category;

      // Author filter
      const matchesAuthor = filters.author === 'All' || book.author === filters.author;

      // Subject filter
      const matchesSubject = filters.subject === 'All' || book.subject === filters.subject;

      // Madhab filter
      const matchesMadhab = filters.madhab === 'All' || book.madhab === filters.madhab;

      // Language filter
      const matchesLanguage = filters.language === 'All' || book.language === filters.language;

      // Creed filter
      const matchesCreed = filters.creed === 'All' || book.creed === filters.creed;

      // Era filter
      const matchesEra = filters.era === 'All' || book.era === filters.era;

      // Book Type filter
      const matchesBookType = filters.bookType === 'All' || book.bookType === filters.bookType;

      // Study Level filter
      const matchesStudyLevel = filters.studyLevel === 'All' || book.studyLevel === filters.studyLevel;

      // Commentary Of filter
      const matchesCommentaryOf = filters.commentaryOf === 'All' || book.commentaryOf === filters.commentaryOf;

      return matchesSearch && matchesCategory && matchesAuthor && matchesSubject && 
             matchesMadhab && matchesLanguage && matchesCreed && matchesEra && 
             matchesBookType && matchesStudyLevel && matchesCommentaryOf;
    });

    // Then sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'scholarBirthYear':
          return a.authorBirthYear - b.authorBirthYear;
        case 'publicationYear':
          const yearA = parseInt(a.publicationYear.replace(' AH', ''));
          const yearB = parseInt(b.publicationYear.replace(' AH', ''));
          return yearA - yearB;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'studyLevel':
          const levels = ['Beginner', 'Intermediate', 'Upper Intermediate', 'Advanced', 'Specialist'];
          return levels.indexOf(a.studyLevel) - levels.indexOf(b.studyLevel);
        case 'pages':
          return a.pages - b.pages;
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, filters, sortBy]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_turath-explorer/artifacts/foy38jgs_MinaretandQuill.png" 
                alt="Minaret and Quill House Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Islamic Classical Library</h1>
                <p className="text-sm text-gray-600">المكتبة الإسلامية الكلاسيكية</p>
              </div>
            </div>
            <a 
              href="https://www.minaretandquill.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_turath-explorer/artifacts/foy38jgs_MinaretandQuill.png" 
                alt="Minaret and Quill House" 
                className="h-6 w-6 object-contain"
              />
              <div className="text-left">
                <p className="text-xs text-gray-500">Powered by</p>
                <p className="text-sm font-semibold text-emerald-800">Minaret and Quill House</p>
              </div>
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by title, author, or Arabic name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-base border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <FilterPanel
                categories={categories}
                authors={authors}
                subjects={subjects}
                availableSubjects={availableSubjects}
                madhabs={madhabs}
                languages={languages}
                creeds={creeds}
                eras={eras}
                bookTypes={bookTypes}
                studyLevels={studyLevels}
                commentaryOfOptions={commentaryOfOptions}
                selectedFilters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </aside>

          {/* Books Grid */}
          <main className="lg:col-span-3">
            {/* Results Count and Sort */}
            <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
              <p className="text-gray-600">
                <span className="font-semibold text-emerald-700">{filteredAndSortedBooks.length}</span> books found
              </p>
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-3">
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                <Label className="text-sm text-gray-600">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-56 border-emerald-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Books Grid */}
            {filteredAndSortedBooks.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredAndSortedBooks.map(book => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onClick={handleBookClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Library className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No books found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleFilterChange('reset', null);
                  }}
                  className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://www.minaretandquill.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <span className="text-sm">Powered by</span>
            <img 
              src="https://customer-assets.emergentagent.com/job_turath-explorer/artifacts/foy38jgs_MinaretandQuill.png" 
              alt="Minaret and Quill House" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-sm font-semibold">Minaret and Quill House</span>
          </a>
        </div>
      </footer>

      {/* Floating Badge - Bottom Right */}
      <a
        href="https://www.minaretandquill.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-200 hover:scale-105"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
        }}
      >
        <img
          src="https://customer-assets.emergentagent.com/job_turath-explorer/artifacts/foy38jgs_MinaretandQuill.png"
          alt="Minaret and Quill House"
          className="w-5 h-5 object-contain"
        />
        <span className="text-xs font-medium text-gray-800">
          Powered by Minaret and Quill
        </span>
      </a>

      {/* Book Detail Modal */}
      <BookDetail
        book={selectedBook}
        open={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
};

export default Home;