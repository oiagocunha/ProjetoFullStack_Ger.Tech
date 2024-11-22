import './app.css'
import FiltroDosProdutos from '../../Components/Filter/filter';
import ProductList from '../../Components/ProductListing/ProductList';
import OrderButton from '../../Components/OrderBox/orderButton';

function FilterPage() {
  return (
    <>
      <div className='subContainer'>
        <OrderButton />
        <div className="containerAll">
          <FiltroDosProdutos />
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default FilterPage;
