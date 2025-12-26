import React from 'react';
import { Card, CardContent } from './ui/card';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Badge } from './ui/badge';

const BookCard = ({ book, onClick }) => {
  const getLevelColor = (level) => {
      switch (level) {
      case 'Elementary': return 'bg-green-100 text-green-700';
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-blue-100 text-blue-700';
      case 'Upper Intermediate': return 'bg-indigo-100 text-indigo-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      case 'Specialist': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden border-emerald-100"
      onClick={() => onClick(book)}
    >
      <div className="aspect-[2/3] relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
              e.target.src = 'https://library.minaretandquill.com/book_covers/pendingfrontcover.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Study Level Badge */}
        <div className="absolute top-2 right-2">
          <Badge className={`${getLevelColor(book.studyLevel)} text-xs`}>
            {book.studyLevel}
          </Badge>
        </div>
      </div>
      <CardContent className="p-3 space-y-1.5">
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm group-hover:text-emerald-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-xs text-gray-600 font-arabic line-clamp-1">{book.arabicTitle}</p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-emerald-600 font-medium line-clamp-1">{book.author}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <BookOpen className="w-3 h-3" />
          <span className="line-clamp-1">{book.category}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;