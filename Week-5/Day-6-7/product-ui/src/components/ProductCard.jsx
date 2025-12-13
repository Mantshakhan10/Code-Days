import { useState } from "react";

export default function ProductCard({
  product,
  onDelete,
  onUpdate,
  delay,
}) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const save = () => {
    onUpdate(product.id, { name, price });
    setEdit(false);
  };

  return (
    <div
      className="
        bg-[#393E46]
        rounded-2xl p-6 shadow-lg
        hover:-translate-y-2 hover:shadow-2xl
        transition-all duration-300
        animate-scaleIn
      "
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      {!edit ? (
        <>
          <h3 className="text-xl font-semibold text-[#DFD0B8]">
            {product.name}
          </h3>
          <p className="text-[#948979] mt-2 font-medium">
            ₹ {product.price}
          </p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setEdit(true)}
              className="
                flex-1 py-2 rounded-lg
                bg-[#948979] text-[#222831]
                hover:opacity-90 transition
              "
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(product.id)}
              className="
                flex-1 py-2 rounded-lg
                border border-[#948979]
                text-[#DFD0B8]
                hover:bg-[#222831]
                transition
              "
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            className="
              w-full mb-3 px-4 py-2 rounded-lg
              bg-[#222831] text-[#DFD0B8]
              border border-[#948979]/40
            "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            className="
              w-full mb-4 px-4 py-2 rounded-lg
              bg-[#222831] text-[#DFD0B8]
              border border-[#948979]/40
            "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="flex gap-3">
            <button
              onClick={save}
              className="
                flex-1 py-2 rounded-lg
                bg-[#948979] text-[#222831]
              "
            >
              Save
            </button>

            <button
              onClick={() => setEdit(false)}
              className="
                flex-1 py-2 rounded-lg
                border border-[#948979]
                text-[#DFD0B8]
              "
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}
