import React, { useState, useMemo } from 'react';
import { Search, Library } from 'lucide-react';
import { Input } from './ui/input';
import BookCard from './BookCard';
import BookDetail from './BookDetail';
import FilterPanel from './FilterPanel';
import { books, categories, authors, subjects, madhabs, languages, creeds, eras, bookTypes } from '../mock';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'All',
    author: 'All',
    subject: 'All',
    madhab: 'All',
    language: 'All',
    creed: 'All',
    era: 'All',
    bookType: 'All'
  });

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
        bookType: 'All'
      });
    } else {
      setFilters(prev => ({ ...prev, [filterType]: value }));
    }
  };

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
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

      return matchesSearch && matchesCategory && matchesAuthor && matchesSubject && 
             matchesMadhab && matchesLanguage && matchesCreed && matchesEra && matchesBookType;
    });
  }, [searchQuery, filters]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Library className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Islamic Classical Library</h1>
              <p className="text-sm text-gray-600">المكتبة الإسلامية الكلاسيكية</p>
            </div>
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <FilterPanel
                categories={categories}
                authors={authors}
                subjects={subjects}
                madhabs={madhabs}
                languages={languages}
                creeds={creeds}
                eras={eras}
                bookTypes={bookTypes}
                selectedFilters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </aside>

          {/* Books Grid */}
          <main className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                <span className="font-semibold text-emerald-700">{filteredBooks.length}</span> books found
              </p>
            </div>

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
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