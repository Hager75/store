import './App.scss';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Notfound from './components/Notfound/Notfound';
import { ProductsContextProvider } from './store/ProductsContext';
import ProductDetails from './components/ProductDetails/ProductDetails';
import OrderDetails from './components/OrderDetails/OrderDetails';
import { CounterCartContextProvider } from './store/CounterCartContext';
import { OrderListContextProvider } from './store/OrderListContext';

function App() {

  return (
    <div className="vh-100 d-flex flex-column">
      <CounterCartContextProvider>
      <Header />
      
      <div className='container flex-grow-1'>
      <ProductsContextProvider>
        <OrderListContextProvider>
        <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="products" element={<Products />}>
        </Route>
        <Route path="productdetails" element={<ProductDetails />}>
        <Route path=":productId" element={<ProductDetails />}/>
        </Route>
        <Route path="orderdetails" element={<OrderDetails/>}>
        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
        </OrderListContextProvider>
     
      </ProductsContextProvider>
      </div>
      </CounterCartContextProvider>
   
     
      <Footer />
    </div>
  );
}

export default App;
