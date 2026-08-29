import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Target, TrendingUp, ChevronRight, Tractor, Wrench, Settings, Search, Cpu, FileText, CheckCircle2, ShieldCheck, Map, Store } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockStories } from '../data/mockStories';
import { useAppState } from '../context/AppStateContext';

export function LandingPage() {
  const previewStories = mockStories.slice(0, 3);
  const { t } = useAppState();

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section id="hero" className="relative overflow-hidden py-20 lg:py-32">
        {/* Rich Earthy Gradient Background with texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-navy-900 to-emerald-950"></div>
        
        {/* Subtle texture overlay (simulating a woven or rustic pattern) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(250,246,236,0.1)_1px,_transparent_1px)] bg-[length:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="text-left">
              {/* Language Prominence */}
              <div className="flex justify-start space-x-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {['English', 'हिन्दी', 'मराठी', 'தமிழ்', 'বাংলা'].map((lang, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium shadow-sm">
                    {lang}
                  </span>
                ))}
              </div>

              <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
                <span className="text-emerald-400">Smart Business Guidance</span> <br className="hidden md:block" />
                for Village Entrepreneurs
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-xl font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                VyaparSetu analyzes your local district to recommend high-demand micro-enterprises and instantly matches you with government subsidies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-200">
                <Link to="/dashboard">
                  <Button size="lg" variant="accent" className="w-full sm:w-auto text-navy-900 hover:text-navy-900 font-semibold px-8 py-4 text-lg">
                    Find My Business Match
                  </Button>
                </Link>
              </div>

              {/* Floating Location Badges */}
              <div className="mt-12 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                 <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 text-white/90 text-sm">
                    <MapPin size={16} className="text-emerald-400" />
                    <span>Active in Jalgaon, MH</span>
                 </div>
                 <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 text-white/90 text-sm">
                    <MapPin size={16} className="text-harvest-400" />
                    <span>Active in Munger, BR</span>
                 </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" alt="Rural Entrepreneur" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
                
                {/* Floating UI Elements on top of image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">AI Recommendation</p>
                      <p className="font-fraunces text-lg text-emerald-900 font-bold">Turmeric Processing Unit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-emerald-950 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-2">
              <p className="text-4xl font-mono font-bold text-emerald-400 mb-1">50+</p>
              <p className="text-sm text-emerald-100 font-medium uppercase tracking-wider">Districts Mapped</p>
            </div>
            <div className="py-2">
              <p className="text-4xl font-mono font-bold text-emerald-400 mb-1">200+</p>
              <p className="text-sm text-emerald-100 font-medium uppercase tracking-wider">Opportunities Identified</p>
            </div>
            <div className="py-2">
              <p className="text-4xl font-mono font-bold text-emerald-400 mb-1">100+</p>
              <p className="text-sm text-emerald-100 font-medium uppercase tracking-wider">Govt Schemes Indexed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Killer Feature USP Banner */}
      <section className="py-12 bg-harvest-50 border-b border-harvest-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-2xl md:text-3xl text-harvest-900 leading-relaxed font-medium">
            Unlike generic business advisors, VyaparSetu analyzes local <span className="text-emerald-700 font-bold">demand</span>, <span className="text-emerald-700 font-bold">competition</span>, <span className="text-emerald-700 font-bold">infrastructure</span>, and <span className="text-emerald-700 font-bold">government schemes</span> before recommending a business.
          </h2>
        </div>
      </section>

      {/* 2. District Intelligence Showcase (Killer Feature) */}
      <section className="py-20 bg-beige-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">Hyper-Local Intelligence</h2>
            <p className="text-ink-500 max-w-2xl mx-auto">We don't give generic advice. We analyze your exact district to find what's missing.</p>
          </div>

          <div className="max-w-4xl mx-auto">
             <Card className="bg-white border-2 border-emerald-100 shadow-xl overflow-hidden p-0 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0"></div>
                <div className="p-8 relative z-10">
                   <div className="flex items-center justify-between mb-8 pb-6 border-b border-beige-200">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                           <MapPin className="text-emerald-600" size={24} />
                           <h3 className="font-fraunces text-2xl font-bold text-emerald-900">Jalgaon, Maharashtra</h3>
                        </div>
                        <p className="text-ink-500 text-sm">Live District Opportunity Profile</p>
                      </div>
                      <div className="text-right">
                         <div className="text-4xl font-mono font-bold text-emerald-600">92<span className="text-xl text-ink-500">/100</span></div>
                         <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mt-1">Opportunity Score</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                         <h4 className="text-sm font-semibold text-ink-900 uppercase tracking-wide mb-4">High Local Demand</h4>
                         <ul className="space-y-3">
                            <li className="flex items-start text-sm text-emerald-800 bg-emerald-50 p-2 rounded-lg">
                               <CheckCircle2 size={16} className="text-emerald-600 mr-2 mt-0.5 shrink-0" />
                               Turmeric Processing Unit
                            </li>
                            <li className="flex items-start text-sm text-emerald-800 bg-emerald-50 p-2 rounded-lg">
                               <CheckCircle2 size={16} className="text-emerald-600 mr-2 mt-0.5 shrink-0" />
                               Dairy Collection Center
                            </li>
                         </ul>
                      </div>
                      <div>
                         <h4 className="text-sm font-semibold text-ink-900 uppercase tracking-wide mb-4">Low Competition</h4>
                         <ul className="space-y-3">
                            <li className="flex items-start text-sm text-harvest-500 bg-orange-50 p-2 rounded-lg">
                               <Target size={16} className="mr-2 mt-0.5 shrink-0" />
                               Solar Pump Repair Services
                            </li>
                         </ul>
                      </div>
                      <div>
                         <h4 className="text-sm font-semibold text-ink-900 uppercase tracking-wide mb-4">Active Subsidies</h4>
                         <ul className="space-y-3">
                            <li className="flex items-start text-sm text-navy-900 bg-blue-50 p-2 rounded-lg border border-blue-100">
                               <ShieldCheck size={16} className="text-blue-600 mr-2 mt-0.5 shrink-0" />
                               PMEGP (Upto ₹50L)
                            </li>
                            <li className="flex items-start text-sm text-navy-900 bg-blue-50 p-2 rounded-lg border border-blue-100">
                               <ShieldCheck size={16} className="text-blue-600 mr-2 mt-0.5 shrink-0" />
                               PMFME (35% Subsidy)
                            </li>
                         </ul>
                      </div>
                   </div>
                </div>
             </Card>
          </div>
        </div>
      </section>

      {/* 3. "How VyaparSetu Decides" Workflow */}
      <section className="py-20 bg-white border-y border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">How VyaparSetu Decides</h2>
            <p className="text-ink-500 max-w-2xl mx-auto">Our transparent AI maps your profile against real-world data.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-5xl mx-auto">
             
             <div className="flex-1 text-center w-full">
                <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 border-2 border-emerald-100 shadow-sm">
                   <Settings size={28} />
                </div>
                <h4 className="font-semibold text-emerald-900 mb-2">1. Your Profile</h4>
                <p className="text-xs text-ink-500 px-4">We analyze your budget, existing assets (e.g. Tractor), and skills.</p>
             </div>

             <div className="hidden md:block h-0.5 w-16 bg-beige-200"></div>

             <div className="flex-1 text-center w-full">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 border-2 border-blue-100 shadow-sm">
                   <Map size={28} />
                </div>
                <h4 className="font-semibold text-emerald-900 mb-2">2. District Data</h4>
                <p className="text-xs text-ink-500 px-4">We map local crop yields, population density, and missing services.</p>
             </div>

             <div className="hidden md:block h-0.5 w-16 bg-beige-200"></div>

             <div className="flex-1 text-center w-full">
                <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 border-2 border-purple-100 shadow-sm">
                   <Cpu size={28} />
                </div>
                <h4 className="font-semibold text-emerald-900 mb-2">3. AI Analysis</h4>
                <p className="text-xs text-ink-500 px-4">Our engine calculates profitability, risk, and scheme eligibility.</p>
             </div>

             <div className="hidden md:block h-0.5 w-16 bg-beige-200"></div>

             <div className="flex-1 text-center w-full">
                <div className="w-16 h-16 mx-auto bg-harvest-50 text-harvest-500 rounded-full flex items-center justify-center mb-4 border-2 border-harvest-200 shadow-sm">
                   <FileText size={28} />
                </div>
                <h4 className="font-semibold text-emerald-900 mb-2">4. Recommendation</h4>
                <p className="text-xs text-ink-500 px-4">You get a highly targeted, profitable business blueprint.</p>
             </div>

          </div>
        </div>
      </section>

      {/* 4. Rural Features Grid */}
      <section id="features" className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">Empowering Every Micro-Enterprise</h2>
            <p className="text-ink-500 max-w-2xl mx-auto">We support the entire village economy—from agriculture to retail and services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Dairy Collection Center', category: 'Agriculture & Allied', icon: '🥛', color: 'bg-blue-50 text-blue-600' },
              { title: 'Tailoring & Garment Unit', category: 'Manufacturing', icon: '🧵', color: 'bg-pink-50 text-pink-600' },
              { title: 'Mobile Repair Shop', category: 'Services', icon: '📱', color: 'bg-indigo-50 text-indigo-600' },
              { title: 'Spice Processing Unit', category: 'Food Processing', icon: '🌶️', color: 'bg-red-50 text-red-600' },
              { title: 'Custom Hiring Center', category: 'Agri-Services', icon: '🚜', color: 'bg-emerald-50 text-emerald-600' },
              { title: 'Solar Pump Service Center', category: 'Green Energy', icon: '🔧', color: 'bg-orange-50 text-orange-600' }
            ].map((biz, idx) => (
              <Card key={idx} className="h-full bg-white border border-beige-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${biz.color}`}>
                    {biz.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink-500 uppercase tracking-wide mb-1">{biz.category}</p>
                    <h3 className="font-fraunces text-lg text-emerald-900 font-medium">{biz.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/explorer">
               <Button variant="outline" className="px-8 bg-white border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                 Explore Opportunity Map
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* 5. Government Schemes Showcase */}
      <section id="schemes" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(250,246,236,0.15)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="font-fraunces text-3xl md:text-4xl mb-4 text-white">Unlock Government Subsidies</h2>
             <p className="text-emerald-100 max-w-2xl mx-auto">VyaparSetu auto-matches your profile with state and central schemes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {[
                { name: 'PMEGP', desc: 'Prime Minister Employment Generation Programme', limit: 'Upto ₹50 Lakhs', benefit: '35% Rural Subsidy' },
                { name: 'PMFME', desc: 'Micro Food Processing Enterprises Scheme', limit: 'Upto ₹10 Lakhs', benefit: 'Credit-linked Subsidy' },
                { name: 'MUDRA', desc: 'Pradhan Mantri Mudra Yojana for Micro Units', limit: 'Upto ₹10 Lakhs', benefit: 'Collateral-free Loan' }
             ].map((scheme, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                   <h3 className="text-2xl font-fraunces font-bold text-emerald-400 mb-1">{scheme.name}</h3>
                   <p className="text-sm text-emerald-100 mb-6 h-10">{scheme.desc}</p>
                   
                   <div className="space-y-3 border-t border-white/20 pt-4">
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-emerald-100">Max Loan</span>
                         <span className="font-mono font-medium text-white">{scheme.limit}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-emerald-100">Key Benefit</span>
                         <span className="font-medium text-harvest-400">{scheme.benefit}</span>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="text-center">
            <Link to="/schemes">
              <Button variant="accent" size="lg" className="px-8 text-navy-900">Check Your Eligibility</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Success Stories */}
      <section id="success-stories" className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">Real Rural Success</h2>
              <p className="text-ink-500 max-w-2xl">Entrepreneurs who built their dreams using VyaparSetu.</p>
            </div>
            <Link to="/success-stories" className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
              See all stories <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewStories.map((story) => (
              <Card key={story.id} className="p-0 overflow-hidden flex flex-col bg-white border border-beige-200">
                <div className="h-56 overflow-hidden relative">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-fraunces text-xl font-medium">{story.name}</p>
                    <p className="text-sm text-harvest-400 font-medium">{story.village}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-ink-900 italic mb-6 leading-relaxed flex-1">"{story.story}"</p>
                  <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">{story.growthMetric.label}</p>
                    <div className="flex items-center space-x-3 font-mono text-emerald-900">
                      <span className="line-through opacity-60 text-sm">{story.growthMetric.before}</span>
                      <span className="text-emerald-600 font-bold">→</span>
                      <span className="text-lg font-bold text-emerald-700">{story.growthMetric.after}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/success-stories">
              <Button variant="outline" className="w-full">See all stories</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
