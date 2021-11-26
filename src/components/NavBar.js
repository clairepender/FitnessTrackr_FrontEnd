import React from "react";
import { Link, useHistory } from 'react-router-dom';

const NavBar = ({token, setToken}) => {
    const history = useHistory();
    function loginRedirect() {
        history.push('/login');
    }

    return (
        <nav>
                <div id="nav-bar">
                    <Link to="/">Home </Link>
                    <Link to="/register">Sign Up </Link>
                    <Link to="/myroutines">My Routines </Link>
                    <Link to="/routines">Public Routines </Link>
                    <Link to="/login">Login</Link>
                    {/* {(!token ? <span className="nav-link active" to="/login" onClick={() => {
                        loginRedirect();
                    }}>Log In</span> : 
                            <Link className="nav-link active" to="/logout" onClick={(event) => {
                                localStorage.removeItem("token");
                                setToken("");
                        }}>Log Out</Link>)} */}
                </div>
        </nav>
    )
}


export default NavBar;