import React, { useContext, useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import CartContext from '../CartContext'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import Trackorder from '../Pages/Trackorder'
import axios from 'axios'

export default function Header() {
    let { state, dispatch } = useContext(CartContext)
    let [cat, setCat] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/categories`)
            .then(res => {
                setCat(res.data);
            });
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                            <ul className='list'>
                                <li className='a1'><Link to={`/sell`}>Sell on MeroShopping</Link></li>
                                <li className='a1'><Link to={`/trackorder`}>Track Order</Link></li>
                                <li className='a1'><Link to={`/help`}>Help</Link></li>
                                <li className='a1'><Link to={`/login`}>Login</Link></li>
                                <li className='a1'><Link to={`/registration`}>Registration</Link></li>
                                <li className='a1'><Link to={`/sellerlogin`}>Seller Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-1 top'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <Link to="/"><img src="https://meroshopping.com/front/assets/image/catalog/demo/logo/logo-old.png" alt="LOGO" /></Link>
                        </div>
                        <div className="col-lg-8">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 f-control" type="search" placeholder="Search Products on MeroShopping"
                                    aria-label="Search" />
                                <div className="dropdown w">
                                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        {cat.map((a) => (
                                            <li className="dropdown-item" key={a}>
                                                <Link to={`/cat/${a.slug}`}>
                                                    {a.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="btn btn-primary m" type="submit"><i class="bi bi-search"></i></button>
                            </form>

                        </div>
                        <div className="col-lg-2">
                            <Link to={`/cart`} className="btn position-relative">
                                <i class="bi bi-cart-plus-fill">Cart</i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{state.cart.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
            
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex">
                                <img className='' src="https://meroshopping.com/images/mIAj62uhjSkKjY8stxjuRyYYFwW2sHJLB6PeXZ6N.png" alt="" />
                                <Link className="nav-link active" aria-current="page" to={`/cat/groceries`}>Global Collection</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <img className='' src="https://meroshopping.com/images/GZ1gcWnoibueuqKkhOLEd5oAdGSuEAAJ3SrU3iXE.png" alt="" />
                                <Link className="nav-link" to={`/cat/mens-watches`}>Mero Brand</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <img className='' src="https://meroshopping.com/images/mIAj62uhjSkKjY8stxjuRyYYFwW2sHJLB6PeXZ6N.png" alt="" />
                                <Link className="nav-link" to={`/cat/mens-shirts`}>99 Store</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <img className='' src="https://meroshopping.com/images/aUJgOmPcmnbqrLG5o8VWt3dyh4aCfvG4HcI8bSsk.png" alt="" />
                                <Link className="nav-link" to={`/cat/home-decoration`}>Deal of the Day</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <img className='' src="https://meroshopping.com/images/F8YWeTY1OcQxrux1b4fTQM9W3SAUGDxnhsorZJ7j.png" alt="" />
                                <Link className="nav-link" to={`/cat/beauty`}>Kids Area</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <img className='' src="https://meroshopping.com/images/0fs9twYk9TELAdpFpQFuNRK7DXv59FffBtrFzY3Z.png" alt="" />
                                <Link className="nav-link" to={`/cat/fragrances`}>Send gift to Nepal</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cat/:cid' element={<Category />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/trackorder' element={<Trackorder />} />
            </Routes>
        </>
    )
}
