import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProjectForm from "./pages/create-project";
import APICards from "./pages/api-finder";
import Home from "./pages/home";
import Login from "./pages/login-pages/login.js";
import Register from "./pages/login-pages/register.js";
import ProfilePictureUpload from "./pages/login-pages/profile-picture-upload.js";
import Profile from "./pages/profile";
import CreateProject from "./pages/create-project";
import ProjectDetails from "./pages/project-details";
import APIDetails from "./pages/api-details";

function CollabRoutes() {
    let { currentUser } = useSelector((state) => state.user);
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {currentUser && <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/api-finder" element={<APICards />} />
                <Route path="/create-project" element={<CreateProject />} />
            </>}
            <Route path="/profile/:uid" element={<Profile />} />
            <Route path="/apis/:aid" element={<APIDetails />} />
            <Route path="/projects/:pid" element={<ProjectDetails />} />
        </Routes>
    );
}

export default CollabRoutes;
