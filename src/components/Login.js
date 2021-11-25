import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';
import { } from '../api';

async function register(userName, passWord, setToken) {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: userName,
                    password: passWord
            })
        })
        
        const result = await response.json();
        const token = result.token;
        setToken[token];
        localStorage.setItem("token", token)
        console.log(token)

    } catch(error) {
        console.error(error);
    }
}

async function login(userName, passWord, setToken) {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user: {
                username: userName,
                password: passWord
                  }
                })
            })
              
                const result = await response.json();
                const token = result.token;
                console.log(result)
                setToken[token];
                localStorage.setItem("token", token);
                

    } catch(error) {
        console.error(error);
    }
}

const Login = ({setToken, match}) => {
    
    const [userName, setUsername] = useState("your username");
    const [passWord, setPassword] = useState("your password");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
            if (match.url === "/login") login(userName, passWord, setToken);
            if (match.url === "/register") register(userName, passWord, confirmPassword, setToken)
            
        }}
        >
            {/*USERNAME*/}
        <div className="container">
            <label className="form-label">
                Username
            </label>
            <input
                type="text"
                value={userName}
                onChange={({target: {value}}) => setUsername(value)}
                className="form-control"
                id="usernameInput"
                placeholder="your username here"
                />
        </div>
            {/*PASSWORD*/}
        <div className="container">
            <label className="form-label">
                Password
            </label>
            <input
                type="password"
                value={passWord}
                onChange={({target: {value}}) => setPassword(value)}
                className="form-control"
                id="passwordInput"
                placeholder="your password here"
            />
        </div>
            {/*CONFIRM PASSWORD*/}
            {/* To Do: ONLY RENDER IF /register */}
        {match.url === "/register" ?    
        (<div className="container">
            <label className="form-label">
                Confirm Password
            </label>
            <input
                type="password" 
                onChange={({target: {value}}) => setConfirmPassword(value)}
                value={confirmPassword}
                className="form-control"
                id="setConfirmPasswordInput"
                placeholder=""
            />
        </div>) : null}

            {/*SUBMIT BUTTON*/}
        <div className="submit">
            <button type="submit" className="submit-button">
                Submit
            </button>
            {/* Link to login and register*/}
            {
                match.url === "/register" ?
                <Link to="/login"> Already have an account? </Link>
                : <Link to="/register"> Don't have an account?</Link>

            }
        </div>

        </form>
    )
}

export default Login;