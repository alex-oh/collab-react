import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./login-pages.css";

function Register() {
    return (
        <div className="w-50 m-auto">
            <h3>Create A New Account</h3>
            <div className="login-box d-flex flex-column p-4 w-75 m-auto">
                <p>Email:</p>
                <input />
                <p>Username:</p>
                <input />
                <p>Password:</p>
                <input />
                <p>Re-type password:</p>
                <input />
                <div className="subtext">
                    Passwords match/Passwords don't match
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="instructorCheck"
                    />
                    <label htmlFor="instructorCheck" className="form-check-label">
                        <p>Instructor?</p>
                    </label>
                </div>
                <Button variant="primary" size="md" className="green">
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
