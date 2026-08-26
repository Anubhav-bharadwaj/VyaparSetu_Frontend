import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

export function DemandTrendChart({ data, color = "#0F7B54" }) {
  if (!data || data.length === 0) return null;
  
  return (
    <div className="h-10 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
          <Line 
            type="monotone" 
            dataKey="demand" 
            stroke={color} 
            strokeWidth={2} 
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
