import React, { useState, useMemo } from 'react';
import { useAppState } from '../context/AppStateContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FinancialHealthMeter } from '../components/financial/FinancialHealthMeter';
import { TimelineRoadmap } from '../components/blueprint/TimelineRoadmap';
import { MentorCard } from '../components/mentors/MentorCard';
import { mockMentors } from '../data/mockMentors';
import { EditProfileModal } from '../components/profile/EditProfileModal';
import { ProgressRing } from '../components/ui/ProgressRing';
import { AlertCircle, Edit3, Sparkles, MapPin, Briefcase, IndianRupee, Lightbulb } from 'lucide-react';

export function ProfilePage() {
  const { userProfile, updateProfile, hasCompletedAdvisor } = useAppState();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Profile Completion Logic
  const completionStats = useMemo(() => {
    const fieldsToCheck = [
      'name', 'age', 'gender', 'mobile', 'village', 'district', 'state',
      'occupation', 'businessType', 'experience', 'incomeRange', 'budget'
    ];
    
    let filled = 0;
    const missing = [];
    
    fieldsToCheck.forEach(field => {
      if (userProfile[field] && userProfile[field] !== '') {
        filled++;
      } else {
        missing.push(field);
      }
    });

    if (userProfile.goals?.length > 0) filled++; else missing.push('goals');
    if (userProfile.skills?.length > 0) filled++; else missing.push('skills');
    if (userProfile.assets?.length > 0) filled++; else missing.push('assets');

    const totalFields = fieldsToCheck.length + 3; // +3 for goals, skills, assets
    const percentage = Math.round((filled / totalFields) * 100);

    return { percentage, missing };
  }, [userProfile]);

  // AI-Powered Persona Generation
  const persona = useMemo(() => {
    if (!userProfile.businessType) return null;

    const titles = {
      'Agriculture': 'Agri-Tech Innovator',
      'Dairy': 'Growth-Oriented Dairy Entrepreneur',
      'Retail': 'Hyper-Local Retail Specialist',
      'Manufacturing': 'Emerging Micro-Manufacturer',
      'Services': 'Rural Service Provider',
      'Handicrafts': 'Artisanal Commerce Leader'
    };

    const title = titles[userProfile.businessType] || 'Emerging Rural Entrepreneur';
    
    const strengths = [];
    if (userProfile.assets?.length > 0) strengths.push(`Leveraging existing physical assets (${userProfile.assets[0]})`);
    if (userProfile.skills?.length > 0) strengths.push(`Domain expertise in ${userProfile.skills[0]}`);
    if (userProfile.experience > 2) strengths.push('Proven operational experience');
    if (strengths.length === 0) strengths.push('Strong foundational motivation to start a new venture');

    const opportunities = [];
    if (userProfile.loanRequired === 'yes') opportunities.push('Eligible for subsidized government credit (MUDRA, PMEGP)');
    if (userProfile.goals?.includes('Expand Existing Business')) opportunities.push('Scaling operations via digital market linkage');
    if (userProfile.goals?.includes('Find Market Opportunities')) opportunities.push('Capturing unmet hyper-local demand');
    if (opportunities.length === 0) opportunities.push('Unlocking localized market gaps using AI insights');

    const focusArea = userProfile.budget < 50000 
      ? 'Focus on low-capex setups and maximizing government subsidies before taking private loans.'
      : 'Focus on strategic capital deployment, upgrading equipment, and expanding market reach.';

    return { title, strengths, opportunities, focusArea };
  }, [userProfile]);

  const mockHealth = {
    financial: 72,
    market: 88,
    skill: 65
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in pb-20">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-fraunces text-3xl text-emerald-900 mb-2">My Profile</h1>
          <p className="text-ink-500">Your central personalization hub.</p>
        </div>
        <Button onClick={() => setIsEditModalOpen(true)} className="flex items-center space-x-2">
          <Edit3 size={16} /> <span>Edit Profile</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Main Profile Card */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="bg-emerald-900 text-white overflow-hidden relative p-0">
            <div className="absolute inset-0 bg-node-network-dark opacity-20"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-fraunces text-2xl font-bold flex-shrink-0">
                  {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'R'}
                </div>
                <div>
                  <h2 className="font-fraunces text-xl font-medium truncate">{userProfile.name || 'Setup your profile'}</h2>
                  <p className="text-emerald-100 text-sm flex items-center mt-1">
                    <MapPin size={14} className="mr-1" />
                    {userProfile.village ? `${userProfile.village}, ${userProfile.state}` : 'Location Not Set'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Briefcase size={16} className="text-emerald-300 mt-0.5" />
                  <div>
                    <p className="text-xs text-emerald-100/70 uppercase tracking-wider mb-1">Business Sector</p>
                    <p className="font-medium">{userProfile.businessType || 'Not Selected'}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <IndianRupee size={16} className="text-emerald-300 mt-0.5" />
                  <div>
                    <p className="text-xs text-emerald-100/70 uppercase tracking-wider mb-1">Investment Budget</p>
                    <p className="font-medium font-mono">₹{Number(userProfile.budget || 0).toLocaleString('en-IN')}</p>
                  </div>
                </div>
                {userProfile.skills?.length > 0 && (
                  <div className="flex items-start space-x-3">
                    <Lightbulb size={16} className="text-emerald-300 mt-0.5" />
                    <div>
                      <p className="text-xs text-emerald-100/70 uppercase tracking-wider mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {userProfile.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-md">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Profile Completion Card */}
          <Card className="bg-white border-beige-200">
            <h3 className="font-fraunces font-medium text-lg text-emerald-900 mb-4">Profile Completion</h3>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 flex-shrink-0">
                <ProgressRing progress={completionStats.percentage} />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">{completionStats.percentage}%</p>
                <p className="text-sm text-ink-500">Complete</p>
              </div>
            </div>
            
            {completionStats.missing.length > 0 && (
              <div className="mt-6 bg-red-50 p-3 rounded-xl flex items-start space-x-3">
                <AlertCircle size={18} className="text-danger flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-danger mb-1">Missing Info Detected</p>
                  <p className="text-xs text-danger/80">Add {completionStats.missing.slice(0, 3).join(', ')} to boost your AI matching accuracy.</p>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* AI Persona Card */}
          {persona ? (
            <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={80} className="text-emerald-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-emerald-600 mb-2">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">AI Persona Generated</span>
                </div>
                <h3 className="font-fraunces text-2xl text-emerald-900 mb-6">{persona.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 mb-3">Key Strengths</h4>
                    <ul className="space-y-2">
                      {persona.strengths.map((s, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-ink-500">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 mb-3">Identified Opportunities</h4>
                    <ul className="space-y-2">
                      {persona.opportunities.map((o, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-ink-500">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/60 p-4 rounded-xl border border-emerald-100">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Recommended Focus</h4>
                  <p className="text-sm text-emerald-900">{persona.focusArea}</p>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="bg-white border-beige-200 border-dashed flex flex-col items-center justify-center text-center p-8 min-h-[250px]">
              <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                <Sparkles size={24} />
              </div>
              <h3 className="font-fraunces text-xl text-emerald-900 mb-2">AI Persona Locked</h3>
              <p className="text-ink-500 max-w-md">Update your business type and profile details to generate your personalized AI entrepreneur persona.</p>
              <Button onClick={() => setIsEditModalOpen(true)} variant="outline" className="mt-6">Complete Profile</Button>
            </Card>
          )}

          {/* Smart Business Blueprint */}
          <Card className="bg-white">
            <h3 className="font-fraunces font-medium text-xl text-emerald-900 mb-2">Smart Business Blueprint</h3>
            <p className="text-sm text-ink-500 mb-6">Your personalized roadmap to launching and growing your business.</p>
            <TimelineRoadmap currentStage={hasCompletedAdvisor ? 2 : 1} />
          </Card>
        </div>
      </div>

      <EditProfileModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        userProfile={userProfile} 
        onSave={updateProfile} 
      />
    </div>
  );
}
