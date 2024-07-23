import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';

export default function ProductsByCat(props) {
    let { state, dispatch } = useContext(CartContext)
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${props.title}`)
            .then(res => {
                setData(res.data.products);
            });
    }, [props.title])
    return (
        <div>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className='brand'>{props.title}</h4>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <Link className='view' to={`/cat/${props.title}`}>View all <i className="bi bi-arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="row shadow">
                        {data.slice(0, 4).map((a) => (
                            <div className="col-md-3 col-sm-6" key={a.id}>
                                <div className="product-grid3 shadow">
                                    <div className="product-image3">
                                        <Link to={`/details/${a.id}`}>
                                            <img className="pic-1" src={a.images} />
                                            <img className="pic-2" src={a.images} />
                                        </Link>
                                        <ul className="social">
                                            <li><a href="#"><i className="fa fa-shopping-bag" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" onClick={() => dispatch({ type: 'addtocart', payload: a })} /></a></li>
                                        </ul>
                                        <span className="product-new-label">SALE</span>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="#">{a.title}</a></h3>
                                        <div className="price">
                                            ${a.price}
                                        </div>
                                        <ul className="rating">
                                            <li className="fa fa-star" />
                                            <li className="fa fa-star" />
                                            <li className="fa fa-star" />
                                            <li className="fa fa-star disable" />
                                            <li className="fa fa-star disable" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
