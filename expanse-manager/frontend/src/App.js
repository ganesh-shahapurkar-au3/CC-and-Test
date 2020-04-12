import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoggedIn from './components/Login/LoggedIn';
import NotLog from './components/NotLogin/NotLog';


function App() {

    let loggedIn = localStorage.getItem("userData")

    return (
        <div>
            <Navbar loggedIn={loggedIn} />
            <div className="container">
                {loggedIn ? <LoggedIn /> : <NotLog />}
            </div>
        </div>
    );
}

export default App;
