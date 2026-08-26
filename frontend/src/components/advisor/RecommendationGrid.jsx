import React from 'react';
import { RecommendationCard } from './RecommendationCard';

export function RecommendationGrid({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-beige-200 border-dashed">
        <p className="text-ink-500">No recommendations found. Try adjusting your inputs.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recommendations.map(rec => (
        <RecommendationCard key={rec.id} recommendation={rec} />
      ))}
    </div>
  );
}
