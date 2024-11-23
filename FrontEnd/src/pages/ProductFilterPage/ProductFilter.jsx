import './app.css'
import FiltroDosProdutos from '../../Components/Filter/filter';
import ProductList from '../../Components/ProductListing/ProductList';
import OrderButton from '../../Components/OrderBox/orderButton';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function FilterPage() {
  return (
    <>
      <Header />
      <div className='subContainer'>
        <OrderButton />
        <div className="containerAll">
          <FiltroDosProdutos />
          <ProductList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FilterPage;
