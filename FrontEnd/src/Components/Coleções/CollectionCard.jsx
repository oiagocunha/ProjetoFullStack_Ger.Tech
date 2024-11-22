import React from "react";
import "./CollectionCard.css";

// Importando imagens locais
import SupremeImg from "../../assets/Images/collection-1.png";
import AdidasImg from "../../assets/Images/collection-2.png";
import BeatsImg from "../../assets/Images/collection-3.png";

function CollectionCard() {
  const collections = [
    {
      title: "Novo drop Supreme",
      imgSrc: SupremeImg,
    },
    {
      title: "Coleção Adidas",
      imgSrc: AdidasImg,
    },
    {
      title: "Novo Beats Bass",
      imgSrc: BeatsImg,
    },
  ];

  return (
    <div className="rootCards">
      <h2 className="titleCollection">Coleções em destaque</h2>
      
      <div className="row">
        {collections.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card collection-card">
              

              <div>
                <div>
                  <span className="badge discount">30% OFF</span>
                  <button className="btn">Comprar</button>
                </div>

                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="card-img"
                />
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionCard;
