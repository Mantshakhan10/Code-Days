import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import PrimaryButton from "./components/PrimaryButton";
import CardsGrid from "./components/CardsGrid";
import InteractiveCard from "./components/InteractiveCard";
import ProfessionalCards from "./components/ProfessionalCards";
import Timer from "./components/Timer";

// Lazy Loading About Component
const About = lazy(() => import("./pages/About"));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  console.log("App rendered");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto mt-8 px-4">

        {/* Page title */}
        <h1 className="text-primary text-4xl font-extrabold text-center mb-10">
          Tailwind React Mini Tasks + Performance Optimization
        </h1>

        {/* Task 1: Tailwind Button demo */}
        <section className="text-center mb-12">
          <p className="mb-4 text-gray-700">
            This project demonstrates interactive UI, memo rendering, and lazy loading.
          </p>
          <PrimaryButton>Click Me</PrimaryButton>
        </section>

        {/* Task: Performance Optimization - Timer + React.memo child */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Timer & Memo Demo</h2>
          <Timer />

          <button
            onClick={() => setShowAbout(prev => !prev)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {showAbout ? "Hide About Page" : "Load About Page (Lazy)"}
          </button>

          {/* Lazy loaded area */}
          {showAbout && (
            <Suspense fallback={<p className="mt-4">Loading...</p>}>
              <About />
            </Suspense>
          )}
        </section>

        {/* Task 2: Interactive Card */}
        <section className="flex justify-center mb-12">
          <InteractiveCard />
        </section>

        {/* Task 3: Cards Grid */}
        <section className="mb-12">
          <CardsGrid />
        </section>

        {/* Explore button using Custom Palette */}
        <div className="flex justify-center mt-6">
          <button className="bg-secondary text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">
            Explore More
          </button>
        </div>

        {/* Professional service cards */}
        <ProfessionalCards />

      </main>
    </div>
  );
}

export default App;
