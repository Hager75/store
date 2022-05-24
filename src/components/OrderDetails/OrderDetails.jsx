import React, { useContext } from 'react'
import { OrderListContext } from '../../store/OrderListContext'
import OrderCart from '../OrderCart/OrderCart'

export default function OrderDetails() {
let { totalOrder } = useContext(OrderListContext);
 
  console.log(totalOrder);
  return (
      <>
    <OrderCart/>
    {/* {products.map((product)=><Product productInfo={product} key={product.id}/>)} */}

    </>
  )
}
