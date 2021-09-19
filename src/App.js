import React, { useEffect, useState } from "react";
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
import COVIDStatusPage from "./pages/covidStatus/covidStatusPage";
import LocationHistoryPage from "./pages/location-history/locationHistoryPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const loggedOutView = (loggedIn, setLoggedIn) => {
    return (
        <div className="container">
            <h1 className="display-5 text-center">StopTheSpread</h1>
            <Switch>
                <Route exact path="/login">
                    <LoginPage setLoggedIn={setLoggedIn} />
                </Route>
                <Route exact path="/register">
                    <RegisterPage setLoggedIn={setLoggedIn} />
                </Route>
                <Route path="*">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </div>
    );
};

const loggedInView = (loggedIn, setLoggedIn) => {
    return (
        <div>
            <NavbarComponent />
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
    const [sessionID, setSessionID] = useState(Cookies.get("SESSIONID"));
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Router>
            {loggedIn
                ? loggedInView(loggedIn, setLoggedIn)
                : loggedOutView(loggedIn, setLoggedIn)}
        </Router>
    );
}

export default App;
