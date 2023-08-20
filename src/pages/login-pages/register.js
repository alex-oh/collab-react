import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { registerThunk } from "../../redux-services/auth/auth-thunks";
import "./login-pages.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isInstructor, setIsInstructor] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (passwordMatch && username && email) {
            try {
                const registeredUser = dispatch(registerThunk({ username, password, email }));
                console.log(registeredUser);
                navigate("/");
            } catch (e) {
                alert(e);
            }
        } else {
            console.log("register failed");
        }
    };

    return (
        <div className="w-50 m-auto">
            <div>
                Email:{" "}
                <pre className="text-light">
                    {JSON.stringify(email, null, 2)}
                </pre>
                Username:{" "}
                <pre className="text-light">
                    {JSON.stringify(username, null, 2)}
                </pre>
                Password:{" "}
                <pre className="text-light">
                    {JSON.stringify(password, null, 2)}
                </pre>
                Password repeated:{" "}
                <pre className="text-light">
                    {JSON.stringify(password2, null, 2)}
                </pre>
                Password match:{" "}
                <pre className="text-light">
                    {JSON.stringify(passwordMatch, null, 2)}
                </pre>
            </div>
            <h3>Create A New Account</h3>
            <div className="login-box d-flex flex-column p-4 w-75 m-auto">
                <p>Email:</p>
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <p>Username:</p>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <p>Password:</p>
                <input
                    type="text"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        if (event.target.value == password2) {
                            setPasswordMatch(true);
                        } else {
                            setPasswordMatch(false);
                        }
                    }}
                />
                <p>Re-type password:</p>
                <input
                    type="text"
                    value={password2}
                    onChange={(event) => {
                        setPassword2(event.target.value);
                        if (event.target.value == password) {
                            setPasswordMatch(true);
                        } else {
                            setPasswordMatch(false);
                        }
                    }}
                />
                <div className="subtext">
                    Passwords{" "}
                    {passwordMatch ? (
                        <span>match</span>
                    ) : (
                        <span>don't match</span>
                    )}
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="instructorCheck"
                    />
                    <label
                        htmlFor="instructorCheck"
                        className="form-check-label"
                    >
                        <p>Instructor?</p>
                    </label>
                </div>
                <Button
                    variant="primary"
                    size="md"
                    className="green"
                    onClick={handleRegister}
                >
                    Register
                </Button>
            </div>
            <div className="login-box text-center mt-3 py-1 px-4 w-75 mx-auto">
                <p>
                    Already have an account?&nbsp;&nbsp;
                    <Link to="/login">Log in here</Link>
                </p>
            </div>
        </div>
    );
}
export default Register;
