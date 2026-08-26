import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { DashboardShell } from '../components/layout/DashboardShell';
import { LandingPage } from '../pages/LandingPage';
import { DashboardPage } from '../pages/DashboardPage';
import { OpportunityExplorerPage } from '../pages/OpportunityExplorerPage';
import { FinancialAssistantPage } from '../pages/FinancialAssistantPage';
import { GovernmentSchemesPage } from '../pages/GovernmentSchemesPage';

import { BusinessReportPage } from '../pages/BusinessReportPage';
import { SuccessStoriesPage } from '../pages/SuccessStoriesPage';
import { ProfilePage } from '../pages/ProfilePage';

export function AppRouter() {
  return (
    <Routes>
      {/* Marketing Pages wrapped in PageShell */}
      <Route element={<PageShell />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* App Pages wrapped in DashboardShell */}
      <Route element={<DashboardShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/explorer" element={<OpportunityExplorerPage />} />
        <Route path="/financial-assistant" element={<FinancialAssistantPage />} />
        <Route path="/schemes" element={<GovernmentSchemesPage />} />

        <Route path="/report" element={<BusinessReportPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
