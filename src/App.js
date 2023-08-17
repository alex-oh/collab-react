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
import MainProfile from "./pages/profile";
import Register from "./pages/login-pages/register";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <GlobalNav />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
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