import React from 'react';
import './App.css';
import NavbarComponent from './component/NavbarComponent';
import Dashboard from './component/Dashboard';
import Search from './component/Search';

function App() {
    return (
        <>
            <NavbarComponent />
            <div className="App">
                <Search />
                <hr />
                <Dashboard />
                <h1>Ganesh</h1>
            </div>
        </>
    );
}

export default App;
