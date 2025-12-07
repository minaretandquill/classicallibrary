import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Book, User, Calendar, FileText, Languages, Clock, BookMarked, Scale, Heart, GraduationCap, Sparkles } from 'lucide-react';
import { Separator } from './ui/separator';

const BookDetail = ({ book, open, onClose }) => {
  if (!book) return null;

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-300';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Upper Intermediate': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'Advanced': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Specialist': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Book Cover */}
          <div className="md:col-span-2 relative aspect-[3/4] md:aspect-auto">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1599493758737-31c5be444eff';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Study Level Badge on Cover */}
            <div className="absolute top-4 right-4">
              <Badge className={`${getLevelColor(book.studyLevel)} text-sm font-semibold border-2`}>
                {book.studyLevel}
              </Badge>
            </div>
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
                    {book.bookType}
                  </Badge>
                  <Badge variant="outline" className="border-amber-300 text-amber-700">
                    {book.era}
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    {book.madhab}
                  </Badge>
                </div>

                {/* Author Information */}
                <div className="space-y-3 bg-emerald-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-lg">{book.author}</p>
                      <p className="text-sm text-gray-500 font-arabic">{book.authorArabic}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-600">Born: {book.authorBirthYear} AH | Era: {book.scholarEra}</p>
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
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Study Level</p>
                      <p className="text-sm font-medium">{book.studyLevel}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Madhab</p>
                      <p className="text-sm font-medium">{book.madhab}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Creed</p>
                      <p className="text-sm font-medium">{book.creed}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Book Type</p>
                      <p className="text-sm font-medium">{book.bookType}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Era</p>
                      <p className="text-sm font-medium">{book.era}</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Subject */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Book className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Subject</h3>
                  </div>
                  <p className="text-gray-700 pl-7">{book.subject}</p>
                </div>

                <Separator className="my-4" />

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Work</h3>
                  <p className="text-gray-700 leading-relaxed">{book.description}</p>
                </div>

                <Separator className="my-4" />

                {/* What Makes This Book Unique */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <h3 className="text-lg font-semibold text-amber-900">What Makes This Book Unique</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed">{book.uniqueAspects}</p>
                </div>

                {/* Placeholder Note */}
                {book.isPlaceholder && (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mt-4">
                    <p className="text-xs text-blue-800">
                      📎 Note: This is a placeholder image. Upload custom cover via admin panel.
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetail;