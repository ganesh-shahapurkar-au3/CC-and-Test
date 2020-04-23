import React from 'react';
import auth from '../auth';
import { useHistory } from 'react-router-dom';

export default function Logout() {
    const history = useHistory()
    const onLogout = () => {
        auth.logout(() => {
            history.push("/")
            window.location.reload()
        })
    }
    return (
        <div>
            <button className="btn btn-danger text-white btn-sm" onClick={onLogout}>Logout</button>
        </div>
    )
}
