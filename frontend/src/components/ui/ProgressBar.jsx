import React from 'react';
import { cn } from './Button';

export function ProgressBar({ progress, className, indicatorClassName }) {
  return (
    <div className={cn("w-full bg-beige-200 rounded-full h-2.5", className)}>
      <div 
        className={cn("bg-emerald-600 h-2.5 rounded-full transition-all duration-1000 ease-out", indicatorClassName)} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
