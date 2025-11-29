import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
    </nav>
  );
}

export default Navbar;
