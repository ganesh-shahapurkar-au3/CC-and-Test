import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const handleChange = () => {
        console.log("hello")
    }
    return (
        <div>

            <div className="container col-md-3 mt-5">
                <h2>Signup</h2>
                <div className="text-center mt-3">
                    <form>
                        <div className="form-group">
                            <input
                                name="firstname"
                                className="form-control"
                                placeholder="First Name"
                                type="text"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="lastname"
                                className="form-control"
                                placeholder="Last Name"
                                type="text"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                type="text"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                type="Password"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="confrim-password"
                                className="form-control"
                                placeholder="Confrim Password"
                                type="password"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary login-btn btn-block">Sign Up</button>
                        </div>

                        <div className="or-seperator">
                            <i>or</i>
                        </div>

                    </form >

                    <p className="text-muted small pt-2">
                        Already have a account?{" "}
                        <Link className="link" to="/login">Login here!</Link>
                    </p>
                </div>


            </div>

        </div>
    )
}
