import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/Input';
import { cn } from '../ui/Button';

export function ExplorerFilters({ searchTerm, setSearchTerm, activeCategory, setActiveCategory, demandFilter, setDemandFilter }) {
  const categories = ['All', 'Agriculture', 'Dairy', 'Infrastructure', 'Services', 'Artisan', 'Agri-Processing'];
  const demandLevels = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className="bg-white p-4 border-b border-beige-200 z-10 relative shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="w-full md:w-64 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-500" size={18} />
          <Input 
            className="pl-10" 
            placeholder="Search villages or ideas..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-auto flex items-center overflow-x-auto pb-2 md:pb-0 hide-scrollbar space-x-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeCategory === cat
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-200"
                  : "bg-beige-50 text-ink-500 hover:bg-beige-200 border border-transparent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 border-l border-beige-200 pl-4">
          <span className="text-xs font-medium text-ink-500">Demand:</span>
          <div className="flex bg-beige-50 rounded-lg p-1 border border-beige-200">
            {demandLevels.map(level => (
              <button
                key={level}
                onClick={() => setDemandFilter(level)}
                className={cn(
                  "px-2 py-1 rounded-md text-xs font-medium transition-colors",
                  demandFilter === level
                    ? "bg-white text-emerald-900 shadow-sm"
                    : "text-ink-500 hover:text-ink-900"
                )}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
