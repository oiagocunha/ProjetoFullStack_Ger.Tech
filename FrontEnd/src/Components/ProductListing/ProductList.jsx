import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ size }) => {
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api-store-do1w.onrender.com/shoes");
        if (!response.ok) {
          throw new Error("Erro ao buscar os produtos");
        }
        const data = await response.json();
        setProdutos(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  const displaySize = typeof size === "number" && size > 0 ? size : produtos.length;

  return (
    <div className="container">
      {error ? (
        <p>{error}</p>
      ) : (
        produtos.slice(0, displaySize).map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))
      )}
    </div>
  );
};

export default ProductList;
