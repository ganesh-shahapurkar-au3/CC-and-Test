import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userId, userToken } from '../helper/helper';

export default function Profile(props) {

    const user = useSelector(props => props.user);
    const [state, setstate] = useState({})

    useEffect(() => {

        fetch("http://localhost:5000/user/profile/" + userId(), {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${userToken()}`
            }
        })
            .then((data) => data.json())
            .then((response) => {
                setstate({
                    user: response
                })
                console.log("response =>", response)
            })
            .catch((error) => {
                console.log("error", error)
            })

    }, [user])

    return (
        <div className="container">
            {
                state.user && state.user.firstname ?
                    (
                        <div>
                            <h4>Hello {state.user.firstname.toUpperCase()} {state.user.lastname.toUpperCase()}</h4>
                        </div>
                    )
                    :
                    (
                        <div className="alert alert-danger" role="alert">
                            Session Has Expired <Link to="/" className="alert-link">Login Please!</Link>
                        </div>
                    )
            }
        </div>
    )
}
