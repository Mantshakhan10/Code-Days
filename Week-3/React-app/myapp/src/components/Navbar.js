function Navbar({ toggleTheme, isDark }) {
  return (
    <nav className="navbar">
      <h2>✨ My Creative Blog ✨</h2>

      <button className="theme-btn" onClick={toggleTheme}>
        {isDark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
