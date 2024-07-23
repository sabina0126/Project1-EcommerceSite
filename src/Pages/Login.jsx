import React from 'react'

function Login() {
    return (
        <>
            <section className='shadow'>
                <h4 className='brand text-center'>Login</h4>
                <div className="container login">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address or Phone</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com or phone number" />
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                        <div className="my-3">
                            <button className='btn1'>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
