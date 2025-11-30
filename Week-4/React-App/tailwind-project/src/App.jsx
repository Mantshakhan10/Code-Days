import Navbar from "./components/Navbar";
import PrimaryButton from "./components/PrimaryButton";
import CardsGrid from "./components/CardsGrid";
import InteractiveCard from "./components/InteractiveCard";
import ProfessionalCards from "./components/ProfessionalCards";


function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto mt-8 px-4">

        {/* Page title */}
        <h1 className="text-primary text-4xl font-extrabold text-center mb-10">
          Tailwind React Mini Tasks
        </h1>

        {/* Task 1: Button demo */}
        <section className="text-center mb-12">
          <p className="mb-4 text-gray-700">
            This project demonstrates interactive UI elements built with Tailwind CSS.
          </p>
          <PrimaryButton>Click Me</PrimaryButton>
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
        <ProfessionalCards />

      </main>
    </div>
    
  );
}

export default App;
