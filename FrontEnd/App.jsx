import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './src/Components/ProductListing/ProductList';
import Carrossel from './src/Components/Carousel/Carrossel'; // Corrigir o caminho de importação
import Footer from './src/Components/Footer/Footer'; // Corrigir o caminho de importação
import Header from './src/Components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Carrossel />
      <ProductList />
      <Footer />

    </>
  );
}

export default App;