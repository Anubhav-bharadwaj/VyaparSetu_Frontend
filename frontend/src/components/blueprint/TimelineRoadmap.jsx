import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '../ui/Button';

export function TimelineRoadmap({ currentStage = 1 }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  // Trigger fluid load-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(((currentStage - 1) / 3) * 100);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentStage]);

  const stages = [
    { id: 1, title: 'Idea & Profiling', desc: 'Identify best business match', status: currentStage > 1 ? 'past' : currentStage === 1 ? 'current' : 'future' },
    { id: 2, title: 'Funding & Setup', desc: 'Apply for schemes & secure capital', status: currentStage > 2 ? 'past' : currentStage === 2 ? 'current' : 'future' },
    { id: 3, title: 'Launch', desc: 'Procure materials & start ops', status: currentStage > 3 ? 'past' : currentStage === 3 ? 'current' : 'future' },
    { id: 4, title: 'Growth', desc: 'Track health & expand market', status: currentStage > 4 ? 'past' : currentStage === 4 ? 'current' : 'future' }
  ];

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Background Connecting Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-beige-200 -z-10 rounded-full hidden md:block"></div>
        
        {/* Animated Active Connecting Line */}
        <div 
          className="absolute top-5 left-0 h-1 bg-emerald-600 -z-10 rounded-full hidden md:block transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        ></div>

        <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-0">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="flex md:flex-col items-start md:items-center relative z-10 w-full md:w-1/4 group cursor-pointer">
              {/* Vertical connecting line for mobile */}
              {idx !== stages.length - 1 && (
                <div className="md:hidden absolute top-10 left-5 w-1 h-[calc(100%+2rem)] bg-beige-200 -z-10"></div>
              )}
              {idx !== stages.length - 1 && stage.status === 'past' && (
                <div className="md:hidden absolute top-10 left-5 w-1 h-[calc(100%+2rem)] bg-emerald-600 -z-10 transition-all duration-1000"></div>
              )}

              {/* Node Circle */}
              <div className="relative">
                {/* Pulsing ring for current stage */}
                {stage.status === 'current' && (
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-600 animate-ping opacity-20"></div>
                )}
                
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shrink-0 shadow-sm mr-4 md:mr-0 md:mb-4 transition-all duration-500 transform group-hover:scale-110",
                  stage.status === 'past' ? "bg-emerald-600 text-white" :
                  stage.status === 'current' ? "bg-white border-emerald-600 border-4 text-emerald-600 ring-4 ring-emerald-50" :
                  "bg-beige-200 text-ink-500 group-hover:bg-beige-300"
                )}>
                  {stage.status === 'past' ? <CheckCircle size={20} /> : <span className="font-bold font-fraunces">{stage.id}</span>}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-left md:text-center mt-1 md:mt-0 transition-transform duration-500 group-hover:-translate-y-1">
                <h4 className={cn(
                  "font-medium text-sm md:text-base mb-1 transition-colors duration-300",
                  stage.status === 'current' ? "text-emerald-900 font-bold" :
                  stage.status === 'past' ? "text-ink-900" : "text-ink-500 group-hover:text-ink-700"
                )}>{stage.title}</h4>
                <p className="text-xs text-ink-500 max-w-[120px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                  {stage.desc}
                </p>
                
                {/* Current Stage Indicator */}
                {stage.status === 'current' && (
                  <div className="hidden md:flex items-center justify-center space-x-1 mt-2 text-xs font-semibold text-emerald-600 animate-in fade-in slide-in-from-bottom-2">
                    <span>In Progress</span>
                    <ArrowRight size={12} className="animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
