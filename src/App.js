// library imports
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

// component migration
import GlobalNav from "./components/navigation/nav-bar";
import ProjectForm from "./pages/create-project";
import APICards from "./pages/api-finder";
import Home from "./pages/home";

import Login from "./pages/login-pages/login.js";
import Register from "./pages/login-pages/register.js";
import ProfilePictureUpload from "./pages/login-pages/profile-picture-upload.js";
import MainProfile from "./pages/profile/index.js";


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
                    <Route path="/profile-picture" element={<ProfilePictureUpload />}/>

                </Routes>
                {/* <ProjectForm /> */}
                {/* <APICards/> */}
                {/* <Register /> */}
                <MainProfile />
                
            </div>
        </HashRouter>
    );
}
export default App;