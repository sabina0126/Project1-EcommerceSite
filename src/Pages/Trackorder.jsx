import React from 'react'

export default function Trackorder() {
  return (
    <>
      <section className='shadow'>
                <h4 className='brand text-center'>track your order</h4>
                <div className="container login">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address or Phone</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address or Phone Number" />
                        <label htmlFor="exampleFormControlInput1" className="form-label">Order Number</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Order Number" />
                        <div className="my-3">
                            <button className='btn1 bg-success'>Track Order</button>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
