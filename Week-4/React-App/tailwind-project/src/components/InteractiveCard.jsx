function InteractiveCard() {
  return (
    <div
      className="
      max-w-sm p-4 rounded-xl shadow-md bg-white
      hover:shadow-xl hover:scale-[1.02]
      transition-all duration-300
    "
    >
      <h3 className="text-xl font-semibold">React Training</h3>

      <p className="text-gray-600 mt-2">
        Learn React with hands-on examples and real projects.
      </p>

      <input
        placeholder="Enter your email"
        className="
        mt-3 border border-gray-300 px-3 py-2 rounded-lg
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
        transition
        w-full
      "
      />

      <button
        className="
        mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg
        hover:bg-blue-600
        active:scale-95
        transition-all duration-300
      "
      >
        Read More
      </button>
    </div>
  );
}

export default InteractiveCard;
