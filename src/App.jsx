import { useState } from 'react'
import { AppContext } from './store/AppContext'

import { Routes, Route } from 'react-router-dom'
import { products as staticProductData } from './static-products';

import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import OrderDetails from './components/OrderDetails/OrderDetails'
import Notfound from './components/Notfound/Notfound'

import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'

function App() {
  const [data, setDataState] = useState({
    products: staticProductData,
    cartItems: [],
    count:0
  })

  const setData = (newData) => {
    setDataState(newData)
  }

  const addItemToCart = (item) => {
    if(!data.cartItems.some(i=> i.id === item.id)) {
      item.quanitity = 1;
      setDataState(state => {
        return {
          ...state,
          cartItems: [
            ...state.cartItems, item
          ]
        }
      })
    } else {
      
      setDataState(state => {
       
        console.log('hahah');
        item.quanitity++;
        const newCartItem =  data.cartItems.filter(i=> i.id !== item.id);

        return {
          ...state,

          cartItems: [
            ...newCartItem, item
          ]

          
        }
      })
    }
    

    
  }
  const addCouter= ()=>{
console.log(data.count);
setDataState(state => {
  data.count++;
  let count = data.count;
  return {

    ...state, count
  }
})
  }
  const intialContext = {
    data,
    setData,
    addItemToCart, 
    addCouter
  }

 

  return (
    <AppContext.Provider value={intialContext}>
      <div className='vh-100 d-flex flex-column'>
        <Header />
        <div className='container flex-grow-1'>

          <Routes>

            <Route path='/' element={<Products />}></Route>
            <Route path='productdetails' element={<ProductDetails />}>
              <Route path=':productId' element={<ProductDetails />} />
            </Route>
            <Route path='orderdetails' element={<OrderDetails />}></Route>
            <Route path='*' element={<Notfound />}></Route>

          </Routes>

        </div>

        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
