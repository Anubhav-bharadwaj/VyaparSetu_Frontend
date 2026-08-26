import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MockMap({ opportunities, showHeatmap }) {
  const [selectedPin, setSelectedPin] = useState(null);

  // Jalgaon coordinates for center
  const center = [21.0077, 75.5626];

  // Helper to create custom div icon
  const createIcon = (opportunity) => {
    const colorMap = {
      'Agriculture': 'bg-emerald-500',
      'Dairy': 'bg-blue-500',
      'Infrastructure': 'bg-harvest-500',
      'Services': 'bg-purple-500',
      'Artisan': 'bg-pink-500',
      'Agri-Processing': 'bg-yellow-500'
    };
    
    const bgClass = colorMap[opportunity.category] || 'bg-emerald-600';
    const isHigh = opportunity.demandLevel === 'high';
    
    const htmlString = `
      <div class="relative group cursor-pointer w-full h-full flex items-center justify-center">
        ${isHigh ? `<div class="absolute inset-0 rounded-full animate-ping opacity-75 ${bgClass}"></div>` : ''}
        <div class="relative rounded-full shadow-md border-2 border-white transition-all duration-200 ${bgClass} w-4 h-4 hover:scale-125"></div>
      </div>
    `;

    return L.divIcon({
      html: htmlString,
      className: 'custom-leaflet-marker',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  };

  return (
    <div className="relative w-full h-[calc(100vh-130px)] md:h-[600px] bg-beige-200 overflow-hidden rounded-2xl border border-beige-200 shadow-inner z-0">
      <MapContainer center={center} zoom={11} className="w-full h-full" zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showHeatmap && opportunities.map(opp => (
          (opp.demandLevel === 'high' || opp.demandLevel === 'medium') && (
            <Circle 
              key={`heat-${opp.id}`}
              center={[opp.lat, opp.lng]}
              pathOptions={{
                fillColor: opp.demandLevel === 'high' ? '#C8862E' : '#0F7B54',
                fillOpacity: 0.2,
                weight: 0
              }}
              radius={opp.demandLevel === 'high' ? 3000 : 1500}
            />
          )
        ))}

        {opportunities.map((opp) => (
          <Marker 
            key={opp.id} 
            position={[opp.lat, opp.lng]} 
            icon={createIcon(opp)}
            eventHandlers={{
              click: () => setSelectedPin(opp),
            }}
          />
        ))}
      </MapContainer>

      {selectedPin && (
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 z-[1000]">
          <Card className="bg-white/95 backdrop-blur-sm p-4 relative animate-in slide-in-from-bottom-4 shadow-xl border-emerald-100">
            <button 
              onClick={() => setSelectedPin(null)}
              className="absolute top-3 right-3 text-ink-500 hover:text-ink-900 bg-beige-50 rounded-full p-1"
            >
              <X size={16} />
            </button>
            
            <div className="pr-6 mb-2">
              <Badge variant={selectedPin.demandLevel === 'high' ? 'success' : selectedPin.demandLevel === 'medium' ? 'warning' : 'neutral'}>
                {selectedPin.demandLevel.charAt(0).toUpperCase() + selectedPin.demandLevel.slice(1)} Demand
              </Badge>
              <h4 className="font-fraunces font-medium text-lg text-emerald-900 mt-2">{selectedPin.name}</h4>
              <p className="text-sm text-ink-500">{selectedPin.villageName} • {selectedPin.distanceKm}km away</p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-beige-200">
              <Link to="/dashboard">
                <Button variant="outline" className="w-full h-8 text-xs bg-white hover:bg-emerald-50">
                  View in Advisor <ExternalLink size={14} className="ml-1" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
