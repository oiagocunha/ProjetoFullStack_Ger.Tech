import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import Carrossel from './src/Components/Carousel/Carrossel';
// import FeaturedCollections from './src/Components/FeaturedCollections/FeaturedCollections';
// import Categories from './src/Components/Categories/Categories';
import ProductList from './src/Components/ProductListing/ProductList';
import FeaturedCollections from './src/Components/FeaturedCollections/FeaturedCollections';

function App() {
  return (
    <>
      <Header />
      <Carrossel />
      {/* <FeaturedCollections /> */}
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
