import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carrossel from '../../Components/Carousel/Carrossel';
import ProductList from '../../Components/ProductListing/ProductList';
import CollectionCard from '../../Components/Coleções/CollectionCard';

function HomePage() {
  return (
    <>
      <Header />
      <Carrossel />
      <CollectionCard />
      <ProductList size={8} />
      <Footer />
    </>
  );
}

export default HomePage;
