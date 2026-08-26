import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAppState } from '../../context/AppStateContext';

export function FinancialInputForm({ onSubmit, isLoading }) {
  const { userProfile } = useAppState();
  
  const [formData, setFormData] = useState({
    budget: userProfile.budget || 50000,
    existingSavings: 20000,
    expectedInvestment: 150000
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="bg-white border-emerald-100">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 mr-3">
          <Calculator size={24} />
        </div>
        <div>
          <h2 className="font-fraunces text-xl text-emerald-900">Financial Parameters</h2>
          <p className="text-sm text-ink-500">Adjust these inputs to recalculate your roadmap.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink-900 mb-1">Total Project Budget</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-500 font-mono">₹</span>
            <Input 
              type="number"
              className="pl-8 font-mono"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value) || 0})}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-ink-900 mb-1">Your Existing Savings</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-500 font-mono">₹</span>
            <Input 
              type="number"
              className="pl-8 font-mono"
              value={formData.existingSavings}
              onChange={(e) => setFormData({...formData, existingSavings: parseInt(e.target.value) || 0})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink-900 mb-1">Expected External Investment/Loan</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-500 font-mono">₹</span>
            <Input 
              type="number"
              className="pl-8 font-mono"
              value={formData.expectedInvestment}
              onChange={(e) => setFormData({...formData, expectedInvestment: parseInt(e.target.value) || 0})}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Calculating...' : 'Build My Financial Roadmap'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
