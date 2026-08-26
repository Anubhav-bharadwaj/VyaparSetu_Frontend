import React from 'react';
import { X } from 'lucide-react';
import { cn } from './Button';

export function Modal({ isOpen, onClose, title, children, className }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/50 backdrop-blur-sm">
      <div 
        className={cn("bg-beige-50 rounded-2xl shadow-warm w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200", className)}
      >
        <div className="flex justify-between items-center p-4 border-b border-beige-200 bg-white">
          <h3 className="font-fraunces text-xl text-emerald-900">{title}</h3>
          <button onClick={onClose} className="text-ink-500 hover:text-ink-900 transition-colors rounded-full p-1 hover:bg-beige-200">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
