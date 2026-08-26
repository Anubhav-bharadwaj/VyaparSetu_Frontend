import React, { createContext, useContext, useState, useEffect } from 'react';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [userProfile, setUserProfile] = useState({
    name: "Rajesh Kumar",
    age: "",
    gender: "",
    mobile: "",
    village: "Jalgaon",
    district: "Jalgaon",
    state: "MH",
    occupation: "",
    existingBusiness: "no",
    businessType: "",
    experience: "",
    employees: "",
    budget: 50000,
    incomeRange: "",
    loanRequired: "no",
    existingLoans: "no",
    language: "en",
    goals: [],
    skills: [],
    assets: []
  });

  const [hasCompletedAdvisor, setHasCompletedAdvisor] = useState(false);
  const [t, setT] = useState({});

  useEffect(() => {
    fetch(`/locales/${userProfile.language}.json`)
      .then(res => res.json())
      .then(data => setT(data))
      .catch(err => console.error('Failed to load translations', err));
  }, [userProfile.language]);

  const updateProfile = (updates) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const changeLanguage = (langCode) => {
    updateProfile({ language: langCode });
  };

  return (
    <AppStateContext.Provider value={{ userProfile, updateProfile, hasCompletedAdvisor, setHasCompletedAdvisor, t, changeLanguage }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error("useAppState must be used within AppStateProvider");
  return context;
}
