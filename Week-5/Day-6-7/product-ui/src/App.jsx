import { useEffect, useState } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./services/api";
import AddProductForm from "./components/AddProductForm";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data || res);
  };

  return (
    <div className="min-h-screen px-6">
      {/* Header */}
      <header className="text-center py-12 animate-fadeUp">
        <h1 className="text-4xl font-bold text-[#DFD0B8] tracking-wide">
             🛒 Product Manager
        </h1>
        <p className="text-[#948979] mt-2">
           Manage products smoothly
        </p>
      </header>

      {/* Add product */}
      <AddProductForm
        onAdd={async (data) => {
          await addProduct(data);
          loadProducts();
        }}
      />

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            delay={index}
            onDelete={async (id) => {
              await deleteProduct(id);
              loadProducts();
            }}
            onUpdate={async (id, data) => {
              await updateProduct(id, data);
              loadProducts();
            }}
          />
        ))}
      </div>
    </div>
  );
}
