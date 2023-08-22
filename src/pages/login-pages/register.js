import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { registerThunk } from "../../redux-services/auth/auth-thunks";
import "./login-pages.css";

const REJECTION_TYPE = "auth/register/rejected";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [accountType, setAccountType] = useState("user");
    const [instructorCourses, setInstructorCourses] = useState("");

    const showInput = false; // toggle to see local state variables

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (passwordMatch && username && email) {
            try {
                const response = await dispatch(
                    registerThunk({
                        username,
                        password,
                        email,
                        accountType,
                        instructorCourses,
                    })
                );
                // check the type of the response
                if (response.type === REJECTION_TYPE) {
                    console.log("rejected request");
                } else {
                    // register success!
                    // navigate to home page
                    navigate("/");
                }
            } catch (e) {
                alert(e);
            }
        } else {
            console.log("register failed");
        }
    };

    return (
        <div className="login-container m-auto">
            {showInput && (
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
                    accountType:{" "}
                    <pre className="text-light">
                        {JSON.stringify(accountType, null, 2)}
                    </pre>
                    Course Id:{" "}
                    <pre className="text-light">
                        {JSON.stringify(instructorCourses, null, 2)}
                    </pre>
                </div>
            )}

            <h3 className="mx-4">Create A New Account</h3>
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
                        if (event.target.value === password2) {
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
                        if (event.target.value === password) {
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
                        onChange={(event) => {
                            if (event.target.checked) {
                                setAccountType("instructor");
                            } else {
                                setAccountType("user");
                            }
                        }}
                    />
                    <label
                        htmlFor="instructorCheck"
                        className="form-check-label"
                    >
                        <p>Instructor?</p>
                    </label>
                </div>
                {accountType === "instructor" && (
                    <>
                        <p>Course Id</p>
                        <input
                            type="text"
                            value={instructorCourses}
                            onChange={(event) => {
                                setInstructorCourses(event.target.value);
                            }}
                        />
                    </>
                )}

                <Button
                    variant="primary"
                    size="md"
                    className="green mt-3"
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
