import React from 'react'

function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <div>
                            <a href className="me-4 text-reset">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="bi bi-twitter" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="bi bi-google" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="bi bi-linkedin" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="bi bi-github" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="border-bottom">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Information
                                </h6>
                                <div className="line"></div>
                                <p>
                                    <a href="#!" className="">Warranty and Service</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Corporate and Wholesale</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Privacy Policy</a>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Mobile App
                                </h6>
                                <div className="line"></div>
                                <p>
                                    <a href="#!" className="text-reset">Coming Soon</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <div className="line"></div>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Contact</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Blog</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">EPay</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">FAQ</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                <div className="line"></div>
                                <p><i className="bi bi-geo-alt-fill me-3" />Bhakta Marga, Baluwatar</p>
                                <p><i className="bi bi-envelope-fill me-3" />sales@meroshopping.com</p>
                                <p><i className="bi bi-telephone-fill me-3" />9801119988, 9801199766</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="text-center p-4">
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> MeroShopping.com All Rights Reserved</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
