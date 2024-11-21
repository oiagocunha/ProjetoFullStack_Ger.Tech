import styles from '../Header/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import SearchBar from '../barraDePesquisa/barraDeBusca.jsx';
import CartIcon from '../carrinhoDeCompras/carrinho.jsx';
import logo from '../../assets/Images/logo.png'

function Header() {
    const [searchTerm, setSearchTerm] = useState(''); // Gerenciar a pesquisa

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Atualiza o termo de pesquisa
    };

    return (
       <header className="py-3">
        <nav className="container d-flex justify-content-between align-items-center" style={{ marginTop: '25px' }}>
                <img src={logo} alt="Logo"/>
                <SearchBar/>
                <a href="/Sign-up" className={styles.cadastreSe}>Cadastre-se</a>
                <a href="/login" className={styles.buttonEntrar}>Entrar</a>
                <CartIcon/>
        </nav>

        <nav className="container d-flex justify-content-between align-items-center mt-5">
           <div className={styles.Link}>
                <a href="/home">Home</a>
                <a href="/products">Produtos</a>
                <a href="/category">Categorias</a>
                <a href="My-orders">Meus Pedidos</a>
            </div>
        </nav>
        
       </header>
    );
}

export default Header;