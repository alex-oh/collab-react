import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./login-pages.css";

function Login() {
    return (
        <div className="w-50 m-auto">
            <h3>Sign into Collab</h3>
            <div className="login-box d-flex flex-column p-4 w-75 m-auto">
                <p>Username</p>
                <input></input>
                <p>Password</p>
                <input></input>
                <Button variant="primary" size="sm" className="green">
                    Login
                </Button>
            </div>
            <div className="login-box text-center mt-3 py-1 px-4 w-75 mx-auto">
                <p>
                    New?&nbsp;&nbsp;<Link to="/register">Create an account</Link>
                </p>
            </div>
        </div>
    );
}
export default Login;
