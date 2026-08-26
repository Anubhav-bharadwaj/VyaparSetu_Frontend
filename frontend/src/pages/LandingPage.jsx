import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Target, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockStories } from '../data/mockStories';
import { useAppState } from '../context/AppStateContext';

export function LandingPage() {
  const previewStories = mockStories.slice(0, 3);
  const { t } = useAppState();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev >= 4 ? 1 : prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="hero" className="relative bg-navy-900 overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-node-network-dark opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
            {t.heroHeadline ? (
              <span className="text-emerald-400">{t.heroHeadline}</span>
            ) : (
              <>
                AI-Powered Business Guidance <br className="hidden md:block" />
                <span className="text-emerald-400">for Rural Entrepreneurs</span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-beige-200 mb-10 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Discover hyper-local opportunities, build financial roadmaps, and access government schemes with data-driven AI assistance tailored for your village.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-200">
            <Link to="/dashboard">
              <Button size="lg" variant="accent" className="w-full sm:w-auto text-navy-900 hover:text-navy-900 font-semibold px-8 py-4">
                {t.btnGetStarted || 'Get Started'}
              </Button>
            </Link>
            <Link to="/explorer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4">
                {t.btnExplore || 'Explore Opportunities'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">Everything You Need to Grow</h2>
            <p className="text-ink-500 max-w-2xl mx-auto">VyaparSetu brings enterprise-level business intelligence to micro-entrepreneurs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'AI Business Advisor', desc: 'Get personalized business ideas based on your budget and location.', icon: Sparkles, path: '/dashboard' },
              { title: 'Opportunity Explorer', desc: 'Interactive heatmap of high-demand business needs in your cluster.', icon: MapPin, path: '/explorer' },
              { title: 'Financial Assistant', desc: 'Calculate ROI, break-even timelines, and plan your capital.', icon: TrendingUp, path: '/financial-assistant' },
              { title: 'Government Schemes', desc: 'Auto-match with Mudra, PMEGP, and other subsidies you qualify for.', icon: Target, path: '/schemes' },
              { title: 'Business Health', desc: 'Track your readiness score and operational KPIs in real-time.', icon: TrendingUp, path: '/business-health' },
              { title: 'Smart Reporting', desc: 'Generate complete PDF business reports for loan applications.', icon: Target, path: '/report' }
            ].map((feature, idx) => (
              <Link key={idx} to={feature.path}>
                <Card className="h-full hover:border-emerald-600 transition-colors group cursor-pointer bg-white">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-fraunces text-xl text-emerald-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-ink-500">{feature.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Stepper */}
      <section id="how-it-works" className="py-20 bg-white border-y border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-16 text-center">How VyaparSetu Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-beige-200 z-0"></div>
            {/* Animated progress bar */}
            <div 
              className="hidden md:block absolute top-12 left-0 h-0.5 bg-emerald-600 z-0 transition-all duration-1000 ease-in-out"
              style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            ></div>
            
            {[
              { step: 1, title: 'Tell us about your business' },
              { step: 2, title: 'Get AI recommendations' },
              { step: 3, title: 'Build your financial plan' },
              { step: 4, title: 'Track your growth' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl font-fraunces font-bold mb-6 shadow-sm transition-all duration-700 ${item.step <= activeStep ? 'bg-emerald-600 border-emerald-600 text-white scale-110' : 'bg-white border-beige-200 text-emerald-600 scale-100'}`}>
                  {item.step}
                </div>
                <h4 className={`font-medium text-lg transition-colors duration-700 ${item.step <= activeStep ? 'text-emerald-900 font-bold' : 'text-ink-500'}`}>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel Preview */}
      <section id="success-stories" className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-fraunces text-3xl md:text-4xl text-emerald-900 mb-4">Success Stories</h2>
              <p className="text-ink-500 max-w-2xl">Real rural entrepreneurs growing their businesses.</p>
            </div>
            <Link to="/success-stories" className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
              See all stories <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewStories.map((story) => (
              <Card key={story.id} className="p-0 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-fraunces text-lg font-medium">{story.name}</p>
                    <p className="text-sm opacity-90">{story.village}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-ink-900 italic mb-4 flex-1">"{story.story}"</p>
                  <div className="bg-emerald-50 p-3 rounded-xl">
                    <p className="text-xs text-ink-500 mb-1">{story.growthMetric.label}</p>
                    <div className="flex items-center space-x-2 font-mono text-emerald-900 font-bold">
                      <span className="line-through opacity-50">{story.growthMetric.before}</span>
                      <span>→</span>
                      <span className="text-emerald-600">{story.growthMetric.after}</span>
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

      {/* Schemes Teaser */}
      <section id="schemes" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-node-network-dark opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-fraunces text-3xl md:text-4xl mb-8">Backed by Government Initiatives</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {['PMEGP', 'MUDRA Yojana', 'NABARD', 'Startup India'].map(scheme => (
              <div key={scheme} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 font-medium">
                {scheme}
              </div>
            ))}
          </div>
          <Link to="/schemes">
            <Button variant="accent" size="lg">Explore Government Schemes</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
