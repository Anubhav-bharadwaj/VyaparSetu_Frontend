import React, { useState } from 'react';
import { Banknote, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import { FinancialInputForm } from '../components/financial/FinancialInputForm';
import { RoadmapCard } from '../components/financial/RoadmapCard';
import { FinancialHealthMeter } from '../components/financial/FinancialHealthMeter';
import { FundingMatchList } from '../components/financial/FundingMatchList';
import { FinancialPieChart } from '../components/charts/FinancialPieChart';
import { BreakEvenChart } from '../components/charts/BreakEvenChart';
import { mockFinancials } from '../data/mockFinancials';
import { useMockDelay } from '../hooks/useMockDelay';
import { Skeleton } from '../components/ui/Skeleton';
import { Card } from '../components/ui/Card';

export function FinancialAssistantPage() {
  const [financials, setFinancials] = useState(null);
  const { isLoading, runWithDelay } = useMockDelay(1500);

  const handleSubmit = async (formData) => {
    setFinancials(null); // clear old
    await runWithDelay();
    
    // In a real app, we calculate dynamically. Here we just show the mock.
    setFinancials(mockFinancials);
  };

  // Mock data for break-even chart
  const breakEvenData = [
    { month: 'M1', cumulativeReturn: -100000 },
    { month: 'M3', cumulativeReturn: -50000 },
    { month: 'M6', cumulativeReturn: 20000 },
    { month: 'M9', cumulativeReturn: 120000 },
    { month: 'M12', cumulativeReturn: 200000 },
    { month: 'M14', cumulativeReturn: 250000 }, // Break even point (if investment is 2.5L)
    { month: 'M18', cumulativeReturn: 400000 }
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in">
      <div className="mb-8">
        <h1 className="font-fraunces text-3xl text-emerald-900 mb-2">Financial Structuring Assistant</h1>
        <p className="text-ink-500">Plan your budget, estimate ROI, and match with government schemes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <FinancialInputForm onSubmit={handleSubmit} isLoading={isLoading} />
          
          {!financials && !isLoading && (
            <Card className="bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center py-12 text-center">
              <Banknote size={48} className="text-emerald-200 mb-4" />
              <p className="text-emerald-800 font-medium px-4">Submit your financial parameters to generate your personalized roadmap.</p>
            </Card>
          )}

          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          )}

          {financials && !isLoading && (
            <>
              <FinancialHealthMeter health={financials.healthMeter} />
              <FundingMatchList matches={financials.fundingMatches} />
            </>
          )}
        </div>

        <div className="lg:col-span-2 space-y-6">
          {isLoading && (
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-80 w-full col-span-2" />
            </div>
          )}

          {financials && !isLoading && (
            <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <RoadmapCard icon={Banknote} title="Capital Required" value={financials.capitalRequired} />
                <RoadmapCard icon={TrendingUp} title="Estimated ROI" value={financials.roiEstimate} subtitle="Annualized" />
                <RoadmapCard icon={Clock} title="Break-Even" value={`${financials.breakEvenMonths} mo`} subtitle="Estimated timeline" />
                <RoadmapCard icon={AlertCircle} title="Loan Rec." value={financials.loanRecommendation.amount} subtitle={financials.loanRecommendation.interestRate} />
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <h3 className="font-fraunces font-medium text-lg text-emerald-900 mb-6">Estimated Expense Breakdown</h3>
                  <FinancialPieChart data={financials.expenseBreakdown} />
                </Card>
                
                <Card className="bg-white">
                  <h3 className="font-fraunces font-medium text-lg text-emerald-900 mb-6">Cumulative Return Projection</h3>
                  <BreakEvenChart data={breakEvenData} investmentValue={250000} />
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
