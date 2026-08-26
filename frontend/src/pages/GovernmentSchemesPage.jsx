import React, { useState } from 'react';
import { SchemeCard } from '../components/schemes/SchemeCard';
import { SchemeFilterBar } from '../components/schemes/SchemeFilterBar';
import { SchemeEligibilityForm } from '../components/schemes/SchemeEligibilityForm';
import { mockSchemes } from '../data/mockSchemes';
import { Card } from '../components/ui/Card';

export function GovernmentSchemesPage() {
  const [filteredSchemes, setFilteredSchemes] = useState(mockSchemes);
  const [hasCheckedEligibility, setHasCheckedEligibility] = useState(false);
  const [eligibilityData, setEligibilityData] = useState(null);

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

  const handleEligibilityChecked = (data) => {
    setHasCheckedEligibility(true);
    setEligibilityData(data);
    // In a real app, backend API would return personalized schemes based on data.
    // Here we'll just prioritize PMEGP and MUDRA in the sort order or filter.
    // For mock purposes, just display a success message and keep the filter active.
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in">
      <div className="mb-8">
        <h1 className="font-fraunces text-3xl text-emerald-900 mb-2">Government Schemes Hub</h1>
        <p className="text-ink-500">Discover and apply for financial assistance, subsidies, and grants.</p>
      </div>

      <div className="mb-8">
        <SchemeEligibilityForm onEligibilityChecked={handleEligibilityChecked} />
      </div>

      {hasCheckedEligibility && (
        <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="font-medium">Personalized Matches Active. </span> 
            <span className="text-sm opacity-90">Showing schemes most relevant to {eligibilityData?.gender}, {eligibilityData?.locationType} {eligibilityData?.businessType} entrepreneurs.</span>
          </div>
          <button 
            onClick={() => setHasCheckedEligibility(false)}
            className="text-sm text-emerald-600 font-medium hover:underline mt-2 md:mt-0"
          >
            Clear Preferences
          </button>
        </div>
      )}

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
