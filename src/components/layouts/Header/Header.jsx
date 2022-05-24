import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CounterCartContext } from '../../../store/CounterCartContext';
import './Header.scss'

export default function Header() {
    // const [userName, setUserName] = useState('hager');
    const userName = 'Hager';
    let {count} = useContext(CounterCartContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-0 mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/products">
                        <img src="./assets/logo.png" alt="logo" className="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <div className='d-flex justify-content-between'>
                            <Link className="nav-link" to="/products">
                                Home
                            </Link>

                            <form className="d-flex bg-light-blue align-items-center py-2 pe-2">
                                <input className="form-control py-0 search" type="search" placeholder="Search" aria-label="Search" />
                                <i className="fas fa-search search__icon ps-2"></i>
                            </form>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="mb-2 d-flex align-items-end justify-content-center">
                                <div className='position-relative'>
                                <Link className="nav-link pb-0" to="/orderdetails">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className='count_no top-0'>{count}</span>
                                </Link>
                                </div>
                                <div className='me-2'>
                                    <i className="fa-solid fa-user logo"></i>
                                </div>
                                <p className="m-0">{userName}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>
        </>
    )
}

