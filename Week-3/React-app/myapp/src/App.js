import { useState } from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
