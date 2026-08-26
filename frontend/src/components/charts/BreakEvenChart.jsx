import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export function BreakEvenChart({ data, investmentValue }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0F7B54" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0F7B54" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFE4CC" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#5B655F' }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#5B655F' }}
            tickFormatter={(value) => `₹${value/1000}k`}
          />
          <Tooltip 
            formatter={(value) => `₹${value.toLocaleString()}`}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -4px rgba(15,70,50,0.12)' }}
          />
          <ReferenceLine y={investmentValue} label={{ position: 'top', value: 'Investment Amount', fill: '#1B2420', fontSize: 12 }} stroke="#C8862E" strokeDasharray="3 3" />
          <Area 
            type="monotone" 
            dataKey="cumulativeReturn" 
            stroke="#0F7B54" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorReturn)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
