import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip, CartesianGrid, XAxis, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { mockKPIs } from '../data/mockKPIs';
import { cn } from '../components/ui/Button';

import { AdvisorInputForm } from '../components/advisor/AdvisorInputForm';
import { RecommendationGrid } from '../components/advisor/RecommendationGrid';
import { Skeleton } from '../components/ui/Skeleton';
import { mockRecommendations } from '../data/mockRecommendations';
import { useMockDelay } from '../hooks/useMockDelay';
import { useAppState } from '../context/AppStateContext';

const KPICard = ({ kpi }) => {
  const Icon = kpi.change === 'up' ? ArrowUpRight : kpi.change === 'down' ? ArrowDownRight : Minus;
  const color = kpi.change === 'up' ? 'text-success' : kpi.change === 'down' ? 'text-danger' : 'text-ink-500';
  const bgColor = kpi.change === 'up' ? 'bg-emerald-50' : kpi.change === 'down' ? 'bg-red-50' : 'bg-beige-200';

  return (
    <Card className="bg-white">
      <p className="text-sm font-medium text-ink-500 mb-2">{kpi.label}</p>
      <div className="flex items-end justify-between">
        <h3 className="font-fraunces font-semibold text-2xl text-emerald-900">{kpi.value}</h3>
        <div className={cn("flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium", color, bgColor)}>
          <Icon size={14} />
          {kpi.trend[kpi.trend.length - 1].value}%
        </div>
      </div>
      <div className="h-12 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={kpi.trend}>
            <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={kpi.change === 'up' ? '#0F7B54' : kpi.change === 'down' ? '#B3432B' : '#5B655F'} 
              strokeWidth={2} 
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

const BusinessScoreGauge = ({ score }) => {
  const data = [{ name: 'Score', value: score, fill: '#0F7B54' }];
  
  return (
    <Card className="flex flex-col items-center justify-center text-center h-full bg-white relative">
      <h3 className="font-fraunces font-medium text-lg text-emerald-900 mb-2 w-full text-left absolute top-6 left-6">Overall Business Score</h3>
      <div className="w-full h-48 mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="50%" 
            cy="100%" 
            innerRadius="70%" 
            outerRadius="100%" 
            barSize={20} 
            data={data} 
            startAngle={180} 
            endAngle={0}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar 
              minAngle={15} 
              background={{ fill: '#EFE4CC' }} 
              clockWise 
              dataKey="value" 
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute top-[65%] flex flex-col items-center">
        <span className="font-mono text-4xl font-bold text-emerald-900">{score}</span>
        <span className="text-sm text-ink-500 font-medium">/ 100</span>
      </div>
      <div className="absolute bottom-6 w-full px-8 flex justify-between text-xs text-ink-500 font-mono">
        <span>0 (At Risk)</span>
        <span>100 (Excellent)</span>
      </div>
    </Card>
  );
};

export function DashboardPage() {
  const [recommendations, setRecommendations] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { isLoading, runWithDelay } = useMockDelay(1200);
  const { setHasCompletedAdvisor } = useAppState();

  const [period, setPeriod] = useState('30d');
  
  // Mock data for main trend chart
  const trendData = {
    '30d': [{d: 'Week 1', val: 120}, {d: 'Week 2', val: 132}, {d: 'Week 3', val: 125}, {d: 'Week 4', val: 145}],
    '90d': [{d: 'Month 1', val: 400}, {d: 'Month 2', val: 550}, {d: 'Month 3', val: 620}],
    '1y': [{d: 'Q1', val: 1200}, {d: 'Q2', val: 1800}, {d: 'Q3', val: 1600}, {d: 'Q4', val: 2400}]
  };

  const handleAdvisorSubmit = async (formData) => {
    setHasSearched(true);
    setRecommendations([]); // clear previous
    await runWithDelay();
    
    // In a real app, we'd filter based on formData.
    // Here we just show the mock data.
    setRecommendations(mockRecommendations);
    setHasCompletedAdvisor(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in pb-20">
      
      {/* Top Section: Business Health Dashboard */}
      <div className="mb-8">
        <h1 className="font-fraunces text-3xl text-emerald-900 mb-2">Business Dashboard</h1>
        <p className="text-ink-500">Track key performance indicators and monitor your overall readiness.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {mockKPIs.map(kpi => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <Card className="bg-white h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-fraunces font-medium text-lg text-emerald-900">Revenue Growth Trend</h3>
              <div className="flex bg-beige-100 rounded-lg p-1 border border-beige-200">
                {['30d', '90d', '1y'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={cn(
                      "px-3 py-1 text-xs font-medium rounded-md transition-colors",
                      period === p ? "bg-white shadow-sm text-emerald-900" : "text-ink-500 hover:text-ink-900"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 min-h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData[period]} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFE4CC" />
                  <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: '#5B655F', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5B655F', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -4px rgba(15,70,50,0.12)' }} />
                  <Line type="monotone" dataKey="val" stroke="#0F7B54" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-1 min-h-[300px]">
          <BusinessScoreGauge score={78} />
        </div>
      </div>

      {/* Bottom Section: AI Advisor */}
      <div className="mb-8 pt-8 border-t border-beige-200">
        <h2 className="font-fraunces text-3xl text-emerald-900 mb-2">AI Business Advisor</h2>
        <p className="text-ink-500">Discover hyper-local business opportunities tailored to your profile.</p>
      </div>

      <AdvisorInputForm onSubmit={handleAdvisorSubmit} isLoading={isLoading} />

      {hasSearched && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="font-fraunces text-2xl text-emerald-900 mb-6">Your Top Opportunities</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-beige-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3 w-2/3">
                      <Skeleton className="w-12 h-12 rounded-xl" />
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                    <Skeleton className="w-12 h-12 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <RecommendationGrid recommendations={recommendations} />
          )}
        </div>
      )}
    </div>
  );
}
