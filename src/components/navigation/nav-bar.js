import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./nav-bar.css"; // Import the CSS
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';

import { logoutThunk } from "../../redux-services/auth/auth-thunks";

function GlobalNav() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    let { currentUser } = useSelector((state) => state.user);
    // console.log(currentUser); debugging purposes
    const handleLogout = async () => {
        dispatch(logoutThunk());
    };

    return (
        <div className="frosted-glass">
            <Navbar variant="dark" expand="lg" className="navbar-content">
                <Link to="home" className="collab-logo">
                    <span>NEU</span> Collab
                </Link>

                {/* Navbar Toggle for Mobile Screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowModal(true)} className="d-lg-none" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto d-none d-lg-flex">

                        <Link to={currentUser ? "create-project" : "register"} className="nav-item">

                            Create a Project

                        </Link>

                        <Link to="api-finder" className="nav-item">

                            API Finder

                        </Link>

                        {currentUser ? (

                            <>

                                <Link to="profile" className="nav-item">
                                    Hi, {currentUser.username}
                                </Link>
                                <Link
                                    to="/"
                                    className="nav-item"
                                    onClick={(e) => {
                                        handleLogout();
                                    }}
                                >
                                    Log out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="register" className="nav-item">
                                    Sign up
                                </Link>
                                <Button className="green">
                                    <Link to="login" className="nav-item">
                                        Login
                                    </Link>
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header>
                    <Modal.Title style={{ color: 'black' }}> Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Nav className="flex-column">

                        <Link
                            to={currentUser ? "create-project" : "register"}
                            className="nav-item"
                            onClick={() => setShowModal(false)}
                            style={{ color: 'black' }}
                        >
                            Create a Project
                        </Link>

                        <Link
                            to={currentUser ? "api-finder" : "register"}
                            className="nav-item"
                            onClick={() => setShowModal(false)}
                            style={{ color: 'black' }}
                        >
                            API Finder
                        </Link>

                        {currentUser ? (
                            <>
                                <Link
                                    to="profile"
                                    className="nav-item"
                                    onClick={() => setShowModal(false)}
                                    style={{ color: 'black' }}
                                >
                                    Hi, {currentUser.username}
                                </Link>
                                <Link
                                    to="/"
                                    className="nav-item"
                                    onClick={(e) => {
                                        handleLogout();
                                        setShowModal(false);
                                    }}
                                    style={{ color: 'black' }}
                                >
                                    Log out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="register"
                                    className="nav-item"
                                    onClick={() => setShowModal(false)}
                                    style={{ color: 'black' }}
                                >
                                    Sign up
                                </Link>

                                <Button className="green" style={{ color: 'white' }} onClick={() => setShowModal(false)}>
                                    <Link to="login" className="nav-item">
                                        Login
                                    </Link>
                                </Button>
                            </>
                        )}
                    </Nav>
                </Modal.Body>
            </Modal>


        </div>
    );
}

export default GlobalNav;
