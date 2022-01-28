import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BASE_URL } from '../constants';


async function register(userName, passWord, setToken) {
    // if (passWord !== confirmPassword) {
    //     alert("Passwords don't match!");
    //     return;
    // }
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
        console.log(result)

    } catch(error) {
        console.error(error);
    }
}


//*** TO DO: need to create error alert for failed login ***//
async function login(userName, passWord, setToken) {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
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
                setToken(token);
                localStorage.setItem("token", token);
                console.log(result)
                

    } catch(error) {
        console.error(error);
    }
}

const Login = ({setToken, match}) => {
    const history = useHistory();
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form
        className="m-3 w-50 position-absolute top-50 start-50 translate-middle"
        onSubmit={(event) => {
            event.preventDefault();
            if (match.url === "/login") login(userName, passWord, setToken) 
            if (match.url === "/register") register(userName, passWord, confirmPassword, setToken)
            history.push('/login')
        }}
        >
            {/*USERNAME*/}
        <div className="form-group centered">
            <label className="row mb-2">
                Username
            </label>
            <input
                type="text"
                value={userName}
                onChange={({target: {value}}) => setUsername(value)}
                className="row mb-3"
                id="usernameInput"
                placeholder="your username here"
                />
        </div>
            {/*PASSWORD*/}
        <div className="form-group centered">
            <label className="row mb-2">
                Password
            </label>
            <input
                type="password"
                value={passWord}
                onChange={({target: {value}}) => setPassword(value)}
                className="row mb-3"
                id="passwordInput"
                placeholder="your password here"
            />
        </div>
            {/*CONFIRM PASSWORD*/}
            {/* To Do: ONLY RENDER IF /register */}
        {match.url === "/register" ?    
        (<div className="form-group centered">
            <label className="form-label">
                Confirm Password
            </label>
            <input
                type="password" 
                onChange={({target: {value}}) => setConfirmPassword(value)}
                value={confirmPassword}
                className="row mb-3"
                id="setConfirmPasswordInput"
                placeholder=""
            />
        </div>) : null}

            {/*SUBMIT BUTTON*/}
            <div className="form-group centered">
            <button type="submit" className="btn mb-2 btn-info btn-sm btn-block">
                Submit
            </button>
            {/* Link to login and register*/}
            <div className="form-group centered">
            {
                match.url === "/register" ?
                <Link to="/login"> Already have an account? </Link>
                : <Link to="/register" className="link-dark">Don't have an account?</Link>

            }
            </div>
        </div>

        </form>
    )
}

export default Login;