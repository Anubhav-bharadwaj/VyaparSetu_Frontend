import React, { useState } from 'react';
import { cn } from './Button';

export function Tabs({ tabs, className }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex space-x-1 rounded-xl bg-beige-200 p-1">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-emerald-600 ring-white ring-opacity-60",
              activeTab === idx
                ? "bg-white shadow text-emerald-900"
                : "text-ink-500 hover:bg-white/[0.12] hover:text-ink-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-xl bg-white p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-emerald-600 ring-white ring-opacity-60",
              activeTab === idx ? "block" : "hidden"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
