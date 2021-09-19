import React from "react";
import { Link, useHistory } from "react-router-dom";

const LoginPage = ({ setLoggedIn }) => {
    const history = useHistory();
    const onSubmit = () => {
        setLoggedIn(true);
        history.push("/status");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Type of Account</label>
                <select id="roles">
                    <option value="Business">Business</option>
                    <option value="User" selected>
                        Individual
                    </option>
                </select>
                <label>Username:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="password" />
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Don't have an account? Sign up here.</Link>
        </div>
    );
};

export default LoginPage;
