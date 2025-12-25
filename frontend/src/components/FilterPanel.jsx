import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';

const FilterPanel = ({ 
  categories, 
  
  subjects,
  availableSubjects,
  madhabs,
  languages,
  creeds,
  eras,
  bookTypes,
  studyLevels,
  commentaryOfOptions,
  selectedFilters, 
  onFilterChange 
}) => {
  const hasActiveFilters = Object.entries(selectedFilters).some(
    ([key, value]) => value !== 'All'
  );

  return (
    <div className="bg-white rounded-lg border border-emerald-100 shadow-sm max-h-[calc(100vh-180px)] overflow-hidden flex flex-col">
      <div className="flex items-center justify-between p-6 border-b border-emerald-100">
        <div className="flex items-center gap-2 text-emerald-800">
          <Filter className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Filter Books</h2>
        </div>
        {hasActiveFilters && (
          <Button
            onClick={() => onFilterChange('reset', null)}
            variant="ghost"
            size="sm"
            className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="overflow-y-auto px-6 py-4 space-y-4">
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

        {/* Subject Filter - Nested under Category */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Subject {selectedFilters.category !== 'All' && `(${selectedFilters.category})`}
          </Label>
          <Select
            value={selectedFilters.subject}
            onValueChange={(value) => onFilterChange('subject', value)}
            disabled={selectedFilters.category === 'All'}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder={selectedFilters.category === 'All' ? 'Select category first' : 'Select subject'} />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {availableSubjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      

        {/* Study Level Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Study Level</Label>
          <Select
            value={selectedFilters.studyLevel}
            onValueChange={(value) => onFilterChange('studyLevel', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {studyLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Madhab Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Madhab</Label>
          <Select
            value={selectedFilters.madhab}
            onValueChange={(value) => onFilterChange('madhab', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select madhab" />
            </SelectTrigger>
            <SelectContent>
              {madhabs.map((madhab) => (
                <SelectItem key={madhab} value={madhab}>
                  {madhab}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Language</Label>
          <Select
            value={selectedFilters.language}
            onValueChange={(value) => onFilterChange('language', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Creed Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Creed</Label>
          <Select
            value={selectedFilters.creed}
            onValueChange={(value) => onFilterChange('creed', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select creed" />
            </SelectTrigger>
            <SelectContent>
              {creeds.map((creed) => (
                <SelectItem key={creed} value={creed}>
                  {creed}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Era Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Era</Label>
          <Select
            value={selectedFilters.era}
            onValueChange={(value) => onFilterChange('era', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select era" />
            </SelectTrigger>
            <SelectContent>
              {eras.map((era) => (
                <SelectItem key={era} value={era}>
                  {era}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Book Type Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Type of Book</Label>
          <Select
            value={selectedFilters.bookType}
            onValueChange={(value) => onFilterChange('bookType', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select book type" />
            </SelectTrigger>
            <SelectContent>
              {bookTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Commentary Of Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Commentary Of</Label>
          <Select
            value={selectedFilters.commentaryOf}
            onValueChange={(value) => onFilterChange('commentaryOf', value)}
          >
            <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
              <SelectValue placeholder="Select base text" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {commentaryOfOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <Button
            onClick={() => onFilterChange('reset', null)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Reset All Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;