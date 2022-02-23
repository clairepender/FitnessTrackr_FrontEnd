import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { getUser } from './api';

import { Home, Login, NavBar, MyRoutines, Routines, CreateNewRoutine, CreateActivity, Activities, AddActivityToRoutine } from './components';






const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [display, setDisplay] = useState([]);
    const [myRoutines, setMyRoutines] = useState([]);
    const [newActivity, setNewActivity] = useState([]);
    const [displayActivities, setDisplayActivities] = useState([]);


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
                    <div className="card text-center">
                        <div id="title-card" className="card-header">
                            <h1 className="text-dark"><b>FITNESS TRACKER</b></h1>
                        </div>
                    </div>
                
                    <NavBar token={token} setToken={setToken} />
                    
                    {/* ROUTE PATHS BELOW*/}
                    <Route exact path="/" render={(routeProps) => <Home {...routeProps} />}/> 
                    <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/> 
                    <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/>
                    <Route exact path="/routines" render={(routeProps) => <Routines token={token} />}/>
                    <Route exact path="/myroutines" render={(routeProps) => <MyRoutines {...routeProps} token={token} setToken={setToken} setUser={setUser} user={user} setMyRoutines={setMyRoutines} myRoutines={myRoutines} />}/>
                    <Route exact path="/createnewroutine" render={(routeProps) => <CreateNewRoutine {...routeProps} token={token} setToken={setToken} setDisplay={setDisplay} display={display} />}/>
                    <Route exact path="/createactivity" render={(routeProps) => <CreateActivity {...routeProps} token={token} newActivity={newActivity} setNewActivity={setNewActivity} />}/>
                    <Route exact path="/activities" render={(routeProps) => <Activities {...routeProps} token={token} displayActivities={displayActivities} setDisplayActivities={setDisplayActivities} />}/>
                    <Route exact path="/addactivitytoroutine" render={(routeProps) => <AddActivityToRoutine {...routeProps} token={token} displayActivities={displayActivities} setDisplayActivities={setDisplayActivities} />} />
            </div>
        </BrowserRouter>
    )
}







ReactDOM.render(
    <App />,
    document.getElementById('app')
);