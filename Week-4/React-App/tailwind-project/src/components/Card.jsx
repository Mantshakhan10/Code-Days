function Card({ title, text }) {
  return (
    <div className="p-4 shadow-lg rounded-xl bg-white hover:scale-105 transition transform">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

export default Card;
