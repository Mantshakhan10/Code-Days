import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { dark } = useTheme();

  return (
    <aside
      className={
        "hidden md:flex md:flex-col md:w-64 p-6 border-r " +
        (dark
          ? "bg-slate-950/60 border-slate-800"
          : "bg-white border-slate-200 shadow-sm")
      }
    >
      <h2 className="text-2xl font-bold mb-6 bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-3 text-sm font-medium">
        <Link className="hover:text-indigo-500 transition" to="/">
          Dashboard
        </Link>
        <Link className="hover:text-indigo-500 transition" to="/users">
          Users
        </Link>
        <Link className="hover:text-indigo-500 transition" to="/reports">
          Reports
        </Link>
        <Link className="hover:text-indigo-500 transition" to="/settings">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
