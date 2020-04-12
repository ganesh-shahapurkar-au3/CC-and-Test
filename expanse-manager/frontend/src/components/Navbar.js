import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link className="navbar-brand" to="#">Expanse</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/profile">Profile</Link>
                        <Link className="nav-item float-right nav-link text-danger" to="Logout">Logout</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
