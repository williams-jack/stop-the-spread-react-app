import React from "react";
import { Link, useHistory } from "react-router-dom";

const LoginPage = ({ setLoggedIn }) => {
    const history = useHistory();
    const onSubmit = () => {
        setLoggedIn(true);
        history.push("/status");
    };
    return (
        <div className="d-flex justify-content-center">
            <form className="w-75" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" for="roles">
                        Type of Account
                    </label>
                    <select id="roles" className="form-control">
                        <option value="Business">Business</option>
                        <option value="User" selected>
                            Individual
                        </option>
                    </select>
                </div>
                <div classname="mb-3">
                    <label className="form-label">Username:</label>
                    <input className="form-control" type="username" />
                </div>
                <div classname="mb-3">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" />
                </div>
                <div className="d-flex mt-3 mb-2 justify-content-center">
                    <button className="btn btn-success w-100" type="submit">
                        Login
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/register" className="text-center">
                        Don't have an account? Sign up here.
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
