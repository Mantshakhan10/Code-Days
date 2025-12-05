import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header
      className={
        "flex items-center justify-between px-6 py-4 border-b backdrop-blur " +
        (dark
          ? "bg-slate-900/80 border-slate-800"
          : "bg-white/80 border-slate-200 shadow-sm")
      }
    >
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-400">
          Admin Dashboard
        </p>
        <h1 className="text-xl font-semibold">
          {dark ? "Night Mode View" : "Overview"}
        </h1>
      </div>

      <button
        onClick={toggleTheme}
        className={
          "px-4 py-2 rounded-full text-sm font-medium shadow-sm transition " +
          (dark
            ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
            : "bg-slate-900 text-slate-50 hover:bg-slate-800")
        }
      >
        {dark ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
      </button>
    </header>
  );
}
