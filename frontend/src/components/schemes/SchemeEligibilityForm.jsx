import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { useMockDelay } from '../../hooks/useMockDelay';

export function SchemeEligibilityForm({ onEligibilityChecked }) {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    locationType: 'rural',
    businessType: 'manufacturing',
    incomeRange: '< 2L'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, runWithDelay } = useMockDelay(1000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await runWithDelay();
    setIsSubmitted(true);
    if (onEligibilityChecked) {
      onEligibilityChecked(formData);
    }
  };

  return (
    <Card className="bg-emerald-50/50 border-emerald-100">
      <div className="mb-6">
        <h3 className="font-fraunces text-xl text-emerald-900 mb-2">Check Your Eligibility</h3>
        <p className="text-ink-500 text-sm">Tell us about yourself to find the best government schemes for your business.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink-900 mb-1">Age</label>
            <Input 
              type="number" 
              placeholder="e.g. 28" 
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-900 mb-1">Gender</label>
            <Select 
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' }
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink-900 mb-1">Location Type</label>
            <Select 
              value={formData.locationType}
              onChange={(e) => setFormData({...formData, locationType: e.target.value})}
              options={[
                { value: 'rural', label: 'Rural' },
                { value: 'urban', label: 'Urban' }
              ]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-900 mb-1">Business Sector</label>
            <Select 
              value={formData.businessType}
              onChange={(e) => setFormData({...formData, businessType: e.target.value})}
              options={[
                { value: 'manufacturing', label: 'Manufacturing' },
                { value: 'services', label: 'Services' },
                { value: 'agriculture', label: 'Agriculture/Allied' },
                { value: 'trading', label: 'Trading' }
              ]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-900 mb-1">Annual Income</label>
            <Select 
              value={formData.incomeRange}
              onChange={(e) => setFormData({...formData, incomeRange: e.target.value})}
              options={[
                { value: '< 2L', label: 'Below ₹2 Lakhs' },
                { value: '2L-5L', label: '₹2L - ₹5 Lakhs' },
                { value: '> 5L', label: 'Above ₹5 Lakhs' }
              ]}
            />
          </div>
        </div>

        <div className="pt-2">
          {isSubmitted ? (
            <div className="flex items-center space-x-2 text-success font-medium bg-emerald-100 p-3 rounded-xl">
              <CheckCircle size={20} />
              <span>Eligibility analysis complete! See matched schemes below.</span>
            </div>
          ) : (
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? 'Analyzing...' : 'Check Eligible Schemes'}
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
