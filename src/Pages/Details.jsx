import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../CartContext'


export default function Details() {
    let { state, dispatch } = useContext(CartContext)
    let { id } = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setData(res.data);
            });
    }, [id])
    
    return (
        <>
            <div className="container">
                <h2 className='brand'>Details</h2>
                <div className="row">
                    <div className="col-lg-5 shadow">
                        <img className='w-100' src={data.images} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className='brand text-dark'>{data.title}</h2>
                        <p>{data.description}</p>
                        <p className='text-decoration-underline'>Price: {data.price}</p>
                        <button className='btn btn-danger' onClick={() => dispatch({type: 'addtocart', payload:data})}>Add to Cart</button>
                </div>
            </div>
        </div >
        </>
    )
}
