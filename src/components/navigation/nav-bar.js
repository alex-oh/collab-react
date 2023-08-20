import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./nav-bar.css"; // Import the CSS
import Button from "react-bootstrap/esm/Button";

import { logoutThunk } from "../../redux-services/auth/auth-thunks";

function GlobalNav() {
    const dispatch = useDispatch();
    let { currentUser } = useSelector((state) => state.user);

    const handleLogout = async() => { // assume this only is visible if user is logged in
        dispatch(logoutThunk());
        currentUser = null;
    }
    return (
        <div className="frosted-glass">
            <Navbar variant="dark" expand="lg" className="navbar-content">
                <Link to="home" className="collab-logo">
                    <span>NEU</span> Collab
                </Link>
                <div className="nav-item float-left">
                    User: {JSON.stringify(currentUser, null, 2)}
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="create-project" className="nav-item">
                            Create a Project
                        </Link>
                        <Link to="api-finder" className="nav-item">
                            API Finder
                        </Link>
                        <Link to="profile" className="nav-item">
                            Hi, {currentUser != null ? (<span>{currentUser.username}</span>) : (<span>nobody</span>)}
                        </Link>
                        <Link to="register" className="nav-item">
                            Sign up
                        </Link>
                        <Button className="green">
                            <Link to="login" className="nav-item">
                                Login
                            </Link>
                        </Button>
                        <Link to="/" className="nav-item" onClick={handleLogout}>
                            Log out
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default GlobalNav;
