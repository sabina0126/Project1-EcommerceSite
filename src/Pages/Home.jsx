import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductsByCat from '../Component/ProductsByCat';
import CartContext from '../CartContext';

export default function Home() {
  let { state, dispatch } = useContext(CartContext)
  let [cat, setCat] = useState([])
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`)
      .then(res => {
        setCat(res.data);
      });
    axios.get(`https://dummyjson.com/products`)
      .then(res => {
        setData(res.data.products);
      });
  }, [])

  return (
    <>
      <section className='home'>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 shadow">
                <ul className="list-group list-group-flush">
                  <li className="py-3 fw-bold">Categories</li>
                  <div className="line"></div>
                  {cat.slice(0, 12).map((a) => (
                    <li className="list-group-item" key={a}>
                      <Link to={`/cat/${a.slug}`}>
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-9">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://meroshopping.com/images/9azyMP6uTtxBLreQ8dBdoXwloYjgIopTxPaxmrGy.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://meroshopping.com/images/jUcaHXquqbzxRKVd0ftrBx8onWY6uTYGwNCjOCUt.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://meroshopping.com/images/AHP3AVx36DOgAWP21yvIpbAGN5f9rhiGW1PtD3R0.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://meroshopping.com/images/MTXZ1q4kX6qxZBg0bqKw0c5AGRxc8RHEPVGjUvW1.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="row py-4">
                  <div className="col-lg-3">
                    <Link to={`/cat/Mens-Shirts`}>
                      <img className='p1' src="https://meroshopping.com/images/TS4eGp37o2wgy7ENX2L7Yh3ocU5zDfAVbTKDejwa.png" alt="" />
                      <p className='text-center'>Men's Fashion</p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link to={`/cat/Beauty`}>
                      <img className='p1' src="https://meroshopping.com/images/DT4K1W232libuHy8woMS7u65aTC5TASMIxItMT9L.png" alt="" />
                      <p className='text-center'>Health & Beauty</p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link to={`/cat/Groceries`}>
                      <img className='p1' src="https://meroshopping.com/images/e2OjChaTYsSSgINw5mlh8XVkhMKQALjBHehgFehf.png" alt="" />
                      <p className='text-center'>Groceries</p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link to={`/cat/Furniture`}>
                      <img className='p1' src="https://meroshopping.com/images/mTL81WCVIdciwvZHSotOmVwrBpAZmFMdqTMVrExd.png" alt="" />
                      <p className='text-center'>Home Furniture</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5'>
          <div className="container">
            <div className="row">
              <div className="col-3 shadow">
                <ul className="list-group list-group-flush">
                  <li className="bg-danger text-center fw-bold py-3 text-white"><i className="bi bi-asterisk" />Popular Items</li>
                  {data.slice(15, 17).map((a) => (
                    <li className="list-group-item" key={a}>
                      <Link to={`/cat/${a.slug}`}>
                        <Link to={`/details/${a.id}`}>
                          <img className='w-100' src={a.images} alt="" />
                          <h6 className='d-flex justify-content-between'><p className='text-dark fw-bold'>{a.title}</p> <p className='text-decoration-underline'>{a.price}</p></h6>
                        </Link>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-9">
                <h3 className=''>Latest Products</h3>
                <hr />
                <div className="row shadow">
                  {data.slice(0, 6).map((a) => (
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
                          <span className="product-new-label">New</span>
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
            </div>
          </div>
        </section>

        <section className='py-5'>
          <div className="container">
            <div className="row">
              <div className="col-3 shadow">
                <ul className="list-group list-group-flush">
                  <li className="bg-danger text-center fw-bold py-3 text-white"><i className="bi bi-stars" />Weekly Popular Items</li>
                  {data.slice(17, 19).map((a) => (
                    <li className="list-group-item" key={a}>
                      <Link to={`/cat/${a.slug}`}>
                        <Link to={`/details/${a.id}`}>
                          <img className='w-100' src={a.images} alt="" />
                          <h6 className='d-flex justify-content-between'><p className='text-dark fw-bold'>{a.title}</p> <p className='text-decoration-underline'>{a.price}</p></h6>
                        </Link>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-9">
                <h3 className=''>Hot Deals</h3>
                <hr />
                <div className="row shadow">
                  {data.slice(6, 12).map((a) => (
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
                          <span className="product-new-label"><i className="bi bi-fire" /></span>
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
            </div>
          </div>
        </section>
        <ProductsByCat title="groceries" />
        <ProductsByCat title="Laptops" />
        <ProductsByCat title="beauty" />
      </section>

      <section className='py-4'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className='brand'>our brands</h4>
              <div className="line mb-3"></div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-2">
              <div>
                <img className='w-50' src="https://meroshopping.com/images/g2M12JIkLNx73qxzFilsDRSEOeevwqlqnbPNIHip.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <img className='w-50' src="https://meroshopping.com/images/UTYfBk0J89XbHIjPtJx1lvOYvj8hEAVhqe90GaVj.png" alt="" />
            </div>
            <div className="col-lg-2 ">
              <img className='w-50' src="https://meroshopping.com/images/8EaOMl5V8tcP9LyqxaxyrXzkCZVRdSaxUVMmaewy.jpg" alt="" />
            </div>
            <div className="col-lg-2 ">
              <img className='w-50' src="https://meroshopping.com/images/j2qMFTDCYpTSGVXZ4Idz814gvJSNjUD6Ity0FMBX.png" alt="" />
            </div>
            <div className="col-lg-2 py-3">
              <img className='w-50' src="https://meroshopping.com/images/b7tcgktUPUDCl4JQnzaW0CdUWwXtfgN99kz8tlCv.png" alt="" />
            </div>
            <div className="col-lg-2 py-3">
              <img className='w-50' src="https://meroshopping.com/images/2s2fK5bmyDN0cJYgyGFR8crahNwD3l8R4M97jzW9.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
