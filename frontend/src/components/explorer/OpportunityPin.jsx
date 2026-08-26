import React from 'react';
import { cn } from '../ui/Button';

export function OpportunityPin({ opportunity, onClick, isSelected }) {
  // Map category to color
  const colorMap = {
    'Agriculture': 'bg-emerald-500',
    'Dairy': 'bg-blue-500',
    'Infrastructure': 'bg-harvest-500',
    'Services': 'bg-purple-500',
    'Artisan': 'bg-pink-500',
    'Agri-Processing': 'bg-yellow-500'
  };

  const bgClass = colorMap[opportunity.category] || 'bg-emerald-600';
  
  // Size based on demand level
  const sizeMap = {
    'high': 'w-6 h-6',
    'medium': 'w-4 h-4',
    'low': 'w-3 h-3'
  };
  
  const sizeClass = sizeMap[opportunity.demandLevel] || 'w-4 h-4';

  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
      style={{ left: `${opportunity.lng}%`, top: `${opportunity.lat}%` }}
      onClick={onClick}
    >
      {/* Outer pulse for high demand */}
      {opportunity.demandLevel === 'high' && (
        <div className={cn("absolute inset-0 rounded-full animate-ping opacity-75", bgClass)}></div>
      )}
      
      {/* The Pin */}
      <div 
        className={cn(
          "relative rounded-full shadow-md border-2 transition-all duration-200", 
          bgClass,
          sizeClass,
          isSelected ? "border-white scale-150 z-20" : "border-white/50 group-hover:scale-125 group-hover:border-white"
        )}
      ></div>
      
      {/* Tooltip on hover */}
      {!isSelected && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-navy-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
          {opportunity.name}
        </div>
      )}
    </div>
  );
}
