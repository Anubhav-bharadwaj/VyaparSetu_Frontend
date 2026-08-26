export const mockRecommendations = [
  {
    id: "rec-1",
    title: "Organic Dairy Farming",
    category: "Dairy",
    opportunityScore: 92,
    riskScore: 25,
    profitabilityEstimate: "₹25,000–35,000/month",
    demandTrend: [
      { month: "Jan", demand: 40 },
      { month: "Feb", demand: 50 },
      { month: "Mar", demand: 55 },
      { month: "Apr", demand: 70 },
      { month: "May", demand: 85 },
      { month: "Jun", demand: 90 },
    ],
    description: "High demand for organic A2 milk in nearby tier-2 cities. Low competition in your immediate 15km radius. Existing government subsidies available for indigenous breeds.",
    icon: "milk", // We will map these string names to Lucide icons in the component
    swot: {
      strengths: ["High local demand", "Government subsidy available", "Existing land can be utilized"],
      weaknesses: ["High initial capital requirement", "Requires specialized veterinary care"],
      opportunities: ["Direct-to-consumer subscription model", "Value-added products (Ghee, Paneer)"],
      threats: ["Disease outbreaks in livestock", "Fluctuating fodder prices"]
    }
  },
  {
    id: "rec-2",
    title: "Agri-Equipment Rental Hub",
    category: "Equipment Rental",
    opportunityScore: 88,
    riskScore: 40,
    profitabilityEstimate: "₹30,000–45,000/month",
    demandTrend: [
      { month: "Jan", demand: 30 },
      { month: "Feb", demand: 35 },
      { month: "Mar", demand: 45 },
      { month: "Apr", demand: 60 },
      { month: "May", demand: 80 },
      { month: "Jun", demand: 85 },
    ],
    description: "Most small-hold farmers in your cluster rent tractors from 30km away. Setting up a localized micro-rental for weeders, sprayers, and small tractors has high ROI.",
    icon: "tractor",
    swot: {
      strengths: ["Low recurring costs", "High seasonal demand", "First-mover advantage in local cluster"],
      weaknesses: ["High maintenance costs", "Seasonal revenue dips"],
      opportunities: ["Expand to modern drone spraying", "Partner with local farming cooperatives"],
      threats: ["Equipment breakdown during peak season", "Larger competitors entering the market"]
    }
  },
  {
    id: "rec-3",
    title: "Mushroom Cultivation",
    category: "Farming",
    opportunityScore: 75,
    riskScore: 60,
    profitabilityEstimate: "₹15,000–22,000/month",
    demandTrend: [
      { month: "Jan", demand: 60 },
      { month: "Feb", demand: 65 },
      { month: "Mar", demand: 62 },
      { month: "Apr", demand: 58 },
      { month: "May", demand: 65 },
      { month: "Jun", demand: 75 },
    ],
    description: "Requires very little space and minimal water. High margin crop, but requires establishing supply chain with local restaurants or aggregators.",
    icon: "leaf",
    swot: {
      strengths: ["Low space requirement", "High profit margins", "Short harvest cycle"],
      weaknesses: ["Requires temperature control", "Highly perishable product"],
      opportunities: ["Tie-ups with urban supermarkets", "Export potential for dried mushrooms"],
      threats: ["Pest and fungal diseases", "Market price volatility"]
    }
  }
];
