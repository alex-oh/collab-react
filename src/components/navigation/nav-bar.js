import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./nav-bar.css"; // Import the CSS
import Button from "react-bootstrap/esm/Button";

function GlobalNav() {
    return (
        <div className="frosted-glass">
            <Navbar variant="dark" expand="lg" className="navbar-content">
                <Link to="home" className="collab-logo">
                    <span>NEU</span> Collab
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="create-project" className="nav-item">Create a Project</Link>
                        <Link to="api-finder" className="nav-item">API Finder</Link>
                        <Link to="profile" className="nav-item">Hi, Tom!</Link>
                        <Link to="register" className="nav-item">Sign up</Link>
                        <Button className="green"><Link to="login" className="nav-item">Login</Link></Button>
                        <Link to="logout" className="nav-item">Log out</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default GlobalNav;
