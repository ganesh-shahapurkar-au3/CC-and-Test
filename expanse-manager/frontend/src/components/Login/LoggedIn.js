import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Profile from '../Profile'
import Logout from '../Logout'
import { Redirect } from "react-router-dom";


export default function LoggedIn() {


    return (
        <div>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
        </div>
    )
}
