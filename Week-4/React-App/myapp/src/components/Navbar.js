import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="nav">
      <h1 className="logo">React Router Demo</h1>

      <div className="links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/post/1"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Sample Post
        </NavLink>
      </div>

      {/* Dark/Light Theme Toggle Button */}
      <button
        className="theme-toggle-btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
