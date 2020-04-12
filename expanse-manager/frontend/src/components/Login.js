import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { checkLogin } from '../Api/api'

export default function Login() {

    const [state, setstate] = useState({
        username: "",
        password: ""
    })

    const history = useHistory()

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
                username: state.username,
                password: state.password
            }
            checkLogin(userData, history)
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
                            name="username"
                            className="form-control"
                            placeholder="User Name"
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
                    <span><Link className="link" to="/signup">Sign up here!</Link></span>
                </p>
            </div>


        </div>

    )
}
