import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { cn } from './Button';
import { useAppState } from '../../context/AppStateContext';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'bn', label: 'বাংলা' }
];

export function LanguageSwitcher({ className, direction = 'down' }) {
  const [isOpen, setIsOpen] = useState(false);
  const { userProfile, changeLanguage } = useAppState();
  
  const selected = languages.find(l => l.code === userProfile.language) || languages[0];

  return (
    <div className={cn("relative", className)}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 w-full text-ink-500 hover:text-emerald-600 bg-white border border-beige-200 px-3 py-1.5 rounded-full transition-colors text-sm"
      >
        <Globe size={16} />
        <span>{selected.label}</span>
      </button>
      
      {isOpen && (
        <div className={cn(
          "absolute w-32 bg-white rounded-xl shadow-warm border border-beige-200 overflow-hidden z-50",
          direction === 'up' ? "bottom-full mb-2 left-0" : "mt-2 right-0"
        )}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm hover:bg-beige-200 transition-colors",
                selected.code === lang.code ? "text-emerald-600 font-medium bg-emerald-50" : "text-ink-900"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
