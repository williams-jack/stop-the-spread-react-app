import React from "react";
import { Link } from "react-router-dom";

const onSubmit = () => {};

const LoginPage = () => {
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
            </form>
            <Link>Don't have an account? Sign up here.</Link>
        </div>
    );
};

export default LoginPage;
