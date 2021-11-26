import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { isLoggedIn } from './api';

import { Login } from './components';






const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [loggedIn, setLoggedIn] = useState(isLoggedIn(token));


    // useEffect(() => {
    //     console.log("Mounted")
    //     const token = localStorage.getItem("token")
    //     //now we need to get the token from local storage and use it to log in
    //     if (token) {
    //         setToken(token);
    //     }    
    // }, [token])

    useEffect(() => {
        setLoggedIn(isLoggedIn(token));
    }, [token])
    


    return (
        <BrowserRouter>
            <div>
                <div id="title">
                    <h3>test title</h3>
                </div>
                <div id="nav-bar">
                    <Link to="/login">Login</Link>
                    <Link to="/">Home</Link>
                    <Link to="/routines">My Routines</Link>
                </div>

                {/* ROUTE PATHS BELOW*/}
                <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/> 
                <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/>
                
        

  
            </div>
        </BrowserRouter>
    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);