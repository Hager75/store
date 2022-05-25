import React from 'react'

export default function OrderCart({productInfo}) {
  const { imgUrl, productName, price , quanitity } = productInfo;
  return (
    <>
    
    <tr>
    <td  className='col-1'><img src={imgUrl} alt={productName} className='img-fluid' /></td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{quanitity}</td>
    </tr>
    </>
  )
}
