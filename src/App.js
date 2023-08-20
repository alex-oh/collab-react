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
import Profile from "./pages/profile";
import CreateProject from "./pages/create-project";
import ProjectDetails from "./pages/project-details";
import APIDetails from "./pages/api-details";

// reducers
import projectsReducer from "./redux-services/projects/projects-reducer.js";
import authReducer from "./redux-services/auth/auth-reducer";

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: authReducer,
    },
});

function App() {
    return (
        <Provider store={store}>
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
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/profile/:uid" element={<Profile />} />
                        <Route path="/api-finder" element={<APICards />} />
                        <Route path="/apis/:aid" element={<APIDetails />} />
                        <Route
                            path="/create-project"
                            element={<CreateProject />}
                        />
                        <Route path="/projects/:pid" element={<ProjectDetails />} />
                    </Routes>
                </div>
            </HashRouter>
        </Provider>
    );
}
export default App;
