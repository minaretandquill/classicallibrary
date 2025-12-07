import React from 'react';
import { Card, CardContent } from './ui/card';
import { BookOpen } from 'lucide-react';

const BookCard = ({ book, onClick }) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden border-emerald-100"
      onClick={() => onClick(book)}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1720701575003-51dafcf39cb4';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-base group-hover:text-emerald-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 font-arabic">{book.arabicTitle}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-emerald-600 font-medium">{book.author}</span>
          <span className="text-gray-500 text-xs">{book.publicationYear}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <BookOpen className="w-3 h-3" />
          <span>{book.category}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;