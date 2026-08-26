export const mockFinancials = {
  capitalRequired: "₹2,50,000",
  loanRecommendation: {
    amount: "₹2,00,000",
    scheme: "PMEGP (Prime Minister's Employment Generation Programme)",
    interestRate: "5-7% subsidized"
  },
  roiEstimate: "45%",
  breakEvenMonths: 14,
  healthMeter: {
    financial: 72,
    market: 88,
    skill: 65
  },
  expenseBreakdown: [
    { label: "Equipment Setup", value: 120000 },
    { label: "Raw Materials", value: 50000 },
    { label: "Working Capital", value: 60000 },
    { label: "Marketing/Transport", value: 20000 }
  ],
  fundingMatches: [
    {
      scheme: "MUDRA Yojana (Kishor)",
      matchPercent: 95,
      reason: "Matches your budget range (₹50k-₹5L) and business category perfectly."
    },
    {
      scheme: "PMEGP",
      matchPercent: 88,
      reason: "Good fit for rural manufacturing/services. High subsidy available."
    },
    {
      scheme: "Stand-Up India",
      matchPercent: 65,
      reason: "Applicable if you are a woman entrepreneur or SC/ST."
    }
  ]
};
