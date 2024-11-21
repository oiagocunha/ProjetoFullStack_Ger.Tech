import React, { useState } from "react";
import styles from "./barra.module.css";
import { FaSearch } from "react-icons/fa"; // Usando o ícone de busca do react-icons

function SearchBar() {
    const [query, setQuery] = useState("");
    // const [filteredProducts, setFilteredProducts] = useState(products);
    // Função para lidar com o clique no ícone de pesquisa
    const handleSearch = (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        console.log("Buscando:", query);
        // Aqui você pode adicionar a lógica para realizar a busca
        // Por exemplo, chamar uma API ou filtrar dados
    // Filtra os produtos com base no nome (case-insensitive)
    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results); // Atualiza os produtos filtrados
    console.log("Resultados da busca:", results);
    };

    return (
        <form onSubmit={handleSearch} className={styles.formContainer}>
            <input
                type="text"
                placeholder="Buscar produto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Campo de busca"
                className={styles.input}
            />
            {/* Ícone de pesquisa */}
            <button
                type="submit"
                className={styles.searchButton}
                aria-label="Botão de pesquisa"
            >
                <FaSearch />
            </button>
        </form>
    );
}

export default SearchBar;