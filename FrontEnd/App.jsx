import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import Carrossel from './src/Components/Carousel/Carrossel';
import ProductList from './src/Components/ProductListing/ProductList';
import CollectionCard from './src/Components/Coleções/CollectionCard';

function App() {
  return (
    <>
      <Header />
      <CollectionCard />
      <Carrossel />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
