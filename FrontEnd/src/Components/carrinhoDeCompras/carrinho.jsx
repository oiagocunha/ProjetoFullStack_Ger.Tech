import React, { useState, useCallback } from 'react';

const CartIcon = () => {
  // Definindo o estado para armazenar a quantidade de produtos no carrinho
  const [cartItems, setCartItems] = useState(0);

  // Função para adicionar um item ao carrinho (usando useCallback para evitar re-renderizações desnecessárias)
  const addToCart = useCallback(() => {
    setCartItems(prevCartItems => prevCartItems + 1); // Atualiza o estado com base no valor anterior
  }, []);

  return (
    <div style={styles.cartContainer}>
      <a href="shopping-cart" aria-label="Ir para o carrinho">
        <button onClick={addToCart} style={styles.button}>
          <img 
            src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/mini-cart.svg" 
            alt="Carrinho de compras" 
            style={styles.icon}/>
          {/* {cartItems > 0 && (
            <span style={styles.cartCount}>{cartItems}</span> // Exibe a quantidade de itens no carrinho
          )} */}
        </button>
      </a>
    </div>
  );
};

// Estilos
const styles = {
  cartContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  button: {
    background: 'transparent',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    position: 'relative',
  },
  icon: {
    width: '24px', // Tamanho do ícone
    height: '24px',
  },
  cartCount: {
    position: 'absolute',
    top: '-4px', // Ajuste do contador para cima
    right: '-8px', // Ajuste do contador para a direita
    backgroundColor: '#e23873',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '9px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default CartIcon;
