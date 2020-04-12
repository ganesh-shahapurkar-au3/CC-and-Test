import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link className="navbar-brand" to="/dashboard">Expanse</Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/dashboard">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/profile">Profile</Link>
                        {props.loggedIn ?
                            (<Link className="nav-item nav-link text-danger" to="/Logout">Logout</Link>)
                            :
                            (<Link className="nav-item nav-link" to="/Login">Login/signup</Link>)
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
