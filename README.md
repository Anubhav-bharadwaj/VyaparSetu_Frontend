# 🌱 VyaparSetu Frontend

> **AI-Driven Hyper-Local Business Advisory & Financial Structuring Assistant for Rural Entrepreneurs.**
>
> Built for the Smart India Hackathon (SIH26091).

VyaparSetu empowers rural micro-entrepreneurs by bridging the information gap. This application provides data-driven, hyper-local business recommendations, interactive demand maps, automated financial planning, and seamless matching with government schemes—all accessible through an intuitive multilingual interface.

---

## ✨ Key Features

- 🤖 **AI Business Advisor:** Get personalized business recommendations based on user profiles, local budgets, and geographic constraints.
- 🗺️ **Opportunity Explorer:** An interactive geographic map (powered by Leaflet) featuring a hyper-local demand heatmap and custom categorical markers for the Jalgaon region.
- 📈 **Business Health Dashboard:** Real-time tracking of operational KPIs, revenue growth trends, and overall business readiness scores.
- 🗣️ **Multilingual Voice Assistant:** A floating chat widget with **Web Speech API** integration, allowing rural users to interact with the platform using their voice in local languages (English, Hindi, Marathi, Tamil, Bengali).
- 💰 **Financial Planner & Schemes:** Interactive calculators for ROI and break-even analysis, alongside smart filtering for government subsidies like MUDRA and PMEGP.

---

## 🛠️ Tech Stack

This frontend is built with modern, high-performance web technologies:

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS (v3.4.17)](https://tailwindcss.com/) for rapid UI development and custom animations.
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Data Visualization:** [Recharts](https://recharts.org/) for dynamic KPI and financial trend graphs.
- **Maps:** [React-Leaflet](https://react-leaflet.js.org/) and OpenStreetMap for interactive geospatial data.
- **Icons:** [Lucide React](https://lucide.dev/)
- **Speech-to-Text:** Native browser `webkitSpeechRecognition` API.

---

## 🚀 Getting Started

Follow these steps to run the VyaparSetu frontend on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

### Installation

1. **Clone the repository** (or navigate to the frontend directory):
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the App:**
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### Production Build

To create an optimized production bundle (e.g., for Vercel deployment):
```bash
npm run build
```
The compiled assets will be placed in the `dist` directory.

---

## 🎨 Design Philosophy

VyaparSetu was designed with a focus on **trust, clarity, and accessibility**:
- **Color Palette:** Calming emerald greens (`#0F7B54`) and deep navys (`#132A36`) combined with warm beige backgrounds (`#F5F0E6`) create an institutional yet approachable aesthetic.
- **Typography:** *Fraunces* for distinguished, readable headings and *Inter* for clean data presentation.
- **Micro-interactions:** Subtle hover states, animated steppers, and pulsing map markers keep the user engaged without being overwhelming.

---

*Note: This is a standalone frontend prototype built to explore and validate the UI/UX requirements for VyaparSetu before full-scale development.*
