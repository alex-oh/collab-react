import React from "react";
import './index.css';

function Login() {
    return (
        <div>
            <h3>Sign into Collab</h3>
            <div class="login-box">
                <p>Username</p>
                <input></input>
                <p>Password</p>
                <input></input>
                <button className="login-button"/>
            </div>
        </div>
    );
}
export default Login;
