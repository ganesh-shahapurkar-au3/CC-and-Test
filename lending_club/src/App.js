import React from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import ViewClient from './component/ViewClient';
import NotFound from './component/NotFound';
import Navbar from './component/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="App">
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/data/:id" component={ViewClient} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
