import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function MentorCard({ mentor }) {
  const [sessionRequested, setSessionRequested] = useState(false);

  const handleRequest = () => {
    setSessionRequested(true);
    setTimeout(() => setSessionRequested(false), 3000);
  };

  return (
    <Card className="flex flex-col bg-white hover:border-emerald-600 transition-colors">
      <div className="flex items-start space-x-4 mb-4">
        <img 
          src={mentor.avatar} 
          alt={mentor.name} 
          className="w-16 h-16 rounded-full object-cover border border-beige-200"
        />
        <div className="flex-1">
          <h3 className="font-fraunces font-medium text-lg text-emerald-900">{mentor.name}</h3>
          <p className="text-sm text-emerald-600 font-medium mb-1">{mentor.expertise}</p>
          <div className="flex items-center text-sm font-medium text-harvest-500">
            <Star size={14} className="fill-current mr-1" />
            {mentor.rating}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-ink-500 mb-6 flex-1">{mentor.bio}</p>
      
      <div className="mt-auto pt-4 border-t border-beige-200 relative">
        <Button 
          variant={sessionRequested ? "outline" : "primary"}
          className="w-full flex justify-center items-center space-x-2" 
          onClick={handleRequest}
          disabled={sessionRequested}
        >
          {sessionRequested ? (
            <span className="text-emerald-600">Mentor sessions launching soon</span>
          ) : (
            <>
              <MessageSquare size={16} />
              <span>Request Session</span>
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
