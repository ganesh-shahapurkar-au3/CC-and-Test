import React, { useState } from 'react';
import { addNewuser } from '../API/userApi';

export default function Signup(props) {

    const [state, setstate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confrimPassword: ""

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

            const signupData = {
                email: state.email,
                password: state.password,
                firstname: state.firstname,
                lastname: state.lastname
            };

            addNewuser(signupData)

        }
        catch (err) {
            console.log("error".err)
            alert("User cratation failed!")
        }
        finally {
            alert("Account Created Successfully... Login Please!")
            props.showLogIn()
        }
    }

    return (
        <div>

            <div className="container col-md-3 mt-5">
                <h2>Signup</h2>
                <div className="text-center mt-3">
                    <form onSubmit={handleSubmit}>
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
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                type="text"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                type="password"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="confrimPassword"
                                className="form-control"
                                placeholder="Confrim Password"
                                type="password"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary login-btn btn-block">Sign Up</button>
                        </div>

                        <div className="or-seperator">
                            <i>or</i>
                        </div>

                    </form >

                    <p className="text-muted small pt-2">
                        Already have a account?{" "}
                        <span style={{ cursor: 'pointer' }} className="link" onClick={props.showLogIn}>Login here!</span>
                    </p>
                </div>


            </div>

        </div>
    )
}
