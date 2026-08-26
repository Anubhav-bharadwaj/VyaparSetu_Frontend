import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function SchemeCard({ scheme }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Card className="flex flex-col relative overflow-hidden transition-all duration-300">
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-fraunces font-medium text-lg text-emerald-900 pr-8">{scheme.name}</h3>
          <button className="text-ink-500 hover:text-emerald-600 transition-colors p-1">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <p className="text-sm text-ink-500 mb-3 line-clamp-1" title={scheme.fullName}>{scheme.fullName}</p>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {scheme.tags.map(tag => (
            <Badge key={tag} variant="default">{tag}</Badge>
          ))}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-beige-200 animate-in slide-in-from-top-2 duration-200">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-emerald-900 mb-2">Eligibility Criteria</h4>
            <ul className="space-y-1">
              {scheme.eligibility.map((item, idx) => (
                <li key={idx} className="text-sm text-ink-500 flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-emerald-900 mb-2">Key Benefits</h4>
            <ul className="space-y-1">
              {scheme.benefits.map((item, idx) => (
                <li key={idx} className="text-sm text-ink-500 flex items-start">
                  <CheckCircle size={14} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            className="w-full flex items-center justify-center space-x-2 bg-harvest-500 hover:bg-harvest-600"
            onClick={handleApply}
          >
            <span>Apply Now</span>
            <ExternalLink size={16} />
          </Button>

          {showToast && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-navy-900 text-white text-sm py-2 px-4 rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-2 whitespace-nowrap">
              This would open the official portal.
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
