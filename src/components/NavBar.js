import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({token, setToken}) => {
    
        console.log(token)
    return (
        <nav>
                <div id="nav-bar">
                    <Link to="/">Home </Link>
                    <Link to="/register">Sign Up </Link>
                    <Link to="/myroutines">My Routines </Link>
                    <Link to="/myactivities">My Activities</Link>
                    <Link to="/routines">Public Routines </Link>
                    <Link to="/createnewroutine">Create a New Routine </Link>
                    <Link to="/activities">Public Activities </Link>
                    <Link to="/createactivity">Create a New Activity </Link>
                    
                    {(!token ? <Link className="nav-link active" to="/login">Login </Link> : 
                            <Link className="nav-link active" to="#" onClick={(event) => {
                                localStorage.removeItem("token");
                                setToken("");
                        }}>Log Out</Link>)}
                </div>
        </nav>
    )
}


export default NavBar;