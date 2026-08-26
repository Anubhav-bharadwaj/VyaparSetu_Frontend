import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Map, PieChart, Landmark, Activity, FileText, Users, User, LogOut } from 'lucide-react';
import { cn } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Map, label: 'Explorer', path: '/explorer' },
  { icon: PieChart, label: 'Financial', path: '/financial-assistant' },
  { icon: Landmark, label: 'Schemes', path: '/schemes' },

  { icon: FileText, label: 'Report', path: '/report' },
  { icon: Users, label: 'Stories', path: '/success-stories' },
  { icon: User, label: 'Profile', path: '/profile' }
];

export function DashboardShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-beige-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-beige-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-beige-200">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-600/20">
              <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
            </div>
            <span className="font-fraunces text-xl font-bold text-emerald-900">VyaparSetu</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-emerald-50 text-emerald-600" 
                    : "text-ink-500 hover:bg-beige-200 hover:text-ink-900"
                )}
              >
                <Icon size={20} className={cn("mr-3", isActive ? "text-emerald-600" : "text-ink-500")} />
                {item.label}
              </Link>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-beige-200">
          <div className="flex items-center mb-4">
             <LanguageSwitcher className="w-full" direction="up" />
          </div>
          <Link to="/" className="flex items-center px-3 py-2.5 text-sm font-medium text-danger hover:bg-red-50 rounded-xl transition-colors">
            <LogOut size={20} className="mr-3" />
            Exit Dashboard
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b border-beige-200 flex items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
            </div>
            <span className="font-fraunces text-xl font-bold text-emerald-900">VyaparSetu</span>
          </Link>
          <LanguageSwitcher />
        </header>
        
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
