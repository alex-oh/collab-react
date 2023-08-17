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

function App() {
  return (
      <HashRouter>
          <div className="App">
              <GlobalNav />
              <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/main-profile" element={<MainProfile />} />
              </Routes>
              {/* <ProjectForm /> */}  
              {/* <APICards/> */}
              <MainProfile />
          </div>
      </HashRouter>
  );
}
export default App;
