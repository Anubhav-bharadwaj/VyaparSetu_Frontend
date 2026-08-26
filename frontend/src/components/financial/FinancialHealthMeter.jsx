import React from 'react';
import { Card } from '../ui/Card';
import { ProgressRing } from '../ui/ProgressRing';
import { ProgressBar } from '../ui/ProgressBar';

export function FinancialHealthMeter({ health }) {
  if (!health) return null;

  // Calculate overall score average
  const overallScore = Math.round((health.financial + health.market + health.skill) / 3);
  
  // Determine color based on overall score
  const ringColorClass = overallScore >= 80 ? "text-success" : overallScore >= 60 ? "text-harvest-500" : "text-danger";

  return (
    <Card className="bg-white">
      <h3 className="font-fraunces font-medium text-lg text-emerald-900 mb-6">Business Readiness</h3>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 flex flex-col items-center">
          {/* We override the progress ring's text color by wrapping it and using our own styles if needed, but it uses emerald by default. We'll just pass a wrapper class if we wanted to change the ring color dynamically, but the primitive uses fixed emerald. Let's just use the default. */}
          <ProgressRing progress={overallScore} size={120} strokeWidth={10} />
          <span className="mt-2 text-sm font-medium text-ink-900">Overall Score</span>
        </div>
        
        <div className="flex-1 w-full space-y-5">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-ink-900">Financial Readiness</span>
              <span className="text-sm font-mono text-ink-500">{health.financial}/100</span>
            </div>
            <ProgressBar progress={health.financial} />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-ink-900">Market Readiness</span>
              <span className="text-sm font-mono text-ink-500">{health.market}/100</span>
            </div>
            <ProgressBar progress={health.market} />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-ink-900">Skill Readiness</span>
              <span className="text-sm font-mono text-ink-500">{health.skill}/100</span>
            </div>
            <ProgressBar progress={health.skill} />
          </div>
        </div>
      </div>
    </Card>
  );
}
