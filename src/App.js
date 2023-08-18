// library imports
import React from "react";
import "./App.css";
import { HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// component migration
import GlobalNav from "./components/navigation/nav-bar";
import ProjectForm from "./pages/create-project";
import APICards from "./pages/api-finder";
import Home from "./pages/home";

import Login from "./pages/login-pages/login.js";
import Register from "./pages/login-pages/register.js";
import ProfilePictureUpload from "./pages/login-pages/profile-picture-upload.js";
import MainProfile from "./pages/profile/index.js";
import UserProfilePage from "./pages/profile/user-profile-page.js";
import EditProfile from "./pages/profile/edit-profile-page.js";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <GlobalNav />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/profile-picture"
                        element={<ProfilePictureUpload />}
                    />
                    <Route path="/profile" element={<MainProfile />} />
                </Routes>
                {/* <ProjectForm />
                <APICards/>
                <Register /> */}
            </div>
        </HashRouter>
    );
}
export default App;
