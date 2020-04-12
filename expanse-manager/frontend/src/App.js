import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoggedIn from './components/Login/LoggedIn';
import NotLog from './components/NotLogin/NotLog';


function App() {

    // let loggedIn = localStorage.getItem("userD")
    const api = () => {
        fetch('http://localhost:8000/')
            .then((data) => data.json())
            .then(response => console.log(response))
    }
    api()
    let loggedIn = true
    return (
        <div>
            <Navbar />
            {loggedIn ? <LoggedIn /> : <NotLog />}
        </div>
    );
}

export default App;
