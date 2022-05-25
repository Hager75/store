import { useContext } from 'react'
import { AppContext } from '../../store/AppContext';

import Product from '../Product/Product'

export default function Products() {
  let { data } = useContext(AppContext);
  
  return (
    <div className='row'> 
          {data.products.map((product)=><Product productInfo={product} key={product.id}/>)}
    </div>
  )
}

