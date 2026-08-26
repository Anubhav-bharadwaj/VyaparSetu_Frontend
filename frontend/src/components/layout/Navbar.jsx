import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Button } from '../ui/Button';
import { useAppState } from '../../context/AppStateContext';

export function Navbar() {
  const location = useLocation();
  const { t } = useAppState();

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-beige-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-600/20 group-hover:bg-emerald-200 transition-colors">
                <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
              </div>
              <span className="font-fraunces text-2xl font-bold text-emerald-900 tracking-tight">VyaparSetu</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink-500 hover:text-emerald-600 font-medium transition-colors cursor-pointer">{t.navFeatures || 'Features'}</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink-500 hover:text-emerald-600 font-medium transition-colors cursor-pointer">{t.navHowItWorks || 'How it Works'}</a>
            <a href="#success-stories" onClick={(e) => { e.preventDefault(); document.querySelector('#success-stories')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink-500 hover:text-emerald-600 font-medium transition-colors cursor-pointer">{t.navStories || 'Success Stories'}</a>
            <a href="#schemes" onClick={(e) => { e.preventDefault(); document.querySelector('#schemes')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink-500 hover:text-emerald-600 font-medium transition-colors cursor-pointer">{t.navSchemes || 'Schemes'}</a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/dashboard">
              <Button>{t.btnGetStarted || 'Get Started'}</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
