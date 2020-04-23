import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Logout from './Logout';
import { userId } from '../helper/helper'

export default function Navbar(props) {

    const userID = userId()

    const cartCount = useSelector(state => state.cart.length)

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav justify-content-end">
                            <li className="nav-item">
                                <Link to="/app" className="nav-link text-white"><h5>AddCart.com</h5></Link>
                            </li>
                        </ul>
                        {userID ?
                            (
                                <ul className="nav justify-content-end ">
                                    <li className="nav-item">
                                        <Link to="/app" className="nav-link text-white">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className="nav-link text-white">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/cart/${userID}`} className="nav-link text-white">Cart <span className="badge badge-warning">{cartCount}</span></Link>
                                    </li>
                                    <li className="nav-item nav-link text-white">
                                        <Logout />
                                    </li>
                                </ul>
                            )
                            :
                            (null)
                        }

                    </div>
                </nav>
            </div>
        </div>
    )
}
