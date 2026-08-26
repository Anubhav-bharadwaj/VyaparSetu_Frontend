import React from 'react';
import { cn } from './Button';

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-beige-200", className)}
      {...props}
    />
  );
}
