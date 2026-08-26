import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { Card } from '../components/ui/Card';
import { FinancialHealthMeter } from '../components/financial/FinancialHealthMeter';
import { TimelineRoadmap } from '../components/blueprint/TimelineRoadmap';
import { MentorCard } from '../components/mentors/MentorCard';
import { mockMentors } from '../data/mockMentors';

export function ProfilePage() {
  const { userProfile, hasCompletedAdvisor } = useAppState();

  const mockHealth = {
    financial: 72,
    market: 88,
    skill: 65
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in pb-20">
      <div className="mb-8">
        <h1 className="font-fraunces text-3xl text-emerald-900 mb-2">My Profile</h1>
        <p className="text-ink-500">Manage your business details and track your roadmap.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-1">
          <Card className="bg-emerald-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-node-network-dark opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-fraunces text-2xl font-bold">
                  {userProfile.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-fraunces text-xl font-medium">{userProfile.name}</h2>
                  <p className="text-emerald-100 text-sm">{userProfile.location || 'Location Not Set'}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-emerald-100/70 uppercase tracking-wider mb-1">Business Type</p>
                  <p className="font-medium">{userProfile.businessType || 'Not Selected'}</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-100/70 uppercase tracking-wider mb-1">Investment Budget</p>
                  <p className="font-medium font-mono text-lg">₹{Number(userProfile.budget).toLocaleString('en-IN')}</p>
                </div>
                {userProfile.goals.length > 0 && (
                  <div>
                    <p className="text-xs text-emerald-100/70 uppercase tracking-wider mb-2">Goals</p>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.goals.map((goal, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-md">{goal}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {hasCompletedAdvisor ? (
            <FinancialHealthMeter health={mockHealth} />
          ) : (
            <Card className="bg-white h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-beige-200 rounded-full flex items-center justify-center mb-4 text-ink-500">
                ?
              </div>
              <h3 className="font-fraunces text-xl text-emerald-900 mb-2">Readiness Score Unavailable</h3>
              <p className="text-ink-500">Complete the AI Business Advisor process to unlock your readiness score and personalized metrics.</p>
            </Card>
          )}
        </div>
      </div>

      <Card className="bg-white mb-8">
        <h3 className="font-fraunces font-medium text-xl text-emerald-900 mb-2">Smart Business Blueprint</h3>
        <p className="text-sm text-ink-500 mb-6">Your personalized roadmap to launching and growing your business.</p>
        <TimelineRoadmap currentStage={hasCompletedAdvisor ? 2 : 1} />
      </Card>

      <div>
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h3 className="font-fraunces font-medium text-xl text-emerald-900 mb-1">AI Mentor Marketplace</h3>
            <p className="text-sm text-ink-500">Connect with domain experts to guide your journey.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockMentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}
