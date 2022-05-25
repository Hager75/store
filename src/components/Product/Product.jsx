import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import Card from '../UI/Card/Card'
import './Product.scss'

export default function Product({ productInfo }) {
    const { id, imgUrl, productName, category, price } = productInfo;
    const { addItemToCart , addCouter } = useContext(AppContext);
    
    const addToCart = () => {
        console.log(productInfo);
        addItemToCart(productInfo);
        addCouter();
    }
    return (
        <div className='col-md-4 my-3 productCard '>
            <Card className="px-3 pb-3 h-100 text-center ">
                <div className='pt-3 product_img-container maxheight__productimg position-relative'>
                    <img src={imgUrl} alt={productName} className='img-fluid w-100 ' />
                    <div className='actions_container  w-100 h-100 start-0 top-0 mt-3 py-5 px-3 d-flex justify-content-between align-items-end'>
                        <Link className="fa-solid fa-eye fa-2x text-white" to={`/productdetails/${id}`}></Link>
                        <i onClick={addToCart} className="fa-solid fa-circle-plus text-white fa-2x"></i>

                    </div>
                </div>
                <h4>{productName}</h4>
                <p className='m-0 dark-text'>{category}</p>
                <p className='m-0 dark-text'>{price}.00 EGP</p>
            </Card>
        </div>


    )
}
