import React from 'react';
import '../App.css';
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Navbar from './Navbar';
import Cart from './Cart';
import Profile from './Profile';

function App(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="container m-5">
                        <h3>Welcome To AddCart.com</h3>
                    </div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <ProtectedRoute exact path="/app" component={Home} />
                        <ProtectedRoute path="/cart/:id" component={Cart} />
                        <ProtectedRoute path="/profile" component={Profile} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
