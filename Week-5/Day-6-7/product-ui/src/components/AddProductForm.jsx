import { useState } from "react";

export default function AddProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onAdd({ name, price: Number(price) });
    setName("");
    setPrice("");
  };

  return (
    <form
      onSubmit={submit}
      className="
        max-w-xl mx-auto
        bg-[#393E46]
        p-8 rounded-2xl shadow-xl
        animate-fadeUp
      "
    >
      <h2 className="text-2xl font-semibold text-[#DFD0B8] mb-6 text-center">
        Add New Product
      </h2>

      <input
        className="
          w-full mb-4 px-4 py-3 rounded-xl
          bg-[#222831] text-[#DFD0B8]
          border border-[#948979]/40
          focus:outline-none focus:border-[#948979]
        "
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        className="
          w-full mb-6 px-4 py-3 rounded-xl
          bg-[#222831] text-[#DFD0B8]
          border border-[#948979]/40
          focus:outline-none focus:border-[#948979]
        "
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        className="
          w-full py-3 rounded-xl font-medium
          bg-[#948979] text-[#222831]
          hover:opacity-90 transition
          active:scale-95
        "
      >
        Add Product
      </button>
    </form>
  );
}
