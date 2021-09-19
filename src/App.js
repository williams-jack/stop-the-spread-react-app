import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import NotFoundErrorPage from "./pages/error/error404Page";
import RegisterPage from "./pages/register/registerPage";
import Cookies from "js-cookie";
import NavbarComponent from "./pages/components/navbar";
import COVIDStatusPage from "./pages/user-pages/covidStatus/covidStatusPage";
import LocationHistoryPage from "./pages/user-pages/locaton-history/locationHistoryPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect } from "react/cjs/react.development";

const loggedOutView = (setLoggedIn, setRole, setUsername) => {
    return (
        <div className="container">
            <h1 className="display-5 text-center">StopTheSpread</h1>
            <Switch>
                <Route exact path="/login">
                    <LoginPage
                        setLoggedIn={setLoggedIn}
                        setRole={setRole}
                        setUsername={setUsername}
                    />
                </Route>
                <Route exact path="/register">
                    <RegisterPage
                        setLoggedIn={setLoggedIn}
                        setRole={setRole}
                        setUsername={setUsername}
                    />
                </Route>
                <Route path="*">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </div>
    );
};

const loggedInView = (setLoggedIn, role, username) => {
    return (
        <div>
            <NavbarComponent role={role} />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/status">
                        <COVIDStatusPage />
                    </Route>
                    <Route exact path="/history">
                        <LocationHistoryPage />
                    </Route>
                    <Route path="*">
                        <NotFoundErrorPage />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

function App() {
    const [role, setRole] = useState(window.localStorage.getItem("role"));
    const [username, setUsername] = useState(
        window.localStorage.getItem("username")
    );
    const [loggedIn, setLoggedIn] = useState(role && username);

    return (
        <Router>
            {loggedIn
                ? loggedInView(loggedIn, setLoggedIn)
                : loggedOutView(setLoggedIn, setRole, setUsername)}
        </Router>
    );
}

export default App;
