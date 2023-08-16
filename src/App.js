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
import Login from "./pages/login";

// temp components for dev reference
import FontsTest from "./components/fonts-test";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <FontsTest />
                <GlobalNav />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <ProjectForm />
                {/* <APICards/> */}
            </div>
        </HashRouter>
    );
}
export default App;
