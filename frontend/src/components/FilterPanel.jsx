import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { Filter } from 'lucide-react';

const FilterPanel = ({ categories, authors, subjects, selectedFilters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg border border-emerald-100 p-6 space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-emerald-800">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filter Books</h2>
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Category</Label>
          <Select
            value={selectedFilters.category}
            onValueChange={(value) => onFilterChange('category', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Author Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Author</Label>
          <Select
            value={selectedFilters.author}
            onValueChange={(value) => onFilterChange('author', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select author" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {authors.map((author) => (
                <SelectItem key={author} value={author}>
                  {author}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Subject Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Subject</Label>
          <Select
            value={selectedFilters.subject}
            onValueChange={(value) => onFilterChange('subject', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Reset Button */}
        {(selectedFilters.category !== 'All' || 
          selectedFilters.author !== 'All' || 
          selectedFilters.subject !== 'All') && (
          <button
            onClick={() => onFilterChange('reset', null)}
            className="w-full text-sm text-emerald-700 hover:text-emerald-800 font-medium py-2 px-4 rounded-md border border-emerald-300 hover:bg-emerald-50 transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;