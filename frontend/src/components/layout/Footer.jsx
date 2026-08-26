import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100/10 flex items-center justify-center border border-emerald-600/20">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="font-fraunces text-2xl font-bold text-white tracking-tight">VyaparSetu</span>
            </div>
            <p className="text-sm text-beige-200/60">
              AI-Driven Hyper-Local Business Advisory & Financial Structuring Assistant for Rural Entrepreneurs.
            </p>
          </div>
          
          <div>
            <h4 className="font-fraunces text-lg font-medium text-emerald-100 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-beige-200">
              <li><Link to="/dashboard" className="hover:text-white transition-colors">AI Advisor</Link></li>
              <li><Link to="/explorer" className="hover:text-white transition-colors">Opportunity Explorer</Link></li>
              <li><Link to="/financial-assistant" className="hover:text-white transition-colors">Financial Planner</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-fraunces text-lg font-medium text-emerald-100 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-beige-200">
              <li><Link to="/schemes" className="hover:text-white transition-colors">Government Schemes</Link></li>
              <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentor Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-fraunces text-lg font-medium text-emerald-100 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-beige-200">

              <li>support@vyaparsetu.in</li>
              <li className="pt-4">
                <LanguageSwitcher className="text-ink-900" direction="up" />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-600/50 text-center text-sm text-beige-200/60">
          <p>&copy; {new Date().getFullYear()} VyaparSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
