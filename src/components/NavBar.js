import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({token, setToken}) => {

    return (
        <nav>
                <div id="nav-bar">
                    <Link to="/">Home </Link>
                    <Link to="/login">Login </Link>
                    <Link to="/register">Sign Up </Link>
                    <Link to="/myroutines">My Routines </Link>
                    <Link to="/routines">Public Routines</Link>
                </div>
        </nav>
    )
}


export default NavBar;