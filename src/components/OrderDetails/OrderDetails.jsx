import React, { useContext } from 'react'
import { AppContext } from '../../store/AppContext'
import OrderCart from '../OrderCart/OrderCart'

export default function OrderDetails() {
  let { data } = useContext(AppContext)

  return (
    <div className='container d-flex'>
      {data.cartItems.length > 0 ?  <table class="table">
  <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
    </thead>
    <tbody>
        {data.cartItems.map((product) => (
          <OrderCart productInfo={product} key={product.id} />
        ))}
    </tbody>
</table> : <h4 className='mx-auto'>please select any product</h4>}
 
    </div>
  )
}
