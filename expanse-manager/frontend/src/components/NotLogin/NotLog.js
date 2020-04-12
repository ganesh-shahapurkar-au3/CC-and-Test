import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login'
import Signup from '../Signup'

export default function NotLog() {
    return (
        <div>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </div>
    )
}
