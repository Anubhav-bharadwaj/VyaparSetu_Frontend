import React from 'react';
import { cn } from './Button';

export function Card({ className, children, ...props }) {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl p-6 shadow-warm border border-beige-200/50 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
