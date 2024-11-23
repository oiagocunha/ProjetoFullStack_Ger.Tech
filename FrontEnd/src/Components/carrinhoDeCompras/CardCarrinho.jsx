import React, { useState } from 'react';
import './CardCarrinho.css'; // Para a estilização do card

const CardCarrinho = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, img: 'https://i.ibb.co/XZzRvBJ/Layer-1aa-2.png', marca: 'Adidas', nome: 'K-Swiss V8 - Masculino', preco: 300, desconto:250},
    { id: 2, img: 'https://i.ibb.co/XZzRvBJ/Layer-1aa-2.png', marca: 'Adidas', nome: 'K-Swiss V8 - Masculino', preco: 300, desconto:250},  ]);
  
  // ([
  //   { id: 1, img: 'imagem_url', marca: '#', nome: 'nome', preco: "preco_original", desconto:"preco_desconto"},
  //   { i: 2, img: 'imagem_url', marca: '#', nome: 'nome', preco: "preco_original", desconto:"preco_desconto"},
  // ]);
  
  // Função para calcular o valor total
  const calcularTotal = () => {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
  };

  // Função para esvaziar o carrinho
  const esvaziarCarrinho = () => {
    setProdutos([]);
  };

  // Função para ver o carrinho (poderia redirecionar para outra página ou exibir mais detalhes)
  const verCarrinho = () => {
    alert('Verificando carrinho...');
  };

  return (
    <div className="card-carrinho">
      {/* Div Título */}
      <div className="titulo">
        <h2>Meu Carrinho</h2>
      </div>

      {/* Div Produtos */}
      <div className="produtos">
        {produtos.length === 0 ? (
          <p>Seu carrinho está vazio!</p>
        ) : (
          produtos.map((produto) => (
            <div key={produto.id} className="produto">
              <img src={produto.img} alt="Produto" />
              <p>{produto.marca} - {produto.nome} - R${produto.preco} - R${produto.desconto}</p>
            </div>
          ))
        )}
      </div>

      {/* Div Valor Total */}
      <div className="valor-total">
        <h3 className="total">Valor Total: </h3>
        <h3 className="calculo">R${calcularTotal()}</h3>
      </div>

      {/* Div Botões */}
      <div className="botoes">
        <button className="esvaziar" onClick={esvaziarCarrinho}>Esvaziar</button>
        <button className="vizualizar" onClick={verCarrinho}>Ver Carrinho</button>
      </div>
    </div>
  );
};

export default CardCarrinho;
