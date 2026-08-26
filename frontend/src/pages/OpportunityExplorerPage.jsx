import React, { useState } from 'react';
import { Map as MapIcon, List, Layers } from 'lucide-react';
import { ExplorerFilters } from '../components/explorer/ExplorerFilters';
import { MockMap } from '../components/explorer/MockMap';
import { mockOpportunities } from '../data/mockOpportunities';
import { Button } from '../components/ui/Button';

export function OpportunityExplorerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [demandFilter, setDemandFilter] = useState('All');
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'
  const [showHeatmap, setShowHeatmap] = useState(true);

  // Filter logic
  const filteredOpportunities = mockOpportunities.filter(opp => {
    const matchesSearch = opp.name.toLowerCase().includes(searchTerm.toLowerCase()) || opp.villageName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'All' || opp.category === activeCategory;
    const matchesDemand = demandFilter === 'All' || opp.demandLevel.toLowerCase() === demandFilter.toLowerCase();
    return matchesSearch && matchesCat && matchesDemand;
  });

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] animate-in fade-in">
      <div className="bg-white px-4 md:px-8 py-4 border-b border-beige-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="font-fraunces text-2xl text-emerald-900">Opportunity Explorer</h1>
          <p className="text-sm text-ink-500">Discover hyper-local demand in your cluster.</p>
        </div>
        
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <Button 
            variant={showHeatmap ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setShowHeatmap(!showHeatmap)}
            className="flex-1 sm:flex-none"
          >
            <Layers size={16} className="mr-2" /> Heatmap
          </Button>
          
          <div className="flex bg-beige-100 rounded-lg p-1 border border-beige-200">
            <button
              onClick={() => setViewMode('map')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'map' ? 'bg-white shadow text-emerald-600' : 'text-ink-500'}`}
              title="Map View"
            >
              <MapIcon size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow text-emerald-600' : 'text-ink-500'}`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      <ExplorerFilters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        demandFilter={demandFilter}
        setDemandFilter={setDemandFilter}
      />

      <div className="flex-1 p-4 md:p-8 overflow-hidden relative">
        {viewMode === 'map' ? (
          <MockMap opportunities={filteredOpportunities} showHeatmap={showHeatmap} />
        ) : (
          <div className="h-full overflow-y-auto pr-2 pb-20 md:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredOpportunities.map(opp => (
                <div key={opp.id} className="bg-white p-4 rounded-xl border border-beige-200 shadow-sm flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-emerald-900">{opp.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${opp.demandLevel === 'high' ? 'bg-success/20 text-success' : opp.demandLevel === 'medium' ? 'bg-harvest-500/20 text-harvest-500' : 'bg-beige-200 text-ink-500'}`}>
                      {opp.demandLevel} demand
                    </span>
                  </div>
                  <p className="text-sm text-ink-500 mb-1">{opp.category}</p>
                  <p className="text-sm text-ink-500 mb-4">{opp.villageName} • {opp.distanceKm}km away</p>
                  <Button variant="outline" size="sm" className="mt-auto w-full">View in Advisor</Button>
                </div>
              ))}
              {filteredOpportunities.length === 0 && (
                <div className="col-span-full text-center py-12 text-ink-500 bg-white rounded-xl border border-beige-200 border-dashed">
                  No opportunities match your filters.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
