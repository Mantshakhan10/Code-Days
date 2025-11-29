import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Yahi div theme change karega */}
      <div className={`app ${theme}`}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
