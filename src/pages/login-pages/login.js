import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { loginThunk } from "../../redux-services/auth/auth-thunks";
// import { findMyProjectsThunk } from "../../redux-services/projects/projects-thunks";

import "./login-pages.css";

const REJECTION_TYPE = "auth/login/rejected";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await dispatch(loginThunk({ username, password }));

            // check the type of the response
            if (response.type == REJECTION_TYPE) {
                console.log("rejected");
            } else {
                // login success!
                // navigate to home page
                navigate("/");
            }
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div className="w-50 m-auto">
            <div>
                Username:{" "}
                <pre className="text-light">
                    {JSON.stringify(username, null, 2)}
                </pre>
                Password:{" "}
                <pre className="text-light">
                    {JSON.stringify(password, null, 2)}
                </pre>
            </div>
            <h3>Sign into Collab</h3>
            <div className="login-box d-flex flex-column p-4 w-75 m-auto">
                <p>Username</p>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                ></input>
                <p>Password</p>
                <input
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <Button
                    variant="primary"
                    size="sm"
                    className="green"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
            <div className="login-box text-center mt-3 py-1 px-4 w-75 mx-auto">
                <p>
                    New?&nbsp;&nbsp;
                    <Link to="/register">Create an account</Link>
                </p>
            </div>
        </div>
    );
}
export default Login;
