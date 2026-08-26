import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { Sparkles, MapPin } from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { VoiceAdvisorButton } from '../chat/VoiceAdvisorButton';
import { cn } from '../ui/Button';

export function AdvisorInputForm({ onSubmit, isLoading }) {
  const { userProfile, updateProfile } = useAppState();
  
  const [formData, setFormData] = useState({
    location: userProfile.location || '',
    businessType: userProfile.businessType || 'Farming',
    budget: userProfile.budget || 50000,
    goals: userProfile.goals || []
  });

  const availableGoals = [
    'Increase Income', 'Diversify', 'Start New Business', 'Expand Existing'
  ];

  const handleGoalToggle = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) 
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    onSubmit(formData);
  };

  const handleVoiceInput = (text) => {
    // In a real app, this would parse the voice text. For the mock, we just show a toast or fill a field.
    // We'll simulate picking up a location and business type from voice.
    setFormData(prev => ({
      ...prev,
      businessType: 'Dairy',
      goals: [...new Set([...prev.goals, 'Increase Income'])]
    }));
  };

  return (
    <Card className="mb-8 border-emerald-100 bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-fraunces text-xl text-emerald-900 flex items-center">
            <Sparkles className="mr-2 text-harvest-500" size={20} />
            Business Profile Inputs
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-ink-500 hidden sm:inline">Prefer voice?</span>
            <VoiceAdvisorButton onTranscript={handleVoiceInput} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-ink-900 flex items-center">
              <MapPin size={14} className="mr-1 text-ink-500" /> Location
            </label>
            <Input 
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="Village, District"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium text-ink-900">Current Business Type</label>
            <Select 
              value={formData.businessType}
              onChange={(e) => setFormData({...formData, businessType: e.target.value})}
              options={['Farming', 'Dairy', 'Poultry', 'Retail Shop', 'Artisan/Craft', 'Services', 'None']}
            />
          </div>
          
          <div className="space-y-1 lg:col-span-2">
            <label className="text-sm font-medium text-ink-900 flex justify-between">
              <span>Investment Budget</span>
              <span className="font-mono text-emerald-600 font-bold">
                ₹{Number(formData.budget).toLocaleString('en-IN')}
              </span>
            </label>
            <input 
              type="range" 
              min="10000" 
              max="1000000" 
              step="10000"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full h-2 bg-beige-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 mt-3"
            />
            <div className="flex justify-between text-xs text-ink-500 mt-1 font-mono">
              <span>₹10k</span>
              <span>₹10L</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-ink-900">Primary Goals</label>
          <div className="flex flex-wrap gap-2">
            {availableGoals.map(goal => (
              <button
                key={goal}
                type="button"
                onClick={() => handleGoalToggle(goal)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors border",
                  formData.goals.includes(goal)
                    ? "bg-emerald-100 border-emerald-200 text-emerald-900"
                    : "bg-white border-beige-200 text-ink-500 hover:border-emerald-600 hover:text-emerald-600"
                )}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Button type="submit" disabled={isLoading} size="lg" className="w-full md:w-auto">
            {isLoading ? 'Analyzing Hyper-Local Data...' : 'Get AI Recommendations'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
