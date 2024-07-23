import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
    return (
        <>
            <section className='shadow'>
                <div className="container login">
                    <h4 className='brand'>Register Account</h4>
                    <p>If you already have an account with us, please login at the <Link to={`/login`}> <span className='view' >login page</span></Link>.</p>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="firstname" />
                        <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="lastname" />
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <div className="my-3">
                        <button className='btn1'>Register</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration
