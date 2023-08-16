import React from "react";
import Button from 'react-bootstrap/Button';
import './index.css';

function Login() {
    return (
        <div className="w-50 m-auto">
            <h3>Sign into Collab</h3>
            <div className="login-box d-flex flex-column p-4 w-75 m-auto">
                <p>Username</p>
                <input></input>
                <p>Password</p>
                <input></input>
                <Button variant="primary" size="md" className="green">Login</Button>
            </div>
        </div>
    );
}
export default Login;
