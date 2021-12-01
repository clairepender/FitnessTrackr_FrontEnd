import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getUser } from './api';

import { Login, NavBar, MyRoutines, Routines, CreateNewRoutine, MyActivities, Activities } from './components';






const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [display, setDisplay] = useState([]);
    const [myRoutines, setMyRoutines] = useState([]);


    // useEffect(() => {
    //     console.log("Mounted")
    //     const token = localStorage.getItem("token")
    //     //now we need to get the token from local storage and use it to log in
    //     if (token) {
    //         setToken(token);
    //     }    
    // }, [token])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setToken(token);
            getUser(token, setUser);
            setDisplay(token, display);
            setMyRoutines(token)        
        }
    }, [token])
    


    return (
        <BrowserRouter>
            <div>
                <div id="title">
                    <h3>Fitness Trackr</h3>
                </div>
                <NavBar token={token} setToken={setToken} />
                {/* ROUTE PATHS BELOW*/}
                <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/> 
                <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/>
                <Route exact path="/routines" render={(routeProps) => <Routines token={token} />}/>
                <Route exact path="/myroutines" render={(routeProps) => <MyRoutines {...routeProps} token={token} setToken={setToken} setUser={setUser} user={user} setMyRoutines={setMyRoutines} myRoutines={myRoutines} />}/>
                <Route exact path="/createnewroutine" render={(routeProps) => <CreateNewRoutine {...routeProps} token={token} setToken={setToken} setDisplay={setDisplay} display={display} />}/>
                <Route exact path="/myactivities" render={(routeProps) => <MyActivities {...routeProps} token={token} />}/>
                <Route exact path="/activities" render={(routeProps) => <Activities {...routeProps} token={token} />}/>
  
            </div>
        </BrowserRouter>
    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);