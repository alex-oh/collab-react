// library imports
import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// component migration
import GlobalNav from "./components/navigation/nav-bar";
import CollabRoutes from "./routes";

// reducers
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
                    <CollabRoutes />
                </div>
            </HashRouter>
        </Provider>
    );
}
export default App;
