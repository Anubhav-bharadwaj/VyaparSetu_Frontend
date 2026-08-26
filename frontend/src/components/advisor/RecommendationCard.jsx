import React, { useState } from 'react';
import { Leaf, Tractor, Droplets, Package, Milk } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressRing } from '../ui/ProgressRing';
import { DemandTrendChart } from '../charts/DemandTrendChart';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { SwotAnalysisCard } from './SwotAnalysisCard';
import { cn } from '../ui/Button';

const iconMap = {
  leaf: Leaf,
  tractor: Tractor,
  water: Droplets,
  package: Package,
  milk: Milk
};

export function RecommendationCard({ recommendation }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = iconMap[recommendation.icon] || Package;

  // Determine risk color
  const riskColor = recommendation.riskScore < 30 ? 'bg-success' : recommendation.riskScore < 60 ? 'bg-harvest-500' : 'bg-danger';

  return (
    <>
      <Card className="flex flex-col h-full group relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-fraunces font-medium text-lg text-emerald-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{recommendation.title}</h3>
              <Badge variant="default" className="mt-1">{recommendation.category}</Badge>
            </div>
          </div>
          <ProgressRing progress={recommendation.opportunityScore} size={50} strokeWidth={4} />
        </div>

        <div className="flex-1">
          <p className="text-sm text-ink-500 line-clamp-2 mb-4">{recommendation.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-beige-200 mt-auto">
          <div>
            <p className="text-xs text-ink-500 mb-1">Est. Profitability</p>
            <p className="font-mono text-sm font-medium text-ink-900">{recommendation.profitabilityEstimate}</p>
          </div>
          <div className="flex justify-end items-center space-x-3">
            <div className="flex flex-col items-end">
              <p className="text-xs text-ink-500 mb-1 flex items-center">
                <span className={cn("w-2 h-2 rounded-full mr-1", riskColor)}></span>
                Risk
              </p>
              <DemandTrendChart data={recommendation.demandTrend} />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4">
          <Button variant="outline" className="w-full" onClick={() => setIsModalOpen(true)}>
            View Details & SWOT
          </Button>
        </div>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={recommendation.title} className="max-w-2xl">
        <div className="flex items-center space-x-4 mb-6">
          <ProgressRing progress={recommendation.opportunityScore} size={64} strokeWidth={5} />
          <div>
            <h4 className="text-lg font-medium text-ink-900">Opportunity Score: {recommendation.opportunityScore}/100</h4>
            <p className="text-sm text-ink-500">Based on local demand, competition, and your profile.</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-fraunces font-medium text-emerald-900 mb-2">Overview</h4>
          <p className="text-ink-900 text-sm leading-relaxed">{recommendation.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-beige-50 rounded-xl border border-beige-200">
          <div>
            <p className="text-xs text-ink-500 mb-1">Estimated Monthly Profitability</p>
            <p className="font-mono text-base font-medium text-emerald-600">{recommendation.profitabilityEstimate}</p>
          </div>
          <div>
            <p className="text-xs text-ink-500 mb-1">Risk Assessment Score</p>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-beige-200 rounded-full h-2">
                <div className={cn("h-2 rounded-full", riskColor)} style={{ width: `${recommendation.riskScore}%` }}></div>
              </div>
              <span className="font-mono text-sm">{recommendation.riskScore}/100</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-fraunces font-medium text-emerald-900 mb-2">AI SWOT Analysis</h4>
          <SwotAnalysisCard swot={recommendation.swot} />
        </div>

        <div className="flex space-x-3 mt-6 pt-4 border-t border-beige-200">
          <Button className="flex-1">Build Financial Plan</Button>
          <Button variant="secondary" className="flex-1">Explore Market (Map)</Button>
        </div>
      </Modal>
    </>
  );
}
