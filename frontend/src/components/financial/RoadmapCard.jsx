import React from 'react';
import { Card } from '../ui/Card';

export function RoadmapCard({ icon: Icon, title, value, subtitle }) {
  return (
    <Card className="flex items-center space-x-4 p-5 bg-white">
      <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm font-medium text-ink-500 mb-1">{title}</p>
        <p className="font-mono text-xl font-bold text-emerald-900">{value}</p>
        {subtitle && <p className="text-xs text-ink-500 mt-1">{subtitle}</p>}
      </div>
    </Card>
  );
}
