import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Book, User, Calendar, FileText, Languages, Clock } from 'lucide-react';

const BookDetail = ({ book, open, onClose }) => {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Book Cover */}
          <div className="md:col-span-2 relative aspect-[3/4] md:aspect-auto">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1720701575003-51dafcf39cb4';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Book Details */}
          <div className="md:col-span-3 p-6">
            <ScrollArea className="h-[calc(90vh-2rem)] pr-4">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {book.title}
                </DialogTitle>
                <p className="text-xl text-gray-600 font-arabic">{book.arabicTitle}</p>
              </DialogHeader>

              <div className="space-y-6">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                    {book.category}
                  </Badge>
                  <Badge variant="outline" className="border-teal-300 text-teal-700">
                    {book.subject}
                  </Badge>
                </div>

                {/* Author Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold">{book.author}</p>
                      <p className="text-sm text-gray-500 font-arabic">{book.authorArabic}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Scholar Era</p>
                      <p className="text-sm text-gray-600">{book.scholarEra}</p>
                    </div>
                  </div>
                </div>

                {/* Book Details Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Published</p>
                      <p className="text-sm font-medium">{book.publicationYear}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Pages</p>
                      <p className="text-sm font-medium">{book.pages.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Language</p>
                      <p className="text-sm font-medium">{book.language}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Book className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Subject</p>
                      <p className="text-sm font-medium">{book.subject}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Work</h3>
                  <p className="text-gray-700 leading-relaxed">{book.description}</p>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetail;