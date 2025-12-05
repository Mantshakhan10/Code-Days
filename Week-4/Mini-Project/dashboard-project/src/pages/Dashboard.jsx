import Card from "../components/Card";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { dark } = useTheme();

  const stats = [
    { title: "Total Users", value: "1,250", color: "bg-indigo-500" },
    { title: "Orders Today", value: "78", color: "bg-emerald-500" },
    { title: "Revenue", value: "₹8,900", color: "bg-amber-400" },
    { title: "Pending Reports", value: "14", color: "bg-rose-500" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Card key={s.title} title={s.title} value={s.value} color={s.color} />
        ))}
      </div>

      <div
        className={
          "mt-10 rounded-2xl border p-6 flex items-center justify-between " +
          (dark
            ? "bg-slate-900 border-slate-700"
            : "bg-linear-to-r from-sky-500/10 via-emerald-500/10 to-indigo-500/10 border-slate-200")
        }
      >
        <div>
          <h3 className="text-lg font-semibold mb-1">Revenue Trends</h3>
          <p className="text-sm text-slate-500">
            Simple placeholder for future charts or graphs.
          </p>
        </div>
        <div className="w-40 h-20 rounded-xl bg-slate-800/10 border border-dashed border-slate-400 flex items-center justify-center text-xs text-slate-500">
          Chart Placeholder
        </div>
      </div>
    </div>
  );
}
