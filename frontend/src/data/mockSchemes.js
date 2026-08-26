export const mockSchemes = [
  {
    id: "scheme-1",
    name: "PMEGP",
    fullName: "Prime Minister's Employment Generation Programme",
    eligibility: [
      "Any individual above 18 years of age",
      "Passed at least VIII standard for projects above ₹10L (mfg) or ₹5L (service)",
      "New projects only (existing units not eligible)"
    ],
    benefits: [
      "Margin money subsidy of 25% (urban) or 35% (rural) for special categories",
      "Subsidy of 15% (urban) or 25% (rural) for general category",
      "Bank loan covers the rest (up to 95%)"
    ],
    applyUrl: "https://www.kviconline.gov.in/pmegpeportal/",
    tags: ["Grant", "Rural", "Manufacturing", "Services"]
  },
  {
    id: "scheme-2",
    name: "MUDRA (Kishor)",
    fullName: "Pradhan Mantri MUDRA Yojana",
    eligibility: [
      "Non-Corporate Small Business Segment (NCSBS)",
      "Proprietorship/Partnership firms running small manufacturing or service units",
      "Loan requirement between ₹50,000 and ₹5,00,000"
    ],
    benefits: [
      "Collateral-free loans",
      "Affordable interest rates",
      "Flexible repayment options"
    ],
    applyUrl: "https://www.mudra.org.in/",
    tags: ["Loan", "All Categories", "Micro-enterprise"]
  },
  {
    id: "scheme-3",
    name: "Stand-Up India",
    fullName: "Stand-Up India Scheme for Financing SC/ST and/or Women Entrepreneurs",
    eligibility: [
      "SC/ST and/or woman entrepreneur above 18 years of age",
      "Greenfield enterprise in manufacturing, services or trading sector",
      "Non-individual enterprises must have 51% shareholding by SC/ST or woman entrepreneur"
    ],
    benefits: [
      "Composite loan between ₹10 Lakh and ₹1 Crore",
      "Covers up to 85% of the project cost",
      "Rupay debit card for working capital drawal"
    ],
    applyUrl: "https://www.standupmitra.in/",
    tags: ["Loan", "Women-focused", "SC/ST", "Large Ticket"]
  },
  {
    id: "scheme-4",
    name: "AIF",
    fullName: "Agriculture Infrastructure Fund",
    eligibility: [
      "Primary Agricultural Credit Societies (PACS)",
      "Marketing Cooperative Societies",
      "Farmer Producers Organizations (FPOs)",
      "Individual Farmers / Entrepreneurs"
    ],
    benefits: [
      "Interest subvention of 3% per annum up to ₹2 Crore",
      "Credit guarantee coverage under CGTMSE",
      "Cap on lending rate"
    ],
    applyUrl: "https://agriinfra.dac.gov.in/",
    tags: ["Loan", "Agriculture", "Infrastructure"]
  }
];
