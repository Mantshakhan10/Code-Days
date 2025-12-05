import { useTheme } from "../context/ThemeContext";

export default function Card({ title, value, color }) {
  const { dark } = useTheme();

  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg " +
        (dark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-100")
      }
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${color}`} />

      <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h2>
      <p className="mt-3 text-2xl font-bold">{value}</p>
    </div>
  );
}
