import React from 'react';

export function HeatmapLayer({ opportunities }) {
  // Only show heatmap blobs for high/medium demand opportunities
  const hotSpots = opportunities.filter(opp => opp.demandLevel === 'high' || opp.demandLevel === 'medium');

  return (
    <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-multiply z-0 overflow-hidden">
      {hotSpots.map((spot, idx) => {
        const size = spot.demandLevel === 'high' ? '300px' : '150px';
        const color = spot.demandLevel === 'high' ? 'rgba(200, 134, 46, 0.4)' : 'rgba(15, 123, 84, 0.3)'; // harvest-500 or emerald-600 with opacity
        
        return (
          <div
            key={idx}
            className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl transition-all duration-1000 ease-in-out"
            style={{
              left: `${spot.lng}%`,
              top: `${spot.lat}%`,
              width: size,
              height: size,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
            }}
          />
        );
      })}
    </div>
  );
}
