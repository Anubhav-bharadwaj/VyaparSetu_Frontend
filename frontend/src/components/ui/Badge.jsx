import React from 'react';
import { cn } from './Button';

export function Badge({ className, variant = 'default', children, ...props }) {
  const variants = {
    default: "bg-emerald-100 text-emerald-900",
    success: "bg-emerald-100 text-success",
    danger: "bg-red-100 text-danger",
    warning: "bg-yellow-100 text-harvest-500",
    neutral: "bg-beige-200 text-ink-500"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-inter",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
