import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import GlobalNav from "./components/navigation/nav-bar";
import CollabRoutes from "./routes";

import authReducer from "./redux-services/auth/auth-reducer";

const store = configureStore({
    reducer: {
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
                        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
                        {/* <Route path="/home" element={<Home />} /> */}
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
                    <CollabRoutes />
                </div>
            </HashRouter>
        </Provider>
    );
}
export default App;
