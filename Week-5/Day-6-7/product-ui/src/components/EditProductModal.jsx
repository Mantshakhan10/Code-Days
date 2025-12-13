import { useState } from "react";

export default function EditProductModal({ product, onClose, onUpdate }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const updateHandler = () => {
    onUpdate(product.id, { name, price: Number(price) });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-3xl w-80">
        <h2 className="text-lg font-medium mb-5 text-gray-700">
          Edit Product
        </h2>

        <input
          className="w-full border border-gray-200 p-3 mb-4 rounded-xl focus:ring-2 focus:ring-purple-200 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border border-gray-200 p-3 mb-5 rounded-xl focus:ring-2 focus:ring-purple-200 outline-none"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={updateHandler}
            className="flex-1 bg-[#C6B7E2] text-gray-800 py-2 rounded-xl"
          >
            Update
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
