import React, { useState } from 'react';
import { SchemeCard } from '../components/schemes/SchemeCard';
import { SchemeFilterBar } from '../components/schemes/SchemeFilterBar';
import { SchemeEligibilityForm } from '../components/schemes/SchemeEligibilityForm';
import { mockSchemes } from '../data/mockSchemes';
import { Card } from '../components/ui/Card';
import { useAppState } from '../context/AppStateContext';

export function GovernmentSchemesPage() {
  const [filteredSchemes, setFilteredSchemes] = useState(mockSchemes);
  const { userProfile } = useAppState();

  const handleFilterChange = (searchTerm, activeTag) => {
    let filtered = mockSchemes;
    
    if (searchTerm) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (activeTag !== 'All') {
      filtered = filtered.filter(s => s.tags.includes(activeTag));
    }
    
    setFilteredSchemes(filtered);
  };

  // Mock eligibility logic based on global userProfile
  const checkEligibility = (schemeName) => {
    if (schemeName === 'Stand-Up India') {
      // Stand-Up India is typically for SC/ST and/or women entrepreneurs
      return userProfile.gender === 'female';
    }
    if (schemeName === 'PMFME') {
      // Food processing
      return ['Agriculture', 'Dairy', 'Food Processing'].includes(userProfile.businessType) || userProfile.skills?.includes('Food Processing');
    }
    if (schemeName === 'PMEGP' || schemeName === 'MUDRA Yojana') {
      return true; // Broadly applicable
    }
    return true;
  };

  const prioritySchemes = ['PMEGP', 'MUDRA Yojana', 'PMFME', 'Stand-Up India'];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in">
      <div className="mb-8">
        <h1 className="font-fraunces text-3xl text-emerald-900 mb-2">Government Schemes Hub</h1>
        <p className="text-ink-500">Discover and apply for financial assistance, subsidies, and grants.</p>
      </div>

      <Card className="mb-8 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 shadow-sm">
        <h2 className="font-fraunces text-xl font-medium text-emerald-900 mb-4">Eligible Schemes for You</h2>
        <p className="text-sm text-ink-500 mb-6">Based on your Profile Hub details (Budget: ₹{Number(userProfile.budget || 0).toLocaleString('en-IN')}, Sector: {userProfile.businessType || 'N/A'})</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {prioritySchemes.map(scheme => {
            const isEligible = checkEligibility(scheme);
            return (
              <div key={scheme} className={`p-4 rounded-xl border ${isEligible ? 'bg-white border-emerald-200 shadow-sm' : 'bg-beige-50 border-beige-200 opacity-70'} flex items-center justify-between`}>
                <span className={`font-medium ${isEligible ? 'text-emerald-900' : 'text-ink-500'}`}>{scheme}</span>
                <span className="text-lg">{isEligible ? '✅' : '❌'}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <SchemeFilterBar onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {filteredSchemes.map(scheme => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
        {filteredSchemes.length === 0 && (
          <div className="col-span-full text-center py-12 text-ink-500 bg-white rounded-xl border border-beige-200 border-dashed">
            No schemes match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
