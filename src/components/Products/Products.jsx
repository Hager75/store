import React, { useContext } from 'react'
import { OrderListContextProvider } from '../../store/OrderListContext';
import { ProductsContext } from '../../store/ProductsContext';
import Product from '../Product/Product'

export default function Products() {
  let {products} = useContext(ProductsContext);
  
  return (
    <div className='row'> 
    <OrderListContextProvider>

      {products.map((product)=><Product productInfo={product} key={product.id}/>)}
    </OrderListContextProvider>
    </div>
  )
}

