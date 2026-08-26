import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '../ui/Button';

export function TimelineRoadmap({ currentStage = 1 }) {
  const stages = [
    { id: 1, title: 'Idea & Profiling', desc: 'Identify best business match', status: currentStage > 1 ? 'past' : currentStage === 1 ? 'current' : 'future' },
    { id: 2, title: 'Funding & Setup', desc: 'Apply for schemes & secure capital', status: currentStage > 2 ? 'past' : currentStage === 2 ? 'current' : 'future' },
    { id: 3, title: 'Launch', desc: 'Procure materials & start ops', status: currentStage > 3 ? 'past' : currentStage === 3 ? 'current' : 'future' },
    { id: 4, title: 'Growth', desc: 'Track health & expand market', status: currentStage > 4 ? 'past' : currentStage === 4 ? 'current' : 'future' }
  ];

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-beige-200 -z-10 rounded-full hidden md:block"></div>
        <div 
          className="absolute top-5 left-0 h-1 bg-emerald-600 -z-10 rounded-full hidden md:block transition-all duration-1000"
          style={{ width: `${((currentStage - 1) / (stages.length - 1)) * 100}%` }}
        ></div>

        <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-0">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="flex md:flex-col items-start md:items-center relative z-10 w-full md:w-1/4">
              {/* Vertical connecting line for mobile */}
              {idx !== stages.length - 1 && (
                <div className="md:hidden absolute top-10 left-5 w-1 h-[calc(100%+2rem)] bg-beige-200 -z-10"></div>
              )}
              {idx !== stages.length - 1 && stage.status === 'past' && (
                <div className="md:hidden absolute top-10 left-5 w-1 h-[calc(100%+2rem)] bg-emerald-600 -z-10"></div>
              )}

              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shrink-0 shadow-sm mr-4 md:mr-0 md:mb-4 transition-colors",
                stage.status === 'past' ? "bg-emerald-600 text-white" :
                stage.status === 'current' ? "bg-white border-emerald-600 border-4 text-emerald-600" :
                "bg-beige-200 text-ink-500"
              )}>
                {stage.status === 'past' ? <CheckCircle size={20} /> : <span className="font-bold font-fraunces">{stage.id}</span>}
              </div>
              
              <div className="text-left md:text-center mt-1 md:mt-0">
                <h4 className={cn(
                  "font-medium text-sm md:text-base mb-1",
                  stage.status === 'current' ? "text-emerald-900" :
                  stage.status === 'past' ? "text-ink-900" : "text-ink-500"
                )}>{stage.title}</h4>
                <p className="text-xs text-ink-500 max-w-[120px] mx-auto">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
