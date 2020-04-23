import React, { useState } from 'react';
import { verifyUser } from '../API/userApi';

export default function Login(props) {
    const [state, setstate] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setstate({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            const userData = {
                email: state.email,
                password: state.password
            }
            console.log(userData)
            verifyUser(userData, props)
        }
        catch (err) {
            console.log("error" + err)
            alert("Please Fill Valid Details")
        }
    }

    return (
        <div className="container col-md-3 mt-5">
            <h2>Login</h2>
            <div className="text-center mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            type="text"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            type="password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary login-btn btn-block">Sign in</button>
                    </div>

                    <div className="or-seperator">
                        <i>or</i>
                    </div>

                </form >
                <p className="text-muted small pt-2">
                    Don't have an account?{" "}
                    <span style={{ cursor: 'pointer' }} className="link" onClick={props.showSignup}>Sign up here!</span>
                </p>
            </div>


        </div>

    )
}
