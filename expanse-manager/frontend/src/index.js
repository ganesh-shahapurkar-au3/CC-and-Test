import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Signup from './components/Signup';

const Home = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/singup" component={Signup} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
);
