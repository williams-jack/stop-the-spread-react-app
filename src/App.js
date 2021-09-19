import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import NotFoundErrorPage from "./pages/status/error404Page";
import RegisterPage from "./pages/register/registerPage";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <LoginPage setLoggedIn={setLoggedIn} />
                </Route>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route path="*">
                    <NotFoundErrorPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
