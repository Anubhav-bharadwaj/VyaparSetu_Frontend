import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { mockStories } from '../data/mockStories';
import { cn } from '../components/ui/Button';

export function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Farmer', 'Woman Entrepreneur', 'Artisan', 'Shop Owner'];

  const filteredStories = activeCategory === 'All' 
    ? mockStories 
    : mockStories.filter(s => s.category.includes(activeCategory) || (activeCategory === 'Woman Entrepreneur' && s.category === 'Woman Entrepreneur'));

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in pb-20">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">Rural Success Stories</h1>
        <p className="text-ink-500">Get inspired by real entrepreneurs who transformed their local communities using AI guidance.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
              activeCategory === cat
                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                : "bg-white text-ink-500 border-beige-200 hover:border-emerald-600 hover:text-emerald-600"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((story) => (
          <Card key={story.id} className="p-0 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
            <div className="h-56 overflow-hidden relative group">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <Badge variant="default" className="mb-2 bg-emerald-600/90 text-white border-none">{story.category}</Badge>
                <p className="font-fraunces text-xl font-medium">{story.name}</p>
                <p className="text-sm opacity-90 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                  {story.village}
                </p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-ink-900 leading-relaxed mb-6 flex-1">"{story.story}"</p>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <p className="text-xs font-medium text-ink-500 mb-2 uppercase tracking-wider">{story.growthMetric.label}</p>
                <div className="flex items-center space-x-3 font-mono font-bold text-lg">
                  <span className="text-ink-500 line-through opacity-70">{story.growthMetric.before}</span>
                  <span className="text-emerald-400">→</span>
                  <span className="text-emerald-600 text-xl">{story.growthMetric.after}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {filteredStories.length === 0 && (
        <div className="text-center py-16 text-ink-500">
          No stories found for this category yet.
        </div>
      )}
    </div>
  );
}
