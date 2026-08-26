import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Link } from 'react-router-dom';

export function FundingMatchList({ matches }) {
  if (!matches || matches.length === 0) return null;

  return (
    <Card className="bg-white">
      <h3 className="font-fraunces font-medium text-lg text-emerald-900 mb-4">Top Scheme Matches</h3>
      <div className="space-y-3">
        {matches.map((match, idx) => (
          <Link 
            key={idx}
            to="/schemes" 
            className="block p-4 rounded-xl border border-beige-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-ink-900 group-hover:text-emerald-900 transition-colors">{match.scheme}</h4>
              <Badge variant={match.matchPercent > 80 ? 'success' : 'warning'}>{match.matchPercent}% Match</Badge>
            </div>
            <p className="text-sm text-ink-500 mb-2">{match.reason}</p>
            <div className="flex items-center text-xs font-medium text-emerald-600">
              View Details <ChevronRight size={14} className="ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
