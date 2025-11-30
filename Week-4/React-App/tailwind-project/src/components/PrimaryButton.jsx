function PrimaryButton({ children }) {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition">
      {children}
    </button>
  );
}

export default PrimaryButton;
