import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
  let { cid } = useParams()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${cid}`)
      .then(res => {
        setData(res.data.products);
      });
  }, [cid])
  return (
    <>
      <div className="container">
        <h2 className='brand'>{cid}</h2>
        <div className="row shadow">
          {data.map((a) => (
            <div className="col-md-3 col-sm-6" key={a.id}>
              <div className="product-grid3 shadow">
                <div className="product-image3">
                  <Link to={`/details/${a.id}`}>
                    <img className="pic-1" src={a.images} />
                    <img className="pic-2" src={a.images} />
                  </Link>
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-shopping-bag" /></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                  </ul>
                  <span className="product-new-label">SALE</span>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">{a.title}</a></h3>
                  <div className="price">
                    ${a.price}
                    <span>${a.price}</span>
                  </div>
                  <ul className="rating py-2">
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
    </>
  )
}

export default Category
