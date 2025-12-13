import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        // backend may return { data: [...] } or direct array
        setProducts(data.data || data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading products...
      </p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-2">
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
