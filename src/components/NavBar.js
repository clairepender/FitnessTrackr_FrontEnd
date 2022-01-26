import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({token, setToken}) => {
    
        console.log(token)
    return (
        <nav>
            <div className="navbar navbar-expand-lg navbar-light bg-light text-dark font-spartan">
            <div className="container-fluid">
                {(!token ? 
                
                    <div id="nav-bar-no-token" className="navbar-brand">
                    <Link to="/">Home | </Link>
                    <Link to="/routines">Public Routines | </Link>
                    <Link to="/myroutines">My Routines | </Link>
                    <Link to="/activities">Public Activities | </Link>
                    <Link to="/register">Sign Up | </Link>
                    <Link className="nav-link active" to="/login">Login </Link> 
                    </div>
                    : 
                    
                    <div id="nav-bar-with-token">
                    <Link to="/">Home | </Link>
                    <Link to="/routines">Public Routines | </Link>
                    <Link to="/myroutines">My Routines | </Link>
                    <Link to="/createnewroutine">Create New Routine | </Link>
                    <Link to="/activities">Public Activities | </Link>
                    <Link to="/createactivity">Create New Activity  </Link>
                    <Link className="nav-link active" to="#" onClick={(event) => {
                                localStorage.removeItem("token");
                                setToken("");
                        }}>Log Out</Link>

                    </div>)}
                    </div>
                </div>
        </nav> 
    )
}




export default NavBar;