import React from "react";
import "./ProductCard.css";

const ProductCard = ({ produto }) => {
  const desconto = Math.round(
    ((produto.preco_original - produto.preco_desconto) / produto.preco_original) * 100
  );

  return (
    <div className="product-card">
      {/* Badge de desconto */}
      {desconto > 0 && <div className="discount-badge">{desconto}% OFF</div>}

      {/* Imagem do produto */}
      <img src={produto.imagem_url} alt={produto.nome} className="product-image" />

      {/* Detalhes do produto */}
      <div className="product-info">
        <span className="product-category">Tênis</span>
        <h3 className="product-name">{produto.nome}</h3>
        <div className="product-pricing">
          <span className="original-price">R$ {produto.preco_original}</span>
          <span className="discount-price">R$ {produto.preco_desconto}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
