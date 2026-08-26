import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '../ui/Input';
import { cn } from '../ui/Button';

export function SchemeFilterBar({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', 'Loan', 'Grant', 'Women-focused', 'Agriculture', 'Startup', 'Manufacturing'];

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    onFilterChange(val, activeTag);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    onFilterChange(searchTerm, tag);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-warm border border-beige-200 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center z-10 relative">
      <div className="w-full md:w-1/3 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-500" size={18} />
        <Input 
          className="pl-10" 
          placeholder="Search schemes..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="w-full md:w-2/3 flex items-center overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <Filter className="text-ink-500 mr-2 flex-shrink-0" size={18} />
        <div className="flex space-x-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeTag === tag
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-beige-50 text-ink-500 hover:bg-beige-200 hover:text-ink-900 border border-beige-200"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
