import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CounterCartContext } from '../../store/CounterCartContext';
import { OrderListContext } from '../../store/OrderListContext';
import Card from '../UI/Card/Card'
import './Product.scss'



export default function Product(props) {
    const { id, imgUrl, productName, category, price } = props.productInfo;
    const [clicked, setClicked] = useState(false);
    // const [qun, setqun] = useState(1);
    // const [orderProduct, setorderProduct] = useState({...props.productInfo});
    let { count, increase } = useContext(CounterCartContext);
    let { addOrder} = useContext(OrderListContext);

    const addToCart = () => {
        increase();
        // setqun(qun + 1);
        // let obj = { ...props.productInfo, qunatity: qun };
        let obj = {...props.productInfo};
        addOrder(obj);

        // if (totalOrder.map(object => object.id).indexOf(obj.id) < 0) {
        //     addOrder(obj);
        // } else {
        //     let eleindex = totalOrder.map(object => object.id).indexOf(obj.id);
        //     let updatedObj = totalOrder[eleindex];
        //     updatedObj.qunatity = qun ;
        //     console.log(eleindex);
        //     updateQuantity(eleindex , updatedObj);
        // }

        setClicked(true);
        // setClicked(true);
        // setorderProduct({...orderProduct, quantity: qun})

        //   orderProduct = {...props.productInfo, quantity: qun};

        //    console.log(orderProduct);

        // if(clicked){
        //     console.log(props.productInfo.quantity);
        // }

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
                <p className='m-0 dark-text'>{category} + {count}</p>
                <p className='m-0 dark-text'>{price}.00 EGP</p>
            </Card>
        </div>


    )
}
