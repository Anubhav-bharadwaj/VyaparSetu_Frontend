import React from 'react';
import { ShieldCheck, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import { Card } from '../ui/Card';

export function SwotAnalysisCard({ swot }) {
  if (!swot) return null;

  const sections = [
    { title: 'Strengths', icon: ShieldCheck, items: swot.strengths, color: 'text-success', bg: 'bg-emerald-50' },
    { title: 'Weaknesses', icon: AlertTriangle, items: swot.weaknesses, color: 'text-danger', bg: 'bg-red-50' },
    { title: 'Opportunities', icon: TrendingUp, items: swot.opportunities, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Threats', icon: Zap, items: swot.threats, color: 'text-harvest-500', bg: 'bg-yellow-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {sections.map((section, idx) => {
        const Icon = section.icon;
        return (
          <div key={idx} className={`p-4 rounded-xl border border-beige-200 ${section.bg}`}>
            <div className="flex items-center space-x-2 mb-3">
              <Icon size={18} className={section.color} />
              <h4 className={`font-fraunces font-medium ${section.color}`}>{section.title}</h4>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-sm text-ink-900 flex items-start">
                  <span className={`mr-2 ${section.color}`}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
