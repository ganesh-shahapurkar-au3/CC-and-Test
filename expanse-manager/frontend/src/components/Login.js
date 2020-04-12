import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const handleChange = () => {
        console.log("hello")
    }

    return (
        <div className="container col-md-3 mt-5">
            <h2>Login</h2>
            <div className="text-center mt-3">
                <form>
                    <div className="form-group">
                        <input
                            id="eml"
                            name="email"
                            className="form-control"
                            placeholder="User Name"
                            type="email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            id="psw"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            type="password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary login-btn btn-block">Sign in</button>
                    </div>

                    <div className="or-seperator">
                        <i>or</i>
                    </div>

                </form >
                <p className="text-muted small pt-2">
                    Don't have an account?{" "}
                    <span><Link className="link" to="/signup">Sign up here!</Link></span>
                </p>
            </div>


        </div>

    )
}
