import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
export default function LandingPage(props) {

    const [state, setstate] = useState({
        showLogIn: true,
        showSignup: false
    })

    const showLogIn = () => {
        setstate({
            showLogIn: true,
            showSignup: false
        })
    }

    const showSignup = () => {
        setstate({
            showLogIn: false,
            showSignup: true
        })
    }

    return (
        <div>
            <div className={state.showLogIn ? "d-block" : "d-none"}>
                <Login {...props} showSignup={showSignup} />
            </div>

            <div className={state.showSignup ? "d-block" : "d-none"}>
                <Signup {...props} showLogIn={showLogIn} />
            </div>
        </div>
    )
}
