import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../store/AppContext';
import Card from '../UI/Card/Card'


export default function ProductDetails() {
  let params = useParams();
  let { data } = useContext(AppContext);
  const products = data.products ;
  let filteredProduct = [...products];
  filteredProduct = filteredProduct.filter((product)=> product.id === params.productId);
  const {imgUrl , productName , category , price} = filteredProduct[0] ;

  return (
    <>
      <div className='col-md-6 mx-auto'>
  <Card className='text-center'>
      <div className='maxheight__productimg overflow-hidden'>
  
      <img src={`../${imgUrl}`} alt={productName} className='img-fluid' />
      </div>
      <h4>{productName}</h4>
      <p className='m-0 dark-text'>{category}</p>
      <p className='m-0 dark-text'>{price}.00 EGP</p>
  </Card>
      </div>
    </>
  )
}
